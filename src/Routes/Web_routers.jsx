import React,{ useEffect } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import {Nav_bar,Home,Not_found,Footer,Details_page,About_page,Contact_page,Products,Services}  from  '../Web_pages/Initial_pages/Initial_pages'
import '../Assets/Css/Initial_pages/Web_routes.css'
import '../Assets/Css/Custom/Transition.css'



function Web_routers() {

  const { pathname } = useLocation() 
   
 useEffect(() => {
    const ID = 'trans-script'
    if (document.getElementById(ID)) return      // already in DOM, bail out

    // loader fn
    const load = () => {
      const s = document.createElement('script')
      s.id    = ID
      s.src   = `${process.env.PUBLIC_URL}/Js/Web_pages/Transition.js`
      s.async = true
      s.onload  = () => console.log('🎉 transition script loaded')
      s.onerror = () => console.error('⚠️ failed to load transition script')
      document.body.appendChild(s)
    }

    // if DOM already parsed, go now, otherwise wait
    if (document.readyState !== 'loading') {
      load()
    } else {
      document.addEventListener('DOMContentLoaded', load, { once: true })
    }

    // cleanup on unmount or route change
    return () => {
      document.removeEventListener('DOMContentLoaded', load)
      const existing = document.getElementById(ID)
      if (existing) existing.remove()
    }
  }, [pathname])



  return (
    <div className='site-wrapper'>
     <div className="main_nav">
        <Nav_bar/>
     </div>

     <div className="site-content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About_page/>}/>
            <Route path='/contact-us' element={<Contact_page/>}/>
            <Route path='/products' element={<Products/>}/>
             <Route path='/products/:name' element={<Details_page/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='*' element={<Not_found/>}/>

        </Routes>
        
     </div>

     <div className="main_footer">
        <Footer/>
     </div>

    </div>


   
  )
}

export default Web_routers