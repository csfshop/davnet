import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Company_name } from '../../Assets/Js/Contants'
import { web_images } from '../../Assets/Images/Web_images/Web_images'
import '../../Assets/Css/Initial_pages/Desktop_nav.css'
import { products_data } from './Products_data'



function Desktop_nav() {

   const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }

    useEffect(() => {
       const Desktop_SCRIPT_ID = 'dektop-script';
   
       // Guard: don’t inject twice
       if (document.getElementById(Desktop_SCRIPT_ID)) return;
   
       // Function that creates & appends the script tag
       const loadScript = () => {
         const script = document.createElement('script');
         script.id = Desktop_SCRIPT_ID;
         script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Desktop_nav.js`;
         script.async = true;
         script.onload  = () => console.log('Script desktop loaded successfully');
         script.onerror = () => console.error('Error loading about script:', script.src);
         document.body.appendChild(script);
       };
   
       // If DOM is already parsed, run immediately…
       if (document.readyState === 'interactive' || document.readyState === 'complete') {
         loadScript();
   
       // …otherwise wait for the browser’s “DOMContentLoaded” event  
       } else {
         window.addEventListener('DOMContentLoaded', loadScript, false);
       }
   
       // Cleanup: remove listener & script on unmount
       return () => {
         window.removeEventListener('DOMContentLoaded', loadScript, false);
         const desktop_existing = document.getElementById(Desktop_SCRIPT_ID);
         if (desktop_existing) desktop_existing.remove();
       };
     }, []);
   


  return (
    <div>
     {/* <div className="top_sub_nav">
      <div className="top_nav_left">
        hi my name
      </div>

      <div className="top_nav_right">
        hello
      </div>
     </div> */}
      <nav className="desktop_nav scrolled" id="desktop_nav">
        <Link to='/' className='link'>
          <div className="logo">
              {/* <img src={web_images.logo} alt="" /> */}
              <h3><span>DAV-NET</span> ENT.</h3>
          </div>
        </Link>
       
        
        <ul className='menulist' id="menuList">
            <li><NavLink to="/">Home</NavLink></li>
           
            <li><NavLink to="/products">Products</NavLink>
              <div className="nav_sublink_1">
                <div className='nav_sublink_ul'>
                  {
                    products_data.map(item=>(
                      <li  onClick = {()=> navigate_path_btn(`/products/${item.name}`)}>{item.name}</li>
                    ))
                  }
                
                </div>
              </div>
            </li>

             <li><NavLink to="/services">Laser Designs</NavLink>
             
            </li>
             <li><NavLink to="/about/">About</NavLink></li>
            
            <li><NavLink to="/contact-us/">Contact Us</NavLink></li>
        </ul>
        
        <div className="button_div">
          
            <Link to=''><button className='button_trial' >Get In Touch</button></Link>
        </div>
         
      </nav>

    </div>
  )
}

export default Desktop_nav