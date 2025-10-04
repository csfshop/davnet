import React, { use, useReducer,useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {web_images} from '../../Assets/Images/Web_images/Web_images'
import {faCaretRight,faCaretLeft,faQuoteLeft,faMessage,faPhoneVolume,faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products_data } from './Products_data';
import '../../Assets/Css/Initial_pages/About.css'



function About_page() {


  const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }

  

 useEffect(() => {
    const About_SCRIPT_ID = 'about-script';

    // Guard: don’t inject twice
    if (document.getElementById(About_SCRIPT_ID)) return;

    // Function that creates & appends the script tag
    const loadScript = () => {
      const script = document.createElement('script');
      script.id = About_SCRIPT_ID;
      script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/About.js`;
      script.async = true;
      script.onload  = () => console.log('Script about loaded successfully');
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
      const about_existing = document.getElementById(About_SCRIPT_ID);
      if (about_existing) about_existing.remove();
    };
  }, []);


    return (
      <div className="about_page">

        {/* about banner  */}

          <div className="about_banner">
            <div class="image-box" ></div>
            <div className="banner_content ">
                <h1>About <span> DAV-NET ENT.</span> </h1>
                <p>
                   Your single source for high-quality metal materials and precision design.
                  </p>
                  <button class="btn1">Get in Touch</button>
  
              </div>
          </div>

        {/* end about banner */}


        {/* history */}
          <div className="history_box">
            <div className="history_div">


              <div className="history_content zoom_hidden">
                <div className="heading">
                  <h1>Who Are We</h1>
                  <hr />
                </div>

                <div className="easy">
                  <p>
                    Dav-Net Ent is a Ghanaian-owned supplier of high-quality metal products, serving builders, welders, and fabricators 
                    nationwide. We specialize in square pipes, angle bars, round pipes, and welding accessories—offering durable materials 
                    that meet real-world demands. With a focus on reliability, customer care, and 
                    local impact, we’re proud to support the backbone of Ghana’s construction and 
                    manufacturing industries.

                  </p>

                  <p>
                   Dav-Net Ent brings industrial-grade laser cutting to your 
                   steel plate projects—delivering smooth edges, tight tolerances, 
                   and consistent results across every sheet. Our high-powered laser machine is 
                   built for speed and accuracy, helping fabricators, manufacturers, and builders 
                    meet demanding specs with confidence.
                  </p>

                 
                 
                </div>

              </div>


             <div className="history_images">
              <div class="container bounce_hidden">
                 <img className='img2' src={web_images.count} alt="Изображение"/>
                  <img className='img1' src={web_images.home1} alt="Изображение"/>
              </div>

              </div> 
            </div>
          </div>
        {/* end history */}

        {/* mission and vision */}

          <div className="mvn_div">
            <div className="mvn_sub">
              
                <div className="container">
                    <div className="motto zoom_hidden">
                      <h1>Why Choose Us:</h1>
                      <div className="motto_qoute">
                        <FontAwesomeIcon className='icon' icon={faQuoteLeft}/>
                        <p>
                            The foundation of your project is in our inventory; the final detail is 
                            in our laser. DAV Net Ent is the single source for all your steel 
                            supply and precision fabrication design.
                        </p>
                      
                      </div>

                    </div>
                    <div className="row">
                      <div className="card slide_bottom_hidden">
                          <div className="info">
                          <div className="sub">Choose Us</div>
                          <div className="title">
                            Choose DAV Net Ent because we offer the ultimate single-source solution for all your metal project needs.
                            We are your comprehensive supplier for materials, stocking a vast 
                            inventory of steel plate, square and galvanised pipes, angle bars, 
                            and flat bars. More importantly, we are your in-house design partner. 
                            We add value by integrating expert design, including specialized 
                            balustrades, with high-precision laser cutting—guaranteeing every 
                            component is supplied with superior quality, flawless accuracy, 
                            and is immediately ready for fabrication.
                          </div>
                          <button className="btn">Reach Out</button>
                          </div>
                          
                      </div>
                     
                    </div>
                
                </div>
            </div>
          </div>
        {/* end mission and vision */}


        {/* about_summary */}

        <div className="about_summary">
          <div className="about_summary_div">

            <div className="about_summary_title zoom_hidden">
              <h1> Our Core <span>Values</span> </h1>
              <hr />
            </div>

           <div className="about_summary_item">
              <div className="title zoom_hidden">
                <h1>Execution</h1>
                <hr />
              </div>
             <div className="abt_summary_content bounce_hidden">
                <h2><span> Precision </span>in Execution</h2>
                <p>
                  We are committed to delivering flawless accuracy in every 
                  product and service, ensuring our work meets the highest 
                   of engineering.
                </p>
                <ul>
                    <li class="one">
                     <span> Dimensional Accuracy:</span> Maintaining ultra-tight tolerances 
                      in every laser-cut part and material length.
                      </li>

                      <li class="one">
                        <span>Design Integrity:</span> Translating client designs 
                         into metal with absolute fidelity.
                      </li>
                       <li class="one">
                       <span> Quality Assurance:</span> Ensuring all materials meet certified specifications and are fabrication-ready upon delivery.
                      </li>
                </ul>
            </div>

              <div className="abt_summary_image slide_bottom_hidden">
                   <img class="card-img" src={web_images.home2} alt="Team Member 1"/>
              </div>
           </div>

             <div className="about_summary_item">
              <div className="title zoom_hidden">
                <h1>Partnership</h1>
                <hr />
              </div>
             <div className="abt_summary_content bounce_hidden">
                <h2><span>Comprehensive</span> Partnership</h2>
                <p>
                 We serve as a single, reliable source for our clients, simplifying the process from material
                  acquisition to final fabrication.
                </p>
                <ul>
                    <li class="one">
                        <span>End-to-End Service: </span>
                        Providing seamless support from initial material supply (plate, pipe, bars) through to custom 
                        cutting and design.

                      </li>

                      
                       <li class="one">
                        <span>Reliable Inventory: </span>
                       Maintaining a robust stock of diverse steel products to meet immediate project demands.
                      </li>


                       <li class="one">
                        <span>Proactive Solutions:  </span>
                       Anticipating client needs and offering expert advice on material selection and design optimization.

                      </li>
                      
                       
                </ul>
            </div>

              <div className="abt_summary_image slide_bottom_hidden">
                   <img class="card-img" src={web_images.laser1} alt="Team Member 1"/>
              </div>
           </div>



           <div className="about_summary_item">
              <div className="title zoom_hidden">
                <h1>Integrity</h1>
                <hr />
              </div>
             <div className="abt_summary_content bounce_hidden">
                <h2><span> Unwavering</span> Integrity</h2>
                <p>
                  We conduct all business with transparency, honesty, and a 
                  commitment to honoring our promises
                </p>


                 <ul>
                    <li class="one">
                        <span>Material Honesty: </span>
                         Supplying only verified, high-quality materials and being transparent about origins and specifications.

                      </li>

                      
                       <li class="one">
                        <span>Clear Communication: </span>
                       Providing realistic lead times and clear pricing without hidden costs.
                      </li>


                       <li class="one">
                        <span>Accountability: </span>
                        Taking full ownership of material and fabrication quality from the moment of supply until final client satisfaction.

                      </li>
                      
                       
                </ul>
               
            </div>

              <div className="abt_summary_image slide_bottom_hidden">
                   <img class="card-img" src={web_images.home4} alt="Team Member 1"/>
              </div>
           </div>


            

           

          </div>
        </div>

        {/* end about summary */}


        {/* our team */}

          <div className="about_our_team">
            <div className="teams_slides slide_bottom_hidden">
             <div className="teams_title">
              <h1>Uncover Our  <span>Products</span></h1>
              <hr />
             </div>

              <div class="carousel-container">
                <button class="nav-arrow left"><FontAwesomeIcon className='icon' icon={faCaretLeft}/></button>
                <div class="carousel-track">
                 {
                  products_data.map(item=>
                  {
                  
                      return(
                     <div onClick = {()=> navigate_path_btn(`/products/${item.name}`)}  class="card" data-index={item.id}>
                        <img class="card-img" src={item.main_img} alt="Team Member 1"/>
                        <div class="card-content">
                          <h3 class="card-name">{item.name}</h3>
                          
                          
                        </div>
                      </div>
                  )
                  })
                 }
                  
                </div>
                <button class="nav-arrow right"><FontAwesomeIcon className='icon' icon={faCaretRight}/></button>
              </div>

              <div class="member-info">
                <div class="member-info-content">
                  <h2 class="member-name" aria-live="polite">Emily Kim</h2>
                  <p class="member-role" aria-live="polite">Founder</p>
                  
                </div>
              </div>

              

              
            </div>
          </div>

        {/* our team */}



        {/* president profile */}

          <div className="pre_profile">
            <div className="headers-abt">
              <h2>Ready to start your next project?</h2>

              <p>
                Contact or visit Dav Net Ent today to discuss your material and design needs. 
                As your comprehensive supplier of steel plate, pipe, and bars—backed by expert 
                in-house precision laser cutting—we provide the complete solution from inventory to 
                final fabrication. Let us forge your next design into reality.
              </p>
            </div>
            <div className="pre_profile_div">
              <div class="main-grid">
               
                <div class="right-grid">

                
                  <div class="orange-box bounce_hidden">
                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faPhoneVolume}/> <span>Call:</span></h4>
                      <p>+233 244-697-799</p>
                    </div>

                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faMessage}/> <span>Whatsapp:</span></h4>
                      <p>+233 244-697-799</p>
                    </div>

                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faEnvelopeCircleCheck}/> <span>Email:</span></h4>
                      <p>davnet1563@gmail.com</p>
                    </div>
                  </div>
                
                  
                </div>

                  <div class="image-container bounce_hidden">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.930392829774!2d-1.5866222898148286!3d6.778326493190335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbbe6f525d0d6b%3A0x90b0372af2c72755!2sDav-Net%20Ent.!5e0!3m2!1sen!2sgh!4v1759315227315!5m2!1sen!2sgh"   allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                 
              </div>

            </div>
          </div>

        {/* president profile */}

      </div>
  )
}

export default About_page