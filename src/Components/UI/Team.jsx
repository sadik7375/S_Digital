import React from 'react';
import './Team.css';
import team1 from '../../images/team-01.png'
import team2 from '../../images/team-02.png'
import team3 from '../../images/team-03.png'
const teamMember=[

    {
        imgUrl:team1,
        name:'wahid sadik',
        position:'Developer'
    },
    {
        imgUrl:team1,
        name:'wahid sadik',
        position:'Developer'
    },
    {
        imgUrl:team1,
        name:'wahid sadik',
        position:'Developer'
    }






]

const Team = () => {
    return (
       
    <section>
        <div className="contain  team-contain" >
           <div className="team__content">

            <h6 className="subtitle">
                Our Team
            </h6>
            <h2>Meet with <span className='highlight' >Our Team</span></h2>


            
           </div>


          <div className="team__wrapper">

            {
           teamMember.map((item,index)=>(
            <div className="team__item"  key={index}>


            <div className="team__img">


                <img src={item.imgUrl} alt="man/woman"/>
            </div>
            <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                    
                    <span><i class="ri-linkedin-box-fill"></i></span>
                </div>
            </div>
        </div>
              

           ))

}


          </div>
            
            
        
        </div>
          



    </section>

    );
};

export default Team;