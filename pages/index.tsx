import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import { files } from 'dropbox';


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
      if (getFileExtension(file?.name) === "mp4") {
        const res = await fetch(`/api/thumbnail?path=${encodeURIComponent(file?.path_lower)}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        // Handle non-JSON response
        const blob = await res.blob();
        return URL.createObjectURL(blob);
     
      }
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
        return { ...file, preview_url: url }; // Combine the file info with the new URL
      }));
      console.log(processedFiles)
      setFiles(processedFiles);

    } catch (error) {
      console.error('There was an error fetching the Dropbox files', error);
    }
  };
  useEffect(() => {
    fetchDropboxFiles();
  }, []);
  return (
    <div>
      <button onClick={fetchDropboxFiles}>Load Files from Dropbox</button>
      <div>
        {files?.map( (file, index) => (
          <button key={file?.id || index} onClick={() => openLightbox(file?.url)} style={{ padding: 0, border: 'none', background: 'none' }}>
            <img src={file?.preview_url} alt={file?.name} style={{ width: '100px', height: '100px' }} />
          </button>
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={currentFile}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
      </div>

    </div>
  );
};

export default Home;
