import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoUrl = 'https://vimeo.com/868543913?share=copy';

  return (
    <div className="container-position">
    <div className="video-container">
    <ReactPlayer
        width="100%"
        height="100%"
        url={videoUrl} // URL de tu video de YouTube
        controls={true}
      />
    </div>
    </div>
  );
};

export default VideoPlayer;
