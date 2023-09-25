import React from 'react';
import './Header.css';
import VideoPlayer from '../video/VideoPlayer';
import ButtonAction from '../button/ButtonAction';

const HeaderIncruises = () => {
  return (
    <>
      <div className='background-container'>
        <div className='header-title'>
            <p><i>Video de 7 minutos explica...</i></p>
        </div>
        <div className='header-subtitle'>
            <p>Como viajar a diferentes partes del mundo, <br/>mientras aprendes a <span className="subtitle-color">ganar dinero con internet</span></p>
        </div>
        <VideoPlayer/>
        <ButtonAction />
      </div>
    </>
  )
}

export default HeaderIncruises