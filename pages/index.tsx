import React from 'react';

const Home: React.FC = () => {
  // Define the state type for the files
  const [files, setFiles] = React.useState<any[]>([]);

  const fetchDropboxFiles = async () => {
    try {
      const res = await fetch('/api/dropbox');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setFiles(data.result.entries);
      console.log(data);
    } catch (error) {
      console.error('There was an error fetching the Dropbox files', error);
    }
  };

  return (
    <div>
      <button onClick={fetchDropboxFiles}>Load Files from Dropbox</button>
      <ul>
        {files?.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
