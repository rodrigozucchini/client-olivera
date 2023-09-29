import React from 'react'
import Testimonio1 from './../../../assets/test1.jpg'
import Testimonio2 from './../../../assets/test2.jpg'
import Testimonio3 from './../../../assets/test3.jpg'
import './Testimonioc.css'

const TestimonioC = () => {
  return (
    <>
    <div className="backgroundc-testimonio">
        <div className='backc-testimonio'>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio1} />
                <p className='pc-testimonio'>“He podido pasar de 1 <br/>cliente al mes, a cerrar 3 en 48 hs”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio2} />
                <p className='pc-testimonio'>“Mi primera venta <br/>luego de 2 meses sin recalificar”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio3} />
                <p className='pc-testimonio'>“Con Flor logramos <br/>sacar nuestro rango consultor”</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestimonioC