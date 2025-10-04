import React, { useEffect, useState } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Company_name } from '../../Assets/Js/Contants' 
import { web_images } from '../../Assets/Images/Web_images/Web_images'
import '../../Assets/Css/Initial_pages/Mobile_nav.css'
import {faBars,faHome,faCircleXmark,faCircleInfo,faList,faBuilding,faAddressCard,faCaretRight,faPlus,faSubtract} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products_data } from './Products_data'

function Mobile_nav() {

    const[subnav_1,setSubnav_1] = useState(false)
    const[subnav_2,setSubnav_2] = useState(false)



   

       useEffect(() => {
             const Mobile_SCRIPT_ID = 'mobile-script';
         
             // Guard: don’t inject twice
             if (document.getElementById(Mobile_SCRIPT_ID)) return;
         
             // Function that creates & appends the script tag
             const loadScript = () => {
               const script = document.createElement('script');
               script.id = Mobile_SCRIPT_ID;
               script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Mobile_nav.js`;
               script.async = true;
               script.onload  = () => console.log('Script mobile loaded successfully');
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
               const mobile_existing = document.getElementById(Mobile_SCRIPT_ID);
               if (mobile_existing) mobile_existing.remove();
             };
           }, []);
   
    const navigate = useNavigate()

    const mobile_link_click = (path_way)=>(e)=>{
        e.preventDefault()
        const target_bar = document.getElementById("sidebar_div")
        const target_over = document.getElementById("sidebar_blur")

        target_bar.classList.remove('sidebar_active')
        target_over.style.display = 'none'

        navigate(path_way)
        
        
    }

  
    return (
  
    <div>
        <div className='sidebar_body' id='sidebar_blur'></div>
        <div>
            <nav className="mobile_nav" id="mobile_nav">
              <Link style={{ textDecoration: 'none' }}  to='/'>
                <div className="logo">
                 
                    {/* <img src={web_images.logo} alt="" /> */}
                    <h3><span>DAV-NET</span> ENT.</h3>
            
                </div>
              </Link>
                
            
                <div className="icon_div">
                    <FontAwesomeIcon className='menu_icon' id='sidebar_open' icon={faBars}/>
                </div>
                
            </nav>
        </div>


        <div className="sidebar_div" >
            <nav className="sidebar " id='sidebar_div'>
                <div className="logo_items flex">
                   <Link style={{ textDecoration: 'none' }} onClick={mobile_link_click('/')} >
                     <span className="nav_image mobile_nav_link">
                        {/* <img src={web_images.logo} alt="" /> */}
                        <h3><span>DAV-NET</span> ENT</h3>
                    </span>
                   </Link>
                    
                    <span>
                        <FontAwesomeIcon className='sidebar_cloes_icon' id='sidebar_close' icon={faCircleXmark}/>
                    </span>
                  
                </div>
                <div className="menu_container">
                    <div className="menu_items">
                        <div className="menu_item">
                           
                            <div className="item">
                                <NavLink onClick={mobile_link_click('/')}  className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faHome}/>
                                    <span className='text'>Home</span>
                                </NavLink>
                            </div>
                           
                            <div className="item list">
                                <div onClick={()=> setSubnav_1(!subnav_1)} to="#" id='sidebar_subnav_div' className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faList}/>
                                    <span className='text'>Products</span>
                                    <FontAwesomeIcon className='icon xtra right' icon = {subnav_1?faSubtract:faPlus}/>
                                </div>
                                <div className={subnav_1?"sidebar_subnav subnav_active":"sidebar_subnav" }>
                                   {
                                    products_data.map(item=>(
                                        <li onClick={mobile_link_click(`/products/${item.name}`)}>{item.name}</li>
                                    ))
                                   }
                                </div>
                            </div>
                           <div className="item">
                                <NavLink onClick={mobile_link_click('/services')}  className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faBuilding}/>
                                    <span className='text'>Laser Designs</span>
                                </NavLink>
                            </div>

                             <li className="item">
                                <NavLink onClick={mobile_link_click('/about/')}  className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faCircleInfo}/>
                                    <span className='text'>About</span>
                                </NavLink>
                            </li>

                            <li onClick={mobile_link_click('/contact-us/')} className="item">
                               
                                <div to="#" className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faAddressCard}/>
                                    <span className='text'>Contact Us</span>
                                </div>
                            </li>

                            <div className="button_div">
                                {/* <button className='button_login' >Login</button> */}
                                <button onClick={mobile_link_click('/contact-us/')} className='button_trial' >Get In Touch</button>
                            </div>
                          
                        </div>
                  
                    </div>
                   
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Mobile_nav