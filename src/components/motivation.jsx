import React from "react";
import './motivation.css'
import { motion } from 'framer-motion';
import song1 from "../assets/audio/song1.mp3";
import song2 from "../assets/audio/song2.mp3";
import song3 from "../assets/audio/song3.mp3";
// import song4 from "../assets/audio/song4.mp3"; controls

const Motivation = ()=>{
    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
    return(
        <>
            <motion.div className="motivation" variants={itemVariants}>

            
            <div className="motivational" id="Motivation">
            <h2>Motivation Regards Fitness</h2>
            <hr/>
            <div className="motivate" >
                <div className="mcard">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/213/462/desktop-wallpaper-gym-boy-fitness-boy.jpg" alt="Motivation" />
                    <p>"A little progress each day adds up to big results."</p>
                     <audio controls src={song1}><h1>audio</h1></audio>
                </div>
                <div className="mcard">
                    <img src="https://www.shutterstock.com/image-photo/beautiful-young-sporty-sexy-couple-260nw-330437213.jpg" alt="Motivation" />
                    <p>"Flex your potential, not your excuses."</p>
                     <audio controls src={song2}>audio</audio>
                </div>
                <div className="mcard">
                    <img src="https://www.shutterstock.com/shutterstock/videos/1097712625/thumb/7.jpg?ip=x480" alt="Motivation" />
                    <p>“The real workout starts when you want to stop.” </p>
                     <audio controls src={song3}>audio</audio>
                </div>
            </div>
            </div>
            </motion.div>
        </>
    )
}

export default Motivation;