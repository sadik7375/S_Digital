import React from 'react';
import heroDarkImg from '../../images/intro2.png'
import './Introduction.css'


const Intoduction = () => {
    return (
       <section className='introduction_section'>

        <div className="container">
            <div className="intro-wrapper">
                <div className="intro-content">
                    <div><h2>We're Creating Perfect commercial product to </h2>
                      <h2 className="hightlight">Promote Your Brand</h2>



                    </div>
                    <p className="description">hello this is our website</p>
                   <div className="intro__btns">
                    <button className="primary__btn">Get Started</button>
                    <button  className="secondary__btn">Learn more</button>
                   </div>

                </div>
                <div className="intro-img">
                    <img src={heroDarkImg} alt="hand"/>

                </div>
            </div>
        </div>

       </section>
    );
};

export default Intoduction;