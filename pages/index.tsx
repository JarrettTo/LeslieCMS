import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './styles.module.css';
import Head from 'next/head';
import 'react-image-lightbox/style.css'; // This only needs to be imported once
import ReactPlayer from "react-player";
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
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    setIsClosing(false); // Make sure to reset closing state
  };
  
  function getFileExtension(filename) {
    // Find the last dot in the filename
    const lastDotIndex = filename?.lastIndexOf('.');
    return lastDotIndex !== -1 ? filename?.substring(lastDotIndex + 1) : '';
  }
  function removeFileExtension(fileName) {
    // Use a regular expression to replace the file extension with an empty string
    return fileName.replace(/\.[^/.]+$/, "");
  }
  
  async function convertDropboxLink(file: FileType) {
    try {
      return file?.url.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("dl=0", "dl=1");
    } catch (error) {
      console.error('Error in convertDropboxLink:', error);
      return null; // or some fallback URL
    }
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Range from 0 to 1

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleProgress = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    progressBarRef.current.value = progress;
  };

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
  const moveToNextMedia = (event) => {
    event.stopPropagation(); // Stop click from bubbling up
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % files.length);
  };
  
  const moveToPrevMedia = (event) => {
    event.stopPropagation(); // Stop click from bubbling up
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + files.length) % files.length);
  };
  const LightboxContent = () => {
    const file = files[currentImageIndex];
    const isVideo = getFileExtension(file.name) === 'mp4';
    const imageCounterText = `${currentImageIndex + 1} / ${files.length} ${files[currentImageIndex].name}`;

    const handleCloseLightbox = () => {
      setIsClosing(true); // Set closing state to trigger fade-out animation
    
      // After the animation duration, close the lightbox
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false); // Reset closing state
      }, 300); // Animation duration
    };
    

    return (
      <div
        className={`${styles.lightboxBackdrop} ${isOpen && !isClosing ? styles.lightboxOpening : ''} ${isClosing ? styles.lightboxClosing : ''}`}
        
      >
        <div className={styles.lightboxOverlay}>
          {imageCounterText}
        </div>
        <div className={styles.mediaContainer}>
          {isVideo ? (
            <>
            <ReactPlayer
              width="90%"
              height="90%"
              url={file.preview_url}
              controls={true}
              // light is usefull incase of dark mode
              light={false}
              // picture in picture
              pip={true}
            />
            
            </>
          
          ) : (
            <img
              src={file.preview_url}
              alt={file.name}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          )}
        </div>
        {files.length > 1 && (
          <>
            <button className={`${styles.lightboxButton} ${styles.prev}`} onClick={moveToPrevMedia}>
              &lsaquo;
            </button>
            <button className={`${styles.lightboxButton} ${styles.next}`} onClick={moveToNextMedia}>
              &rsaquo;
            </button>

          </>
        )}
        <button className={`${styles.lightboxButton} ${styles.info}`} onClick={handleCloseLightbox}>(i)</button>
        <button className={`${styles.lightboxButton} ${styles.close}`} onClick={handleCloseLightbox}>×</button>
      </div>
    );
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
    fetchDropboxFiles();
    // Moved inside useEffect to ensure `videoRef.current` is available
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleProgress);
      
      return () => {
        video.removeEventListener('timeupdate', handleProgress);
      };
    }
  }, []); // Adding 'files' as a dependency to re-run when files are fetched

  return (
    <>
    <text className={styles.name}>LESLIE SHARPE</text>
    <div>
      
      <div  className={styles.gridContainer}>
        {files?.map((file, index) => (
          <>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
          </Head>
          <div key={file?.id || index} className={styles.gridItem} onClick={() => openLightbox(index)}>
            <div>
            <div className={styles.imageWrapper}>
              {file?.preview_url && getFileExtension(file?.name) === 'mp4'
                ? (
                  <div className={styles.videoThumbnail}>
                    <video src={file?.preview_url} preload="metadata" />
               
                  </div>
                )
                : <img src={file?.preview_url} alt={file?.name} />}
            </div>

          </div>
          <div className={styles.textContainer}>
            <text className={styles.gridItemName}>{removeFileExtension(file?.name)}</text>
            <text className={styles.gridItemDate}>{file?.client_modified}</text>
          </div>
          </div>
          </>
        ))}
      </div>
    
    </div>
    {isOpen &&<LightboxContent />}
    </>
  );
};

export default Home;
