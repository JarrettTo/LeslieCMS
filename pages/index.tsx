import React, { useState, useEffect } from 'react';
import ImageLightbox from 'react-image-lightbox';
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
};
const Home: React.FC = () => {

  const [files, setFiles] = useState<FileType[]>([]); // replace with actual data fetching
  const [isOpen, setIsOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState<string>('');
  const openLightbox = (url: string) => {
    setCurrentFile(url);
    setIsOpen(true);
  };
  
  const fetchDropboxFiles = async () => {
    try {
      const res = await fetch('/api/dropbox');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setFiles(data.map(response => response.result));
      console.log(data);
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
      {files.map((file) => (
        <button key={file.id} onClick={() => openLightbox(file.url)}>
          {file.name}
        </button>
      ))}
      {isOpen && (
        <ImageLightbox
          mainSrc={currentFile}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </div>

    </div>
  );
};

export default Home;
