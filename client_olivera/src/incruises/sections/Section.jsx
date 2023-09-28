import React from 'react';
import HeaderIncruises from './header/Header';
import Banner from './banner/Banner';
import Wave from './wave/Wave';
import Testimonios from './testimonios/Testimonios';
import TestimoniosVideo from './testimonios/TestimonioVideo';
import ButtonAction from './button/ButtonAction';
import MessageFinal from './messagefinal/MessageFinal';

const SectionIncruises = () => {

  return (
    <>
       <HeaderIncruises /> 
       <ButtonAction />
       <Banner />
       <Wave />
       <Testimonios />
       <TestimoniosVideo />
       <ButtonAction />
       <MessageFinal />
    </>
  )
}

export default SectionIncruises
