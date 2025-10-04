import React from 'react'
import '../../Assets/Css/Initial_pages/Products.css'

import {web_images} from '../../Assets/Images/Web_images/Web_images'
import { products_data } from './Products_data'
import { useNavigate } from 'react-router-dom'

function Products() {

    const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        console.log('Hello')
        navigate(path_way)
    }

  return (
    <div>
         {/* products banner  */}

          <div className="products_banner">
            <div class="image-box" ></div>
            <div className="banner_content ">
                <h1>Explore Our Range <span> Products Range</span> </h1>
                <p>
                   Your single source for high-quality metal materials and precision design.
                  </p>
                  <button onClick = {()=> navigate_path_btn('/contact-us/')} class="btn1">Get in Touch</button>
  
              </div>
          </div>

        {/* end products banner */}




       {/* products div */}


        <div className="productsp">
            <div className="productsp_container">

                <div className="details_header">
                    <h1>Products Range</h1>
                    <hr />
                </div>

                <div class="grid-container">
                    {
                        products_data.map(pd=>(
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
        
                                            <button onClick = {()=> navigate_path_btn(`/products/${pd.name}`)} className="btn1">More details</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                        
                    }

                 
                 
                        
                    

                </div>

                

            </div>
        </div>
    
        {/* end products div */}


    </div>
  )
}

export default Products