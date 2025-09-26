import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Web_routers from './Web_routers'
import Not_found from '../Web_pages/Initial_pages/Not_found'


function Main_routers() {
  return (
    <div>
        <Routes>
            <Route path='*' element={<Web_routers/>}/>
           
        </Routes>
    </div>
  )
}

export default Main_routers