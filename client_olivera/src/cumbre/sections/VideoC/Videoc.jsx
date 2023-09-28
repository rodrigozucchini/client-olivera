import React from 'react';
import ReactPlayer from 'react-player';
import './Videoc.css';

const VideoC = () => {

    const videocUrl = "https://www.youtube.com/watch?v=yRSQyVQoWQg";

  return (
    <div className="videoc-player-container">
      <ReactPlayer
        url={videocUrl}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoC;