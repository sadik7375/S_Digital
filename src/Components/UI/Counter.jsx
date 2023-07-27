import React from 'react';
import './Counter.css';


const counterData=[


    {
        number:'3k',
        title:'Clients'
    }
    ,
    {
        number:'150',
        title:'Running Projects'
    },
    {
        number:'500',
        title:'Completed Projects'
    },
]

const Counter = () => {
    return (
      <section className="counter"   id="projects">
        <div className="container">
            <div className="counter__wrapper">
                {
                    counterData.map((item,index)=>(
                        <div className="counter__item" key={index}>
                        <h3 className="counter__number">
                            {item.number}+
                        </h3>
                        <h4 className="counter__title">{item.title} </h4>
                     </div>


                    ))
                }

                  
               
            </div>

        </div>

      </section>
    );
};

export default Counter;