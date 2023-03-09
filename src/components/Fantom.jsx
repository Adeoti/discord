import React from 'react'
import FandomImg from '../images/fantomimg.svg';
import {motion as m} from 'framer-motion';
const Fandom = () => {
  return (
    <div className='fandom'>
        <div className='bridge'>
            <m.div className='fandom__grid'
            initial={{x:500, scale:0.4, opacity:0.5}}
            whileInView={{x:0, scale:1, opacity:1}}
            transition={{duration:1.4}}
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
