import React from 'react';
import './Hero.css'
import Header from '../Header/Header';
import Heart from '../../assets/heart.png'
import hero_img from '../../assets/hero_image.png' 
import hero_img_back from '../../assets/hero_image_back.png' 
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'


const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
<div className='left-h'>
    <Header></Header>
    {/* the-best-ad */}
    <div className="the-best-ad">
    <motion.div
        initial = {{left: '238px'}}
        whileInView = {{left: '8px'}}
        transition = {{...transition, type: 'tween'}}
        ></motion.div>
       <span> The Best fitness club in the town</span>
    </div>
    {/* hero-heading */}
    <div className="hero-text">
        <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
            </div>
        <div>
            <span>
            Ideal Body</span>
            </div>
            <div>
               <span > In here we will help you to build your desired shape of body and provide all the necessary things you need..</span>
           
        </div>
    </div>

    {/* figures */}
    <div className="figures">
        <div>
            <span>
                +140 
                </span><span>Expert Coaches</span>
        </div>
        <div>
        <span>
            +978 </span><span>Members Join</span>
        </div>
        <div>
        <span>+50 </span><span>Fitness Programs</span>
        </div>
    </div>
    {/* hero buttons */}
    <div className="hero-buttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
    </div>
</div>
<div className='right-h'>
    <button className='btn'>Join Now</button>
  <motion.div initial={{right: '-1rem'}} whileInView={{right: '4rem'}} transition={transition} className="heart-rate">
  <img src={Heart} alt=""></img>
    <span>Heart Rate</span>
    <span>116 Bpm</span>
  </motion.div>

  {/* hero images */}
<img src={hero_img} alt='' className='hero-img'></img>
<motion.img initial={{right: '11rem'}} whileInView={{right: '20rem'}} transition={transition} src={hero_img_back} alt='' className='hero-img-back'></motion.img>

{/* calories */}
<motion.div initial={{right: '-1rem'}} whileInView={{right: '4rem'}} transition={transition} className="calories">
    <img src={calories} alt="" />
   <div>
   <span>
        Calories Burn
        </span>
        <span>
220 kcal
        </span>
   </div>
      
</motion.div>
</div>

        </div>
    );
};

export default Hero;