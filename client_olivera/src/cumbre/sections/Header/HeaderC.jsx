import React from 'react'
import './Headerc.css';
import VideoC from '../VideoC/Videoc';
import ButtoncAction from '../buttonc/Buttonc';
import { Logo } from '../Logo/Logo';

const HeaderC = () => {
  return (
    <div className="background-mountain">
        <div className='headerc-title'>
            <p><i>Video de 10 minutos explica...</i></p>
        </div>
        <div className='headerc-subtitle'>
          <p>LAS <span className="subtitlec-color">3 CLAVES</span> PARA AUMENTAR TUS<br/>RESULTADOS EN <span className="subtitlec-color">MULTINIVEL</span></p>
        </div>
        <div className='headerc-subtitle2'>
          <p>(Incluso si no tienes experiencia ni resultados)</p>
        </div>
        <VideoC />
        <ButtoncAction />
    </div>
  )
}

export default HeaderC 