import React from 'react'
import HangImg from '../images/hangingimg.svg';
import {motion as m} from 'framer-motion';
const Hanging = () => {
  return (
    <div className='hanging'>
        <div className='bridge'>
            <m.div className='hanging__grid' 
            initial={{scale:0.5, opacity:0, rotate:-90,}}
            whileInView={{scale:1, opacity:1, rotate:0,}}
            transition={{duration:1}}
            viewport={{once:true}}>
                
                <div className='hanging__txt'><br/>
                    <h2 className=''>
                    Where hanging out is easy
                    </h2>
                    <p>
                    Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                    </p>
                   </div>
                   <div className='hanging__img'>
                    <img src={HangImg} />
                </div>
            </m.div>
        </div>
    </div>
  )
}

export default Hanging
