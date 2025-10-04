import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'

import {web_images} from '../../../Assets/Images/Web_images/Web_images'
import {FaFacebookF,FaYoutube,FaInstagram,FaTiktok,} from "react-icons/fa";

import '../../../Assets/Css/Initial_pages/Footer.css'

function Footer() {
  return (
   <div className="footer_div">
 
     <footer>
      <div class="content">
        <div class="link-boxes">
        
          <ul class="box">
            <li>
              <Link to='/' className='link'>
                <div className="logo">
                    {/* <img src={web_images.logo} alt="" /> */}
                    <h3><span>DAV-NET</span> ENT</h3>
                </div>
              </Link>
            </li>
            <li className="sub_li">
             <p className='summ'>
              Dav-Net Ent is your single, reliable source for premium metal 
              and fabrication materials. We specialize in providing the essential 
              products you need to build with confidence, durability, and style.
             </p>
            </li>
            <li>
              <h1>FOLLOW US ON:</h1>
              <div className="sm">
                <Link to='/'  class="link fb"><span className='menu_icon'><FaFacebookF /></span></Link>
                <Link to='/' class="link yt"><span className='menu_icon'><FaYoutube /></span></Link>
                <Link to='/' class="link ig"><span className='menu_icon'><FaInstagram /></span></Link>
                <Link to='/' class="link git"><span className='menu_icon'><FaTiktok /></span></Link>
              </div>
            </li>
         
          </ul>

          <ul class="box">
            <li class="link_name">Quick Links</li>
            <Link to='/'><li className="links">Products</li></Link>
             <Link to='/about/'><li className="links">Services</li></Link>
              <Link ><li className="links">About</li></Link>
               <Link to='/contact-us/'><li className="links">Contact Us</li></Link>
          </ul>
        
         
          <ul class="box">
            <li class="link_name">Core Products</li>
            <Link><li className="links">Square Pipes</li></Link>
           <Link><li className="links">Galvanized Pipes</li></Link>
           <Link><li className="links">Angle Bars</li></Link>
           <Link><li className="links">Ballustrade Designs</li></Link>
           <Link><li className="links">Steel Plate</li></Link>
           <Link><li className="links">Welded Mesh</li></Link>
           <Link><li className="links">Flat Bars</li></Link>
          </ul>  

          <ul className="box">
             <li className="sub_contact">
              <h3>Email:</h3>
              <p>davnet1563@gmail.com</p>
            </li>
            <li className="sub_contact">
              <h3>Call directly:</h3>
              <p> +233 0244-697-799 </p>
            </li>
            <li className="sub_contact">
              <h3>Address:</h3>
              <p>Fawode-Kumasi Ghana</p>
            </li>
          </ul>
           
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">Copyright © 2025 Dav Net Ent All rights reserved</span>
          
        </div>
      </div>
  </footer>
  </div>
 
  )
}

export default Footer