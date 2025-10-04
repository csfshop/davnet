import React from 'react'
import '../../Assets/Css/Initial_pages/Contact.css'

import {faLocationDot,faPhoneVolume,faEnvelope,faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact_page() {
  return (
    <div className="contact_page_div">


        {/* contact page banner */}
          <div className="contact_banner">
            <div class="image-box" ></div>
            <div className="banner_content">
                <h1>Contact <span>DAV-NET ENT.</span>  </h1>
                <p>
                    Contact or visit us to access our full inventory of steel plate, 
                    pipes, and bars, and consult with our experts on your custom laser cutting and design needs. 
                  </p>
                  <button class="btn1">Core Products</button>
                  
  
            </div>
          </div>

        {/* end contact page banner */}




        <div className="contact_content">
            {/* map */}
                <div className="contact_map slide_bottom_hidden">
                    <div className="contact_map_div">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.930392829774!2d-1.5866222898148286!3d6.778326493190335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbbe6f525d0d6b%3A0x90b0372af2c72755!2sDav-Net%20Ent.!5e0!3m2!1sen!2sgh!4v1759315227315!5m2!1sen!2sgh"   allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            {/* endmap */}



            {/* info */}

                <div className="contact_info">
                    <div className="contact_info_div">
                        <div className="contact_title zoom_hidden">
                            <h4>CONTACT INFO. :</h4>
                            <h1>Get In Touch</h1>
                            <hr />
                            <p>Let us forge your next design into reality.</p>
                        </div>


                        <div className="contact_item bounce_hidden">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faLocationDot}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Our Address
                                </h2>
                                <p>
                                    Fawode-Kumasi Ghana
                                </p>
                            </div>
                        </div>

                        
                        <div className="contact_item bounce_hidden">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faPhoneVolume}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Phone Number
                                </h2>
                                <p>
                                  Phone:  +233 244-697-799
                                </p>
                                <p>
                                  Phone:  +233 245-677-917
                                </p>
                               
                            </div>
                        </div>



                        
                        <div className="contact_item bounce_hidden">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Email Address
                                </h2>
                                <p>
                                    davnet1563@gmail.com
                                </p>
                            </div>
                        </div>



                        
                        <div className="contact_item bounce_hidden">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faBusinessTime}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Hours of Operation
                                </h2>
                                <p>
                                    Monday - Friday: 08:00am - 6:00pm
                                </p>
                                 <p>
                                    Saturday: 12:00pm - 6:00pm
                                </p>
                            </div>
                        </div>



                        
                       
                    </div>
                </div>

            {/* info */}
                </div>
    </div>
  )
}

export default Contact_page