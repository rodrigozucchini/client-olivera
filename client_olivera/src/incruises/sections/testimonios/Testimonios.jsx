import React from 'react';
import './Testimonio.css';
import Testimonio1 from './../../../assets/1.png';
import Testimonio2 from './../../../assets/2.png';
import Testimonio3 from './../../../assets/3.png';

const Testimonios = () => {

  return (
    <>
     <h1 className='title-testimonios'>Lo que dicen Nuestros clientes y socios</h1>
    <div className='back-testimonio'>
       <div className='card-testimonio'>
            <img className="image-testimonio" src={Testimonio1}/>
       </div>
       <div className='card-testimonio'>
            <img className="image-testimonio" src={Testimonio2}/>
       </div>
       <div className='card-testimonio'>
            <img className="image-testimonio" src={Testimonio3}/>
       </div>
    </div>
    </>
  )
}

export default Testimonios
