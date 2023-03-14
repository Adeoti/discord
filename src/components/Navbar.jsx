import React, {useState} from 'react';
import discordlogo from '../images/discordlogo.png'; 

const Navbar = () => {

  const [navtoggle, setNavtoggle] = useState(false);
  const navToggler =() => {
    setNavtoggle(!navtoggle);
  }

  return (
    <nav className='navbar'>
      <div className='bridge'>
        <div className='navbar_wrapper'>
            <div><img src={discordlogo} className="discordlogo"/></div>
           
            <div className="menu_handger">
              <button onClick={navToggler}>menu</button>
            </div>
            <ul className='navdesktop'>
                    <li><a href='#'>Download</a></li>
                    <li><a href='#'>Nitro</a></li>
                    <li><a href='#'>Discover</a></li>
                    <li><a href='#'>Safety</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Careers</a></li>
                </ul>
                {navtoggle && <ul className='navmobile'>
                    <li><a href='#'>Download</a></li>
                    <li><a href='#'>Nitro</a></li>
                    <li><a href='#'>Discover</a></li>
                    <li><a href='#'>Safety</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Careers</a></li>
                </ul> }
            <a href='#' className='la_btn sm white'>Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
