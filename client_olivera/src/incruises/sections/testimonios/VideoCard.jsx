import React from 'react';
import ReactPlayer from 'react-player';
import './TestimonioVideo.css';

const VideoCard = ({ url }) => {
  return (
    <div className="video-card">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        config={{ youtube: { playerVars: { showinfo: 1 } } }}
      />
    </div>
  );
};

export default VideoCard;