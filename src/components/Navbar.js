import React from 'react';
import "./Navbar.css";
import{Link} from 'react-router-dom'

function Navbar() {
  return (
  <div className='nav'>
    <div className='nav-name'>
        <Link to='./profile' className='name'>KISHORE</Link>
    </div>
    <div>
        <ul>
          <Link to= "./" className='links'>PROFILE</Link>
            {/* <li>PROFILE</li> */}
            <Link to='./portfolio' className='links'>PORTFOLIO</Link>
            <Link to='./about' className='links'>CONTACT</Link>
            
        </ul>


    </div>

</div>
  )
}

export default Navbar;