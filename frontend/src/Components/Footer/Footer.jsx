import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import footer_logo from '../Assets/logo_big.png'
const Footer = () => {
  return (
    <div className= 'footer'>
        <img src={footer_logo} alt='' />
        <p>SassyCart</p>
        <div>
            <ul className= 'footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt=''/>
                    <img src={whatsapp_icon} alt=''/>
                    <img src={pinterest_icon} alt=''/>

                </div>
            </div>
        </div>
      <div className= 'footer-copyright'>
        <hr/>
        <p>Copyright @ 2024- All right reserved </p>
      </div>
    </div>
  )
}

export default Footer
