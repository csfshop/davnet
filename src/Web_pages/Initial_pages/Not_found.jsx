import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/Css/Initial_pages/Not_found.css'


function Not_found() {
  return (
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
                    <h1 class="error-page__heading-title">Looks like you're lost</h1>
                    <p class="error-page__heading-desciption">404 error</p>
                </div>

                <Link to='/' class="error-page__button" href="#" aria-label="back to home" title="back to home">back to home</Link>
            </div>
     


    </div>
   )
  
}

export default Not_found