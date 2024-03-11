import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {useTypewriter, Cursor} from "react-simple-typewriter"
const Intro = () =>{
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white':'' }}>Hi! I Am</span>
                    <span>Covenant Ituen</span>
                    <h2>a  <span className="text">{text}</span>
                    <Cursor cursorStyle="|" cursorColor="var(--orange)" />
                    </h2>
                    <span>Frontend Developer with high level of experience in web designing and development, producing the Quality work</span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    

                    <img src={Github} alt="" />

                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* animation */}   
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                duration={300}
                src={glassesimoji}
                />
                <motion.div
                initial={{top: '-4%', left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:"-4%", left:"68%"}}
                className="floating-div"
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                    </motion.div>
                    {/* animation */}
                <motion.div
                initial={{left:'9rem', top:'18rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                className="floating-div"

                style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background: 'rgb(238 210 255)' }}></div>
                <div className="blur"
                 style={{
                    background:'#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                 }}
                 ></div>
            </div>
            </div>
    );
};

export default Intro