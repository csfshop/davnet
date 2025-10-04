import React from 'react'
import '../../Assets/Css/Initial_pages/Services.css'
import { web_images } from '../../Assets/Images/Web_images/Web_images'

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {faCaretRight,faCaretLeft,faAddressCard,faSquareCheck,faPhoneVolume,faLocationDot,faEyeSlash,faEye,faCircleDot,faArrowAltCircleRight,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from 'react-router-dom';


function Services() {


    const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }
  return (




    <div>


        {/* services banner  */}

          <div className="services_banner">
            <div class="image-box" ></div>
            <div className="banner_content ">
                <h1>Steel Laser  <span> Design</span> </h1>
                <p>
                   Advanced Laser Cutting & Design Services
                  </p>
                  <button class="btn1">Get in Touch</button>
  
              </div>
          </div>

        {/* end services banner */}





        {/* why choose us */}
        
            <div className="services_why">
        
                <div className="services_who_container">



                     <div className="who_content_div">
                            <div className='head'>
                                <h2>Precision Laser Services</h2>
                                <hr />
                            </div>
                            <p>
                               DAV NET ENT utilizes 
                               advanced laser machine technology to provide 
                               high-precision metal fabrication and custom design. Our laser services allow for
                                accurate cutting and design of steel plates to meet any required specification. This capability is 
                                integrated into our specialized work, such as creating bespoke ballustrade 
                                designs, ensuring detailed, clean finishes and complex geometries for both 
                                aesthetic and structural components.
                            </p>
        
                            <div className="why_list">
        
                               <ul className="why_list_ul">
        
                                    <li className="why_list_li">
        
                                           <span className="why_list_icon">
                                            <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                           </span>
                                            <p>
                                                <span className='why_list_inner'>Design Specialization:</span> 
                                                 We can create custom, complex shapes and patterns on steel plates with exceptional accuracy.
                                            </p>
                                          
                                    </li>
        
                                    <li className="why_list_li">
        
                                           <span className="why_list_icon">
                                            <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                           </span>
                                            <p>
                                                <span className='why_list_inner'>Custom Plate Cutting:</span> 
                                               We provide highly accurate, high-speed cutting for steel plates, 
                                               capable of handling complex geometries and intricate designs that 
                                               conventional methods cannot match.
                                            </p>
                                          
                                    </li>
        
        
                                    <li className="why_list_li">
        
                                           <span className="why_list_icon">
                                            <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                           </span>
                                            <p>
                                                <span className='why_list_inner'>Versatile Applications:</span> 
                                               Whether you require components for engineering, construction, or architectural aesthetics, our laser services ensure your steel 
                                               is fabricated precisely to your unique specifications.
        
        
                                            </p>
                                          
                                    </li>
                               </ul>
        
                             
                            </div>
        
        
                            <div  className="content_btn">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Get in touch <span><FontAwesomeIcon className='icon' icon = {faAddressCard}/></span></button>
                            </div>
        
        
        
        
                    </div>
        
                    <div className="who_image_div">
        
                       <main className='cusimg'>
                            <h2>Plate Design</h2>
                            <h2>High-Quality Finish</h2>
                            <img src={web_images.laser1} alt="Remains of burnt and felled trees in a rainforest" />
                        </main>
        
                    </div>
        
        
                    
        
                </div>
            </div>
        
            {/* why choose us */}






            {/* vid  */}

            <div className="service_vid">

                <div className="service_vid_container">

                     <div className='laser_vid_div'>
                                        
                                        <video
                                            src={web_images.home_vid}
                                            autoPlay
                                            muted
                                            loop
                                            controls
                                            
                                        />
                        </div>

                </div>

            </div>


            {/* vid */}

    </div>
  )
}

export default Services