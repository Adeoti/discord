import {motion} from 'framer-motion';
import heroleftimg from '../images/heroleft.svg';
import herorightimg from '../images/herorightimg.svg';

const Hero = () => {
  return (
    <div className='hero'>

        <div className='hero__leftImage'>
          <img src={heroleftimg}/>
        </div>
    
        <div className='hero__rightImage'>
          <img src={herorightimg}/>
        </div>
      <div className='bridge'>
        <div>
            <h2 className="hero__title">Imagine a place...</h2>
            <div className="hero__intro">
            <motion.p
            initial={{scale:0.5, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{duration:0.5}}>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
            </motion.p>
            <motion.a href="#" className="shd"
            initial={{x:-100, scale:0.7, opacity:0.8}}
            animate={{x:0, scale:1, opacity:1}}
            transition={{duration:1}}>&hearts; Download for Windows</motion.a>
            <motion.a href="#" className="shd"
            initial={{y:100, scale:0.7, opacity:0.5}}
            animate={{y:0, scale:1, opacity:1}}
            transition={{duration:1}}>Open Discord in your browser</motion.a>
            
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
