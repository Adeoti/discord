import Ctacardimg from '../images/ctacardimg.svg';
import starimg  from '../images/starspark.svg';
const Ctacard = () => {
  return (
    <div className="ctacard">
        <div className="bridge">
            <h2>
            Reliable tech for staying close
            </h2>
            <p>
            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
            </p>
        <img src={Ctacardimg} />
            <div className='ctacard__bottom'>
                <h4 style={{backgroundImage:'url('+starimg+')', backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'top center'}}>Ready to start your journey?</h4>
                <br/><a href='#' className='la_btn blue lg shd'>Download for Windows</a>
            </div>
        </div>
    </div>
  )
}

export default Ctacard
