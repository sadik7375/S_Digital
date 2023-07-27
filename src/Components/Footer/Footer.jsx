import React from 'react';
import './Footer.css';

const quickLinks01=[
    {
        path:'#',
        display:'marketing'
    },
    {
        path:'#',
        display:'analytics'

    },
    {
        path:'#',
        display:'commerce'
    },
]




const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    
                 <div className="footer__logo">
                   <h2>S Agancy</h2>
                   <p className="description">

                            let's go with us
                   </p>
                   <p className='small__text description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum officiis, enim reiciendis ducimus esse repellendus quos cum harum laboriosam debitis suscipit ad mollitia ipsum corporis repellat. Soluta, debitis atque!</p>
                   </div>
                         <div className="footer__quick-links">
                            <div className="quick__links-title"><h4>Contact us</h4>
                            
                         
                            </div>
                            {/* <ul className="quick__links">
                                {
                                    quickLinks01.map((item,index)=>(
                                        <li className="quick__link-item" key={index}><a href={item.path}></a>{item.display}</li>


                                    ))
                                }

                                 
                            </ul> */}
                            <div className="quick__links">
                                <p>phone </p>
                               <p>01701737576</p>
                               <p>Email </p>
                            <p>Email sdigital@gmail.com</p>
                            </div>
                         </div>



                

                </div>

            </div>
        </footer>
    );
};

export default Footer;