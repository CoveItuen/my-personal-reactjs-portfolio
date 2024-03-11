import React from "react";
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import  Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {

    const transition = {duration: 0.9, type: 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id='Services'>

            {/* left side */}
            <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <spane>
                The following are some of my areas
                <br/>
                of expertise.
            </spane>
            <a href={Resume} download>

            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/* right side */}
            <div className="cards">

                {/* first card*/}
            <motion.div
            initial={{left:'25rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            style={{left:'14rem'}}
            >
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>
                {/* second card */}
                <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                >
                    <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'HTML, CSS, Javascript, React, Python, SQL, PHP, Kotlin'}
                    />
                    </motion.div>
                {/* 3rd */}
                <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services