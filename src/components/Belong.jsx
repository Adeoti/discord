import React from 'react'
import BelongImg from '../images/belongimg.svg';
import {motion} from 'framer-motion';
const Belong = () => {
  return (
    <div className='belong'>
        <div className='bridge'>
            <motion.div className='belong__grid'
            initial={{scale:0.5, opacity:0, rotate:-90,}}
            whileInView={{scale:1, opacity:1, rotate:0,}}
            transition={{duration:1}}
            viewport={{once:true}}>
                <div className='belong__img'>
                    <img src={BelongImg} />
                </div>
                <div className='belong__txt'><br/>
                    <h2 className=''>
                    Create an invite-only place where you belong
                    </h2>
                    <p>
                    Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </p>
                   </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Belong
