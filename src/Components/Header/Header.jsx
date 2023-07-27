import React from 'react';
import './Header.css';

const nav__links=[
{
path:'#home',
display:'Home',

},
{
    path:'#about',
    display:'About',
    
    },
    {
        path:'#service',
        display:'Service',
        
        },
        {
            path:'#project',
            display:'Project',
            
            },
            {
                path:'#Footer',
                display:'Contact us',
                
                },






]





const Header = () => {
    return (
        <div>
            
         <header className=".header__shrink ">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <h2>S Agency</h2>
                    </div>

                    {/* navigation   */}
                    <div className="navigation">
                        <ul className="menu">
                            {

                                nav__links.map((item,index)=>(
                                  <li className="menu__item">
                                    <a href={item.path} className="menu__link">
                                        {item.display}

                                    </a>
                                  </li>





                                ))
                            }

                        </ul>
                    </div>

                       {/* theme mode   */}

                       <div className="light__mode">
                        <span><i class="ri-sun-line">Light Mode</i></span>
                       </div>



                </div>
            </div>

         </header>






        </div>
    );
};

export default Header;