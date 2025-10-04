import React, { useEffect } from 'react'
import { web_images } from '../../Assets/Images/Web_images/Web_images'
import '../../Assets/Css/Initial_pages/Home.css'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {faCaretRight,faCaretLeft,faAddressCard,faSquareCheck,faPhoneVolume,faLocationDot,faEyeSlash,faEye,faCircleDot,faArrowAltCircleRight,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from 'react-router-dom';
import { products_data } from './Products_data';


function Home() {

    useEffect(() => {
      const Home_SCRIPT_ID = 'home-script';
  
      // Guard: don’t inject twice
      if (document.getElementById(Home_SCRIPT_ID)) return;
  
      // Function that creates & appends the script tag
      const loadScript = () => {
        const script = document.createElement('script');
        script.id = Home_SCRIPT_ID;
        script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Home.js`;
        script.async = true;
        script.onload  = () => console.log('Script Home loaded successfully');
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
        const home_existing = document.getElementById(Home_SCRIPT_ID);
        if (home_existing) home_existing.remove();
      };
    }, []);
     


     const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }




  return (
    <div className="main_home">
     
    {/* main slider div */}
    <div className="main_slider_div">
     
      <main className="main_slider_sub">
        <section className="carousel next" id="carousel_div">
            <div className="list">

                   <article className="item other_1">
                    <div className="main-content" style={{backgroundColor:'white'}}>
                        <div className="mobile_imgdiv">
                             <img src={web_images.home_slider1} alt=""/>
                        </div>
                        
                        <div className="content">
                            
                           <h2><span style={{color:'#82181A'}}>Dav-Net </span>Square Pipes: Built to Last</h2>
                    
                            <p className="description">
                                In the world of metal fabrication and construction, 
                               the right material makes all the difference. 
                               Our square pipes are engineered for superior 
                               performance, offering a perfect blend of strength, 
                               versatility, and clean aesthetics for any project, 
                               big or small.We offer a comprehensive range of sizes to ensure you have 
                               the right material for your specific needs.
                              
                            </p>
                            
                            <div  className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >More details</button>
                            </div>
                        </div>

                         
                    </div>


                    <figure className="image">
                        
                        <img src={web_images.home_slider1} alt=""/>
                          
                    </figure>
                </article>
               
                <article className="item active">
                    <div className="main-content" 
                   style={{background:"whitesmoke"}} >

                         <div className="mobile_imgdiv">
                             <img src={web_images.home_slider2} alt=""/>
                        </div>
                        <div className="content">
                             <h2><span style={{color:'#82181A'}}>Dav-Net </span>Galvanized Pipe: Rust Stops Here</h2>
                    
                            <p className="description">
                                
                               We understand that longevity and performance are key. Our galvanized 
                               pipes are engineered for superior protection, offering a 
                               powerful shield against rust and corrosion. 
                               Each pipe is coated with a layer of zinc, creating an impenetrable
                                barrier that extends the life of your projects.
                                  
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Discover more</button>
                                
                            </div>
                        </div>
                    </div>
                    
                    

                    <figure className="image">
                        <img src={web_images.home_slider2} alt=""/>
                       
                    </figure>
                </article>

                <article className="item other_2">
                    <div className="main-content" 
                    style={{backgroundColor:"lightgrey"}}>
                         <div className="mobile_imgdiv">
                             <img src={web_images.home_slider3} alt=""/>
                        </div>
                        <div className="content">
                         <h2><span style={{color:'#82181A'}}>Dav-Net </span>Angle Bars:  Shaped for Versatility.</h2>
                    
                            <p className="description">
                                At <span style={{color:'#82181A'}}>Dav‑Net</span> Ent., our angle bars deliver the perfect balance of 
                                strength, stability, and versatility. Designed with a precise 90° “L” shape,
                                they provide reliable reinforcement for construction, fabrication, shelving, 
                                and structural frameworks.  
                                
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Explore further</button>
                               
                            </div>
                        </div>
                    </div>

                    

                    <figure className="image">
                        <img src={web_images.home_slider3} alt=""/>
                    </figure>
                </article>

                <article className="item">


                    <div className="main-content" 
                    style={{backgroundColor:"ghostwhite"}}>

                        
                        <div className="mobile_imgdiv">
                            <img src={web_images.home_slider4} alt=""/>
                        </div>

                        <div className="content">
                            <h2><span style={{color:'#82181A'}}>Dav-Net </span>Steel Plates: Engineered for Excellence.</h2>
                    
                             <p className="description">
                                We provide plates in various sizes and thicknesses, all manufactured to the highest standards for a flawless finish.
                                Engineered for extreme durability and strength, our steel plates 
                                can handle anything you throw at them. From heavy machinery bases
                                and structural components to custom fabrication, they deliver
                                unmatched performance. 
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Learn more</button>
                                
                            </div>
                        </div>
                    </div>

                 
                    <figure className="image">
                        <img src={web_images.home_slider4} alt=""/>
                    </figure>
                </article>
           
            
    
            </div>
            <div className="arrows">
                <button id="prev"><FontAwesomeIcon className='icon' icon = {faCaretLeft}/></button>
                <button id="next"><FontAwesomeIcon className='icon' icon = {faCaretRight}/></button>
            </div>
        </section>
        </main>
    </div>
    {/* end of main slider div */}



    {/* who are we */}

    <div className="home_who">

        <div className="home_who_container">

             <div className="who_content_div">
                    <div className='head'>
                        <h2>Our Services</h2>
                        <hr />
                    </div>
                    <p>
                        At Dav-Net Ent, we provide a comprehensive range of 
                        high-quality steel and metal products to meet the needs of 
                        every project, from large-scale construction to detailed 
                        architectural design. We are your one-stop shop for durable
                         materials and expert solutions.
                    </p>

                    <div className="ul_items">

                        <h3>Our Core Products Include:</h3>
                        <hr />

                        <div>
                            <ul className="check-list">
                                <li>Square Pipes</li>
                                <li>Galvanized Pipes</li>
                                <li>Angle Bars</li>
                                <li>Ballustrade Designs</li>
                            </ul>

                            <ul className="check-list">
                                <li>Steel Plate</li>
                                <li>Flat Bars</li>
                                <li>Welded Mesh</li>
                            </ul>

                        </div>

                     
                    </div>


                    <div  className="content_btn">
                        <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Get in touch <span><FontAwesomeIcon className='icon' icon = {faAddressCard}/></span></button>
                    </div>




            </div>


            <div className="who_image_div">

                <div className="house-info">

                    <div className="house-image">
                        <img src={web_images.who_img2} alt=''/>
                    </div>

                    <div className="house-header">
                        <span> For Enquiries</span>
                    </div>

                    <ul className="house-meta">
                        <li><span><FontAwesomeIcon className='icon' icon = {faPhoneVolume}/></span> +233 0244-697-799</li>
                        <li><span><FontAwesomeIcon className='icon' icon = {faWhatsapp}/></span> +233 0244-697-799</li>
                        <li><span><FontAwesomeIcon className='icon' icon = {faEnvelope}/></span>davnet1563@gmail.com</li>
                        <li><span><FontAwesomeIcon className='icon' icon = {faLocationDot}/></span>Fawode-Kumasi Ghana</li>
                    </ul>

                </div>

            </div>


        </div>
    </div>

    {/* who are we */}



    {/* why choose us */}

    <div className="home_why">

        <div className="home_who_container">

            <div className="who_image_div">

                <div className="gallery-item">
                    <img src={web_images.who_img1}/>
                </div>

            </div>


             <div className="who_content_div">
                    <div className='head'>
                        <h2>Why Choose Us</h2>
                        <hr />
                    </div>
                    <p>
                       At Dav-Net Ent, we stand out by delivering exceptional value without 
                       compromise. Our commitment to providing the best quality products at 
                       competitive prices, backed by outstanding customer care, is what sets 
                       us apart.
                    </p>

                    <div className="why_list">

                       <ul className="why_list_ul">

                            <li className="why_list_li">

                                   <span className="why_list_icon">
                                    <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                   </span>
                                    <p>
                                        <span className='why_list_inner'>Premium Quality, Guaranteed.</span> 
                                        We believe that a strong project starts with strong materials. 
                                        That's why we source only the finest steel pipes, galvanized pipes, 
                                        and metal products, ensuring your work is built to last.
                                    </p>
                                  
                            </li>

                            <li className="why_list_li">

                                   <span className="why_list_icon">
                                    <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                   </span>
                                    <p>
                                        <span className='why_list_inner'>Competitive Pricing.</span> 
                                       We understand that your budget is important. We offer highly 
                                       competitive prices across our entire product range, helping you 
                                       maximize your investment without sacrificing quality.
                                    </p>
                                  
                            </li>


                            <li className="why_list_li">

                                   <span className="why_list_icon">
                                    <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                   </span>
                                    <p>
                                        <span className='why_list_inner'>Dedicated Customer Care.</span> 
                                       We're here to support you every step of the way. Our knowledgeable team is 
                                       always ready to assist you with inquiries, provide expert advice, and ensure 
                                       a seamless experience from your first contact to the delivery of your order.


                                    </p>
                                  
                            </li>
                       </ul>

                     
                    </div>


                    <div  className="content_btn">
                        <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Get in touch <span><FontAwesomeIcon className='icon' icon = {faAddressCard}/></span></button>
                    </div>




            </div>

        </div>
    </div>

    {/* why choose us */}



    {/* products  */}

        <div className="home_products">
            <div className="home_products_container">

                    <div className="products_headers">
                        <h3>Products</h3>
                        <h2>Explore Our Range</h2>
                        <hr />
                    </div>
                    <div className="cards_grid">

                       {
                        products_data.map(item=>(
                            <div onClick = {()=> navigate_path_btn(`/products/${item.name}`)} class="cont">
                                    <div class="product-card">
                                        <div class="product-card__image">
                                            <img src={item.main_img} alt="Red Nike Shoes"/>
                                        </div>
                                        <div class="product-card__info">
                                        
                                            <div>
                                                <h2 class="">{item.name}</h2>
                                                <section><FontAwesomeIcon className='icon' icon = {faArrowAltCircleRight}/></section>
                                            </div>
                                        
                                        
                                        </div>
                                    </div>
                            </div>
                        ))
                       }



                    </div>
            </div>
        </div>

    {/* end products */}


    {/* laser */}


    <div className="home_laser">

        <div className='laser_head'>
            <h3>  Steel Laser Design</h3>
            <h2>Precision Laser Cutting for Steel and Plate.</h2>
            <hr />
        </div>
               

          
        <div className="home_laser_container">

          
            <div className="laser_content">

                

                
                <div className="laser_content_div">
                    


                        <p className='mainp'>
                        At <span>DAV-NET ENT</span>, we don't just cut steel—we bring your 
                        most complex sheet and plate designs to life with 
                        unparalleled accuracy and efficiency. Leveraging 
                        state-of-the-art laser technology, we transform your 
                        concepts into flawless metal components.Why Choose DAV Net Ent for 
                        Your Steel Design?
                        </p>

                        <div className="laser_list">

                        <ul className="laser_list_ul">

                                <li className="laser_list_li">

                                    <span className="laser_list_icon">
                                        <FontAwesomeIcon className='icon' icon = {faSquareCheck}/>
                                    </span>
                                        <p>
                                            <span className='laser_list_inner'>Design-Driven Precision: </span> 
                                            We specialize in turning intricate CAD files into reality. Our laser 
                                            machines offer microscopic accuracy, enabling complex geometries and tight tolerances that traditional cutting methods simply can't match.
                                        </p>
                                    
                                </li>

                                <li className="laser_list_li">

                                    <span className="laser_list_icon">
                                        <FontAwesomeIcon className='icon' icon = {faSquareCheck}/>
                                    </span>
                                        <p>
                                            <span className='laser_list_inner'>Speed & Finish: </span> 
                                            Experience faster turnaround times thanks to automated, high-speed cutting.
                                            Our lasers deliver clean, smooth, burr-free edges, reducing the need for 
                                            costly post-processing.
                                        </p>
                                    
                                </li>


                                <li className="laser_list_li">

                                    <span className="laser_list_icon">
                                        <FontAwesomeIcon className='icon' icon = {faSquareCheck}/>
                                    </span>
                                        <p>
                                            <span className='laser_list_inner'>Certified Quality: </span> 
                                            Our laser processing meets the highest industry standard, certified to EN 1090 
                                            EXC-4 for structural steel, guaranteeing your components are built for 
                                            excellence.


                                        </p>
                                    
                                </li>

                            
                        </ul>

                        
                        </div>


                        <div  className="content_btn">
                            <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >More details <span><FontAwesomeIcon className='icon' icon = {faAddressCard}/></span></button>
                        </div>




                </div>

            </div>

            <div className="laser_vid">


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
    </div>

    {/* end laser */}



    
    {/* home image background */}
        <div className="home_main_bg">
            
            <div className="home_bgimg">
                

                {/* number counts */}

                <div className="home_counts_div slide_bottom_hidden">
                    <div class="container">

                    
                        <div class="counters">
                            
                            <div class="counter customer">
                            <h2 class="number"><span class="home_counter_value" data-value="2015">2015</span></h2>
                            <p class="detail">Since 2015</p>
                            
                            </div>
                            
                            <div class="counter project">
                            <h2 class="number"><span class="home_counter_value" data-value="99">0</span>%</h2>
                            <p class="detail">Satisfaction Rate</p>
                            <hr />
                            </div>
                            
                            <div class="counter employee">
                            <h2 class="number"><span class="home_counter_value" data-value="10">0</span>k+</h2>
                            <p class="detail">Happy Clients</p>
                            <hr />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                {/* end number counts */}


                <section>

                    {/* first home message */}
                    <div className="first_message_div zoom_hidden">
                        <div className="first_home_message">
                           <div className="heading">
                                <hr />
                                <div>
                                    <h3>Ready to Build?</h3>
                                     <h2>Choose Dav-Net Ent for Quality You Can Trust</h2>
                                </div>
                                <hr />
                           </div>

                            <p>
                                <span>Dav-Net Ent</span> is your single source for quality metals.From robust
                                Steel Pipes and rust-proof Galvanized Pipe to versatile Flat Bars and security-focused Welded Mesh, we have the durability and variety you need. Plus, elevate your space with our modern
                                Balustrade Designs!

                            </p>

                            <h4>Shop with confidence. Build with <span>Dav-Net Ent</span>.</h4>

                          

                             <div  className="content_btn">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Contact Us <span><FontAwesomeIcon className='icon' icon = {faPhoneVolume}/></span></button>
                            </div>

                        </div>
                    </div>

                    {/* end first home message */}
                </section>

                
            

            </div>
        </div>
    {/* end home image bg */}



    {/* questions */}

    <div className="home_faq">
        <div className="faq_contents">

            <div className="faq_heading">
                <h1>FAQ</h1>
                <h2>Frequently Asked Questions?</h2>
            </div>
            <div className="faq_content">
               
                <div class="faq-container">
                    <div class="faq-item">
                        <div class="faq-question">
                            <p>
                              What materials does Dav Net Ent specialize in?
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                    <div class="faq-answer">
                       We specialize in a wide range of ferrous and non-ferrous metals, 
                       including Structural Steel (e.g., Angle Bars, Flat Bars, I-Beams), 
                       Pipes and Tubes (GI Pipes, seamless), Steel Plates, Welded Mesh, and 
                       specialized metal fabrication (e.g., Balustrade Designs).
                    </div>
                    </div>

                     <div class="faq-item">
                        <div class="faq-question">
                            <p>
                                Do you offer custom cutting and fabrication services?
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                        <div class="faq-answer">
                            Yes, absolutely. We provide value-added processing services 
                            including precision cutting-to-size (sawing, plasma/laser 
                            cutting), drilling, punching, and custom fabrication 
                            (welding, bending) to ensure your material is ready for immediate assembly on your site.
                        </div>
                    </div>

                     <div class="faq-item">
                        <div class="faq-question">
                            <p>
                                Where does Dav Net Ent deliver?
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                    <div class="faq-answer">
                        We provide delivery services across
                         [ Accra, Tema, Kumasi, and surrounding areas]. Contact us to confirm delivery options for locations 
                        outside our standard delivery zones
                    </div>
                    </div>

                    
                  
                </div>
            </div>

        </div>

        <div className="faq_image">
            <div class="img-container">
                <img  src={web_images.home5} />
            </div>

        </div>

        
    </div>

    {/* end questions */}




    {/* contact us */}


     <div className="home_contact">
        <div className="home_contact_container">
            <div className="infos">

                

                <div className="infos_row">
                    <div class="window-container">
                        <div class="window-bracket window-bracket-top-left"></div>
                        <div class="window-bracket window-bracket-top-right"></div>
                        <div class="window-bracket window-bracket-bottom-left"></div>
                        <div class="window-bracket window-bracket-bottom-right"></div>
                        <FontAwesomeIcon className='icon' icon = {faPhoneVolume}/>
                        <h3>Call Us</h3>
                        <h2>+233 244-697-799/</h2>
                    </div>

                    <div class="window-container">
                        <div class="window-bracket window-bracket-top-left"></div>
                        <div class="window-bracket window-bracket-top-right"></div>
                        <div class="window-bracket window-bracket-bottom-left"></div>
                        <div class="window-bracket window-bracket-bottom-right"></div>
                        <FontAwesomeIcon className='icon' icon = {faEnvelope}/>
                        <h3>Email Us</h3>
                        <h2>davnet1563@gmail.com</h2>
                    </div>
                </div>

                 <div class="window-container">
                    <div class="window-bracket window-bracket-top-left"></div>
                    <div class="window-bracket window-bracket-top-right"></div>
                    <div class="window-bracket window-bracket-bottom-left"></div>
                    <div class="window-bracket window-bracket-bottom-right"></div>
                    <FontAwesomeIcon className='icon' icon = {faLocationDot}/>
                    <h3>Address</h3>
                    <h2>Fawode-Kumasi Ghana</h2>
                </div>

                <div className="map">
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.930392829774!2d-1.5866222898148286!3d6.778326493190335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbbe6f525d0d6b%3A0x90b0372af2c72755!2sDav-Net%20Ent.!5e0!3m2!1sen!2sgh!4v1759315227315!5m2!1sen!2sgh"   allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            <div className="home_forms">
                  <div class="form-container">
                        <div class="form-header">
                            <h2>Get In Touch</h2>
                            <p>We'd love to hear from you. Send us a message and we'll respond as 
                                soon as possible.
                            </p>
                        </div>

                        <form class="contact-form" action="#" method="POST">
                            <div class="input-group">
                                <label for="fullName">Full Name</label>
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div class="input-group">
                                <label for="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div class="input-group">
                                <label for="subject">Phone Number</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="+223 51 334 5665"
                                    required
                                />
                            </div>

                            <div class="input-group">
                                <label for="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Tell us more about your inquiry or feedback..."
                                    required
                                ></textarea>
                            </div>

                            <div  className="content_btn">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Send Message <span><FontAwesomeIcon className='icon' icon = {faPhoneVolume}/></span></button>
                            </div>
 
                        </form>
                    </div>
            </div>
        </div>
     </div>


    {/* end contact us */}




    </div>
  )
}

export default Home