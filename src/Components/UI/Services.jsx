import React from 'react';
import './Services.css';


const serviceData=[
    {

    icon:'ri-apps-line',
    title:'App Development',
    desc:'we create for your best application',
},
{

    icon:'ri-code-s-slash-line',
    title:'Web Development',
    desc:'we create for your best Web application',
},
{

    icon:'ri-survey-line',
    title:'Start Up research',
    desc:'Our Team reaserch your idea',
},



]

const Services = () => {
    return (
        <div>
            <section id="service">

                <div className="container">

                      <div className="services__up-contain">
                        <h6 className="subtitle">
                              Our Services
                        </h6>
                        <h2>Save time managing your business with </h2>
                        <h2 className="highlight">Our best services</h2>


                      </div>

                       <div className="service__item-wrapper">


                               {
                                    serviceData.map((item,index)=>(

                                        <div className="service__item" key={index}>
                                        <span className="service_icon"><i class={item.icon}></i></span>
                                        <h2 className="service__title">{item.title}</h2>
                                        <p className="description" >{item.desc}</p>
            
            
            
            
                                    </div>    

                                    ))




                               }


                        
                      
                        
                        </div>  
                </div>

            </section>





        </div>
    );
};

export default Services;