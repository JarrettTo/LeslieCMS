import { useState, useCallback, FormEvent } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

const AdminPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [sheet, setSheet] = useState<File>(null);
  const [error, setError] = useState<boolean>(false);
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would handle the login logic
    console.log('Submitted', { username, password });
    // For demonstration, we'll just set isLogged to true
    setIsLogged(true);
  };
  const handleUpload = async () => {
    if (sheet) {
      // Create a file reader
      const reader = new FileReader();
  
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
        } catch (error) {
            console.error('Error uploading files:', error);
        }
          
       
      };
  
      // Read the file as binary string
      reader.readAsBinaryString(sheet);
    }
    else{
        setError(true)
    }
  };
  const checkSheet = () => {
    if(sheet != null){
        
    }
  };
  return (
    isLogged ? (
        <div>
        <h1>File Uploader</h1>
        <div {...getRootProps()} style={{ border: '2px dashed black', padding: '20px', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
        {error && (
            <div>You need to upload an accompanying sheet with the upload information!</div>
        )}
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