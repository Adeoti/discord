import React from 'react';
import UsaLang from '../images/usalang.png';
import discordlogo from '../images/discordlogo.png'; 
const Footer = () => {
  
    return (
    <div className='footer'>
     <div className='bridge'>
        <div className='footer__pane'>
            <div className=''>
                <h2 className='aplace'>Imagine a place</h2>
                    
            
                <div style={{display:'flex',  gap:'17px', marginTop:'20px'}}>
                    <img src={UsaLang} style={{height:'20px'}}/>
                <span style={{fontSize:'13px'}}>English, USA</span>
                </div>
            
            </div>
            <div className=''>
                <span className='footer__pane--hd'>Product</span>
                    <ul>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Nitro</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
            </div>
            <div className=''>
                <span className='footer__pane--hd'>Company</span>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Newsroom</a></li>
                    </ul>
            </div>
            <div className=''>
                <span className='footer__pane--hd'>Resources</span>
                    <ul>
                        <li><a href="#">College</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Safety</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Build</a></li>
                        <li><a href="#">StreamKit</a></li>
                        <li><a href="#">Creators</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
            </div>
            <div className=''>
                <span className='footer__pane--hd'>Policies</span>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies Settings</a></li>
                        <li><a href="#">Guidelines</a></li>
                        <li><a href="#">Acknowledgement</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Moderation</a></li>
                    </ul>
            </div>
        </div>
        <div className='footer__divider'></div>
        <div className='footer__bottombar'>

            <div className='logo'>
            <img src={discordlogo} className="discordlogo"/>
            </div>
            <a href='' className='la_btn blue ssm'>Sign up</a>

        </div>
     </div>
    </div>
  )
}

export default Footer
Footer