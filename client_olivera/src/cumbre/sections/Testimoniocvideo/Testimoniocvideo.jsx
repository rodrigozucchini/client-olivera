import React from 'react';
import ReactPlayer from 'react-player';
import './Testimoniocvideo.css';
import ButtoncAction from '../buttonc/Buttonc';
import { Textfinal } from '../TextFinal/Textfinal';
import { Logo } from '../Logo/Logo';

const Testimoniocvideo = () => {
    const videocUrl1 = "https://youtu.be/xlje95GuAY4";
    const videocUrl2 = "https://youtu.be/phS0NgaB588";
    const videocUrl3 = "https://youtube.com/shorts/8bXsAHMO6z8?feature=share";

    return (
        <div className='backc-testimonio-video'>
            <div className='videoc-container-back'>
                <div className='videoc-container'>
                    <ReactPlayer
                        url={videocUrl1}
                        controls={true}
                        width="100%"
                        height="100%"
                        className="imagec-testimonio-video"
                    />
                </div>
                <div className='videoc-container'>
                    <ReactPlayer
                        url={videocUrl2}
                        controls={true}
                        width="100%"
                        height="100%"
                        className="imagec-testimonio-video"
                    />
                </div>
                <div className='videoc-container'>
                    <ReactPlayer
                        url={videocUrl3}
                        controls={true}
                        width="100%"
                        height="100%"
                        className="imagec-testimonio-video"
                    />
                </div>
                </div>
                <ButtoncAction />
            <div>
            <div className='button-logo-back'>
                </div>
            <Logo />
            </div>
            <Textfinal />
        </div>
    );
}

export default Testimoniocvideo;