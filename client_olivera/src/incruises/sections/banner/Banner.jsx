import React from 'react';
import './Banner.css';
import Members from "./../../../assets/members2.png";
import Partners from "./../../../assets/partners.png";
import Cruises from "./../../../assets/cruise.png";
import Worlds from "./../../../assets/world.png";
import Guests from "./../../../assets/guests.png";
import Clia from "./../../../assets/clia.png";
import Trust from "./../../../assets/trust-my-travel.png";

const Banner = () => (
  <div className='backg-banner'>
    <div className='banner-card'>
      <div className='card-img'>      
        <img width="70" className='img-banner' src={Members}/>
      </div>
      <h1 className='banner-card-h1'>+1.401.374</h1>
      <p className='banner-card-p'>Miembros Registrados Acumulados</p>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="70" className='img-banner' src={Partners}/>
      </div>
        <h1 className='banner-card-h1'>+298.775</h1>
        <p className='banner-card-p'>Socios Acumulados</p>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="70" className='img-banner' src={Worlds}/>
      </div>
        <h1 className='banner-card-h1'>+204</h1>
        <p className='banner-card-p'>Países y contando</p>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="70" className='img-banner' src={Cruises}/>
      </div>
        <h1 className='banner-card-h1'>+192.204</h1>
        <p className='banner-card-p'>Ofertas de Hoteles y Cruceros</p>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="70" className='img-banner' src={Guests}/>
      </div>
        <h1 className='banner-card-h1'>+330.910</h1>
        <p className='banner-card-p'>N° de huéspedes en los Cruceros/Hoteles</p>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="110" className='img-banner-2' src={Clia}/>
      </div>
    </div>
    <div className='banner-card'>
      <div className='card-img'>      
          <img width="110" className='img-banner-2'src={Trust}/>
      </div>
    </div>
  </div>
);

export default Banner;

