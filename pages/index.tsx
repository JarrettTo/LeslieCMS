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
  const [profileOpen, setProfileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef(null);
  const playerWrapperRef = useRef();
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
  const ProfileDetails = () =>{
    return(
      <div className={styles.baseBlock}>
        <div className={styles.headingOverlay}>
          <text className={styles.nameOverlay}>LESLIE SHARPE</text>
          <button className={`${styles.lightboxButton} ${styles.closeHeader}`} onClick={()=>setProfileOpen(false)}>(×)</button>
        </div>
        <div className={styles.holder}>
          <div className={styles.description}>
            
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta acconsectetur ac, vestibulum at eros.
          
          </div>
          <div className={styles.emptySpace}>
            {/* This div will take up the remaining space */}
          </div>
        </div>
        <div className={styles.holder}>
          <div className={styles.buttons}>
             <button className={styles.socialButton}>Contact</button>
             <button className={styles.socialButton}>LinkedIn</button>
             <button className={styles.socialButton}>Instagram</button>
             <button className={styles.socialButton}>Email</button>
          </div>
          <div className={styles.emptySpaceButtons}>
            {/* This div will take up the remaining space */}
          </div>
        </div>
        <div className={styles.columnHolder}>
          <div className={styles.column}>
            EXPERIENCE<br/>
            Bear Meets Eagle On Fire<br/>
            Creative Director<br/>
            Aug 2022 - present<br/>
            <br/>
            Howatson & Co<br/>
            Head of Art & Creative Director<br/>
            Jan 2021 - Aug 2022<br/>
            Bear Meets Eagle On Fire Freelance creative Aug 2019 – Dec 2021<br/>
            R/GA, DDB, We Are Social,<br/>
            The Monkeys Freelance Senior Creative<br/>
            Feb 2018 - Oct 2018<br/>
            <br/>
            Marcel Sydney<br/>
            Associate Creative Director<br/>
            Nov 2015 - Nov 2017<br/>
            <br/>
            Droga5 Sydney<br/>
            Senior Art Director<br/>
            Jan 2012- Nov 2011<br/>
          </div>
          <div className={styles.column}>
            AWARDS<br/>
            Cannes Gold Lion x 1<br/>
            Cannes Silver Lion x 4<br/>
            Cannes Bronze Lion x 1<br/>
            <br/>
            D&AD Yellow Pencil x 3<br/>
            D&AD Graphite Pencil x 4<br/>
            D&AD Wood Pencil x 6<br/>
            <br/>
            AWARD Gold x 8<br/>
            AWARD Silver x 15<br/>
            AWARD Bronze x 5<br/>
            <br/>
            Beazley Product<br/>
            Design of the Year<br/>
            <br/>
            Exhibitions<br/>
            <br/>
            DEMO Festival, Amsterdam
            Most Contagious, London
            London Design Museum, London
            Art Gallery of NSW, Sydney
            Rise, Carriage Works Sydney
            Work Features
          </div>
          <div className={styles.column}>
            Exhibitions<br/>
            <br/>
            DEMO Festival, Amsterdam<br/>
            Most Contagious, London<br/>
            London Design Museum, London<br/>
            Art Gallery of NSW, Sydney<br/>
            Rise, Carriage Works Sydney<br/>
            Work Features<br/>
            WORK FEATURES<br/>
            <br/>
            It’s Nice That 1,2,3,4<br/>
            Wired 1<br/>
            Fast Company 1,2<br/>
            CNN 1<br/>
            The Guardian 1<br/>
            Contagious Magazine 1<br/>
            Complex Mag 1<br/>
            Creators Project 1<br/>
            Business Insider 1<br/>
            Cool Hunting 1,2<br/>
            Creative Review 1,2,3<br/>
            Hype Beast 1, 2<br/>
            Creativity 1,2,3<br/>
          </div>
        </div>
      </div>
    );
  }
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
                width="100%"
                className={styles.reactPlayer}
                height="100%"
                url={file.preview_url}
                controls={true}
                light={false}
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
        <button className={`${styles.lightboxButton} ${styles.close}`} onClick={handleCloseLightbox}>(×)</button>
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
    <div className={styles.heading}>
      <text className={styles.nameOverlay}>LESLIE SHARPE</text>
      <button className={`${styles.leslieInfo}` } onClick={() => setProfileOpen(true)}>(i)</button>
    </div>
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
    {profileOpen &&<ProfileDetails />}
    </>
  );
};

export default Home;
