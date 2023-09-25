import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoUrl = 'https://player.vimeo.com/video/867757090?h=d306485fbc&color=ff9933&title=0&byline=0&portrait=0'; // Reemplaza con la URL de tu video en Vimeo
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (playerRef.current) {
      setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
      if (isPlaying) {
        playerRef.current.getInternalPlayer().pause();
      } else {
        playerRef.current.getInternalPlayer().play();
      }
    }
  };

  const handleFullscreen = () => {
    const player = playerRef.current.getInternalPlayer();
    if (player) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container-position">
    <div className="video-container">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={isPlaying}
        volume={0.5}
        controls={false}
        width="100%"
        height="100%"
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={handleTogglePlay}
        className="play-button" // Aplica la clase 'play-button'
      >
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
      <button
        onClick={handleFullscreen}
        className="fullscreen-button" // Aplica la clase 'fullscreen-button'
      >
        Pantalla completa
      </button>
    </div>
    </div>
  );
};

export default VideoPlayer;
