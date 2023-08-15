import React from 'react'
import './Header.scss'
import { easeInOut, motion } from 'framer-motion';
import images from '../../constants/images';
import  AppWrapp  from '../../wrapper/AppWrapp';

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: easeInOut
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.5}}
      className="app__header-info"
      >
        <div className='app__header-badge'>
            <div className='badge-cmp app__flex' >
              <span>👋</span>
              <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p><br></br>
              <h1 className='head-text'>Eduardo</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack Developer</p><br></br>
            </div>
        </div>
      </motion.div >

      <motion.div 
      whileInView={{ opacity: [0, 1]}}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__header-img">
          <img className="profile-img"src={images.profile} alt="profile-bg"/>
        <motion.img 
          whileInView={{ scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
          />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles">
        {[images.mu5, images.react, images.node].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapp(Header, 'home')