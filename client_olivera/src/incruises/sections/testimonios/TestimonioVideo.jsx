import React from 'react';
import './TestimonioVideo.css';
import VideoCard from './VideoCard';

const TestimoniosVideo = () => {

    const videos = [
        {
          url: 'https://youtu.be/Cq5kKdTkxsc',
        },
        {
          url: 'https://youtube.com/shorts/FY5TdHtDDIE?feature=share',
        },
        {
          url: 'https://www.youtube.com/watch?v=ZYNHHSOkoKY',
        },
      ];
    
      return (
        <div className="video-testimonio">
          <div className="video-container-2">
            {videos.map((video, index) => (
              <VideoCard key={index} url={video.url} title={video.title} />
            ))}
          </div>
        </div>
      );
}

export default TestimoniosVideo