import React from 'react';
import  './About.css';
import aboutimg from '../../images/2.png'


const chooseData=[

{
     icon:'ri-focus-2-line',
     title:'Focus on our project',

},
{
    icon:'ri-team-line',
    title:'Didicated Team',

},
{
    icon:'ri-customer-service-2-line',
    title:'24/7 support service',

}

]



const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">

                    <h6 className="subtitle title">
                              Why choose us
                        </h6>
                        
                        <h3 className="highlight  aboutdes" >we help to gain your goal</h3>
                        {/* <p className="description  about__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a commodi ex aliquam adipisci placeat, laborum eligendi mollitia cupiditate sint at eius autem non velit vero error tempora ipsam. Optio.</p> */}
                          <div>

                                    {
                                        chooseData.map((item,index)=>(
                                            <div className="choose__us-item" key={index}>
                                            <span className='choose__us_icon'>
                                            <i class={item.icon}></i>
                                            </span>
                                            <h5 className="choose__us-title">{item.title}</h5>
                                               {/* <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero laborum, nam inventore ipsam tenetur quas optio aliquid modi saepe sit?</p> */}
                
                                           
                
                
                
                                        </div>

                                        ))
                                    }


                          </div>
                           
                    </div>

                    {/* <div className="about__img"><img src={aboutimg}/></div> */}


                </div>

            </div>
        </section>
    );
};

export default About;