import React, { use, useReducer,useEffect } from 'react'
import { Link, NavLink,useParams ,useNavigate} from 'react-router-dom'
import {web_images} from '../../Assets/Images/Web_images/Web_images'
import {faCaretRight,faCaretLeft,faAddressCard,faSquareCheck,faPhoneVolume,faLocationDot,faEyeSlash,faEye,faCircleDot,faArrowAltCircleRight,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../Assets/Css/Initial_pages/Details.css'
import { products_data } from './Products_data';



function Details_page() {

    const {name} = useParams()

    const product = products_data.find(p=>p.name == name)

    const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }

    useEffect(() => {
        const Details_SCRIPT_ID = 'details-script';

        // Guard: don’t inject twice
        if (document.getElementById(Details_SCRIPT_ID)) return;

        // Function that creates & appends the script tag
        const loadScript = () => {
          const script = document.createElement('script');
          script.id = Details_SCRIPT_ID;
          script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Details.js`;
          script.async = true;
          script.onload  = () => console.log('Script details loaded successfully');
          script.onerror = () => console.error('Error loading details script:', script.src);
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
          const details_existing = document.getElementById(Details_SCRIPT_ID);
          if (details_existing) details_existing.remove();
        };
      }, []);


        if (!product) return   (
            <div className="product_none main_details">
                <div className="main_ntf">
                        
                            <div class="container">
                                <div class="eyes">
                                    <div class="eye">
                                        <div class="eye__pupil eye__pupil--left"></div>
                                    </div>
                                    <div class="eye">
                                        <div class="eye__pupil eye__pupil--right"></div>
                                    </div>
                                </div>
                
                                <div class="error-page__heading">
                                    <h1 class="error-page__heading-title">No Match Found</h1>
                                    <p class="error-page__heading-desciption">404 error</p>
                                </div>
                
                                <Link to='/' class="error-page__button" href="#" aria-label="back to home" title="back to home">back to home</Link>
                            </div>
                    
                
                
                    </div>
            </div>
        )


    


    return (
       <div className="details_page main_details">
       
          {/* details banner  */}
         
                    <div className="details_banner">
                      <div class="image-box" 
                       style={{
                          backgroundImage: `url(${product.header_img})`,
                          // backgroundSize: 'cover',
                          // backgroundPosition: 'center',
                          // height: '400px',
                          // width: '100%'
                        }}
                       ></div>
                     
                      <div className="banner_content ">
                          <h1>{product.header_span} <span>{product.name}</span> </h1>
                          <p>
                             {product.header_p}
                            </p>
                            <button  onClick = {()=> navigate_path_btn('/contact-us/')} className="btn1">Get in Touch</button>
            
                        </div>
                    </div>
          
                  {/* end details banner */}
          
          
          
          
          
                  {/* why choose us */}
                   
                      <div className="details_why">
                  
                          <div className="details_who_container">
          
          
          
                               <div className="who_content_div">
                                      <div className='head'>
                                          <h2 className='subhd'>{product.sub_header}</h2>
                                          <hr />
                                      </div>
                                      <p>
                                         {product.description}
                                      </p>
                  
                                      <div className="why_list">
                  
                                         <ul className="why_list_ul">
                  
                                             {product.options.map(
                                              item =>(
                                                  <li className="why_list_li">
                    
                                                      <span className="why_list_icon">
                                                        <FontAwesomeIcon className='icon' icon = {faCircleDot}/>
                                                      </span>
                                                        <p>
                                                            <span className='why_list_inner'>{item.head}</span> 
                                                            {item.detail}
                                                        </p>
                                                      
                                                </li>
                                              )
                                             )}
                  
                                           
                                         </ul>
                  
                                       
                                      </div>
                  
                  
                                      <div  className="content_btn">
                                          <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Get in touch <span><FontAwesomeIcon className='icon' icon = {faAddressCard}/></span></button>
                                      </div>
                  
                  
                  
                  
                              </div>
                  
                              <div className="who_image_div">
                  
                                 <div className="details_img_div">


                                    <div class="container">
                                      <div class="img-shape">
                                        <img src={product.img1} alt="test"/>
                                      </div>
                                      <div class="img-shape">
                                        <img src={product.img2} alt="test"/>
                                      </div>
                                    </div>

                                 </div>
                  
                              </div>
                  
                  
                              
                  
                          </div>
                      </div>
                  
                      {/* why choose us */}





                        {/* products div */}
                      
                      
                             <div className="details_products">
                               <div className="productsp">
                                  <div className="productsp_container">
                                       <div className="details_header">
                                            <h1>Additional<span> Products</span></h1>
                                            <hr />
                                        </div>
                                              
                                      <div class="grid-container">


                                          {
                                            products_data.map(pd=>{
                                              if (pd.name != product.name) return(
                                                <div class="itemp">
                                                    <div class="content-inner fl-wrap">
                                                        <div class="content-front">
                                                            <div class="cf-inner">
                                                                <div class="bg"  style={{backgroundImage:`url(${pd.main_img})`}}></div>
                                                                <div class="overlay"></div>
                                                                <div class="inner">
                                                                    <h2>{pd.name}</h2>
                                                                
                                                                </div>
                                                            </div>
                                                        </div>
                            
                                                        <div class="content-back">
                                                        <div class="cf-inner">
                                                            <div class="inner">
                            
                                                                <button onClick = {()=> navigate_path_btn(`/products/${pd.name}`)} class="btn1">More details</button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                              )
                                            })
                                            
                                          }
                                         
                      
                                       
                                      </div>
                      
                                      
                      
                                  </div>
                              </div>
                             </div>
                          
                              {/* end products div */}
          
          
          
          

       </div>
  )
}

export default Details_page