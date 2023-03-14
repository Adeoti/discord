import React from 'react'
import FandomImg from '../images/fantomimg.svg';
import {motion as m} from 'framer-motion';
const Fandom = () => {
  return (
    <div className='fandom'>
        <div className='bridge'>
            <m.div className='belong__grid'
            initial={{scale:0.5, opacity:0, rotate:-90,}}
            whileInView={{scale:1, opacity:1, rotate:0,}}
            transition={{duration:1}}
            viewport={{once:true}}>
                <div className='fandom__img'>
                    <img src={FandomImg} />
                </div>
                <div className='fandom__txt'><br/>
                    <h2 className=''>
                    From few to a fandom
                    </h2>
                    <p>
                    Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                    </p>
                   </div>
                   
            </m.div>
        </div>
    </div>
  )
}

export default Fandom
