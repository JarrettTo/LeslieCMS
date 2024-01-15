import { useState, useCallback, FormEvent, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';
import styles from './styles.module.css'
const AdminPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [sheet, setSheet] = useState<File>(null);
  const [error, setError] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [dbxError, setDbxError] = useState(false);
  const [dbxAuth, setDbxAuth] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");
  const router = useRouter();

  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {

      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          file.type === 'application/vnd.ms-excel' ||
          file.type === 'text/csv') {
        setSheet(file);
        setError(false)
        } else {
            setFiles(prevFiles => [...prevFiles, file]);
        }
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const DropboxLogin = () => {
    const clientID = 'zxopq57digvsdau';
    const redirectURI = 'http://localhost:3000/api/oauth/callback'; // Adjust depending on your setup

    const redirectToDropbox = () => {
        const authURL = `https://www.dropbox.com/oauth2/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}`;
        window.location.href = authURL;
    };

    return (
        <button onClick={redirectToDropbox}>Log in with Dropbox</button>
    );
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted', { username, password });
    if(username == 'Admin' && password == "Admin"){
      setIsLogged(true);
    }else{
      setLoginError(true)
    }
    
  };
  const handleClear = (e: FormEvent) => {
    e.preventDefault();
    setFiles([]);
    setSheet(null);
  };
  const handleUpload = async () => {
    if (sheet && dbxAuth) {
      // Create a file reader
      const reader = new FileReader();
      setSuccessful(false)
      setIsUploading(true);
      setUploadError(null);
      // On reader load
      reader.onload = async (e) => {
        // Parse data
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
  
        // Loop through each sheet in workbook
        
          // Convert sheet to JSON
        const XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

        // Log JSON object for each sheet
        console.log(XL_row_object);
        const formData = new FormData();


        formData.append('json', JSON.stringify(XL_row_object));
        

        files.forEach((file, index) => {
            // Append the file directly
            formData.append('files', file);
          
            // Append the lastModified date as a string
            // Note: lastModified is in milliseconds, you might want to convert it to a more readable format
            formData.append(`dates[${file.name}]`, file.lastModified.toString());
          });
        // Send the request to your API endpoint
        try {   
          const response = await fetch('/api/upload_cd', {
              method: 'POST',
              body: formData, // Send the form data
              
          });

          const result = await response.json();
          console.log(result);
          if(result.status!=200){
            setSuccessful(false)
            setUploadError(result.message)
          }
          else{
            setUploadError(null)
            setSuccessful(true)
          }
          setFiles([])
          setSheet(null)
          
          setIsUploading(false);
        } catch (error) {
            console.error('Error uploading files:', error);
        }finally {
          setIsUploading(false); // Stop the upload indicator
        }
          
       
      };
  
      // Read the file as binary string
      reader.readAsBinaryString(sheet);
    }
    else{
      if(!dbxAuth){
        setDbxError(true)
      }
      else{
        setError(true)
      }
      
    }
  };
 
  useEffect(() => {
    // Check for the 'code' parameter returned by Dropbox after successful auth
    if (router.query.login=="success") {
      // Assume setIsLogged would be true if the user is already logged into your app
      setIsLogged(true);
      // You would typically exchange 'code' for an access token here
      // and then set dbxAuth to true if that process is successful
      setDbxAuth(true);

      // Optionally, redirect to remove the code from the URL
      
    }
  }, [router, ]);
  return (
    isLogged ? (
        <div>
        <h1>File Uploader</h1>
        {!dbxAuth && router.query.login == 'fail' &&(
          <p>Dropbox Auth Failed!</p>
        )}
        {!dbxAuth && (
          <DropboxLogin/>
        )}
        {isUploading && (
          <div className={styles.uploadingIndicator}>
            <div className={styles.spinner}></div>
          </div>
        )}
        {successful && (
          <p>Successfully Uploaded!</p>
        )}
        {dbxError && (
          <p>You Need to Connect your Dropbox account first!</p>
        )}
        {error && (
            <div>You need to upload an accompanying sheet with the upload information!</div>
        )}
        {uploadError && (
            <div>Could not find files: {uploadError}</div>
        )}
        <div {...getRootProps()} style={{ border: '2px dashed black', padding: '20px', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleUpload}>Upload</button>
        {files.length > 0 && (
          <div>
            <h2>Uploaded files</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                {file.name} - Size: {file.size} bytes
                <br />
                Last Modified Date: {new Date(file.lastModified).toLocaleDateString()} {/* Here's the added line */}
              </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ): (
        <div>
            <h1>Admin Login</h1>
            {loginError && (
              <p>Incorrect username or password</p>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
    
  );
};

export default AdminPage;