import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './styles.module.css';

type FileType = {
  ".tag": string;
  url: string;
  name: string;
  link_permissions: string;
  client_modified: string;

  id: string;

  path_lower: string;
  rev: string;
  server_modified: string;
  team_member_info:string;
  content_owner_team_info: string;
  size: number;
  preview_url :string;
};
const Home: React.FC = () => {

  const [files, setFiles] = useState<FileType[]>([]); // replace with actual data fetching
  const [isOpen, setIsOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState<string>('');
  const openLightbox = (url: string) => {
    setCurrentFile(url);
    setIsOpen(true);
  };
  function getFileExtension(filename) {
    // Find the last dot in the filename
    const lastDotIndex = filename?.lastIndexOf('.');
    return lastDotIndex !== -1 ? filename?.substring(lastDotIndex + 1) : '';
  }
  function bufferToArrayBuffer(buffer) {
    return buffer.buffer?.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
  function convertToUrl(buffer) {
    const arrayBuffer = bufferToArrayBuffer(buffer);
    const blob = new Blob([arrayBuffer]); // Adjust the MIME type as needed

    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl)
    return imageUrl;
}
  async function convertDropboxLink(file: FileType) {
    try {
      return file?.url.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("dl=0", "dl=1");
    } catch (error) {
      console.error('Error in convertDropboxLink:', error);
      return null; // or some fallback URL
    }
  }

  const fetchDropboxFiles = async () => {
    try {
      const res = await fetch('/api/dropbox');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      const processedFiles = await Promise.all(data.map(async file => {
        const url = await convertDropboxLink(file);
        if(url!=null){
          return { ...file, preview_url: url }; 
        }
        // Combine the file info with the new URL
      }));
      const filteredFiles = processedFiles.filter(file => file!= null);
      console.log(filteredFiles)
      setFiles(filteredFiles);

    } catch (error) {
      console.error('There was an error fetching the Dropbox files', error);
    }
  };

  const fetchCloudinaryFiles = async () => {
    try {
      const res = await fetch('/api/cloudinary');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error('There was an error fetching the Dropbox files', error);
    }
  };
  useEffect(() => {
   
  }, []);
  return (
    <div>
      <button onClick={fetchDropboxFiles}>Load Files from Dropbox</button>
      <div  className={styles.gridContainer}>
        {files?.map((file, index) => (
          <div key={file?.id || index}  className={styles.gridItem} onClick={() => openLightbox(file?.preview_url)}>

            {file?.preview_url && getFileExtension(file?.name) === 'mp4'
              ? (
                  <div  className={styles.videoThumbnail}>
                    <video src={file?.preview_url} preload="metadata"/>
                    <div className={styles.playButton}>Play</div>
                  </div>
                )
              : <img src={file?.preview_url} alt={file?.name} />}
            <text>{file?.name}</text>
            <text>{file?.client_modified}</text>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={currentFile}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
