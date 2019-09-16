import React from 'react'
import {Router} from 'dva/router'
import MapRoute from './mapRoute'
import route from './route'
 function componentName({history}) {
     return (
         <div>
             <Router history={history}>
               <MapRoute route={route}></MapRoute>
             </Router>
         </div>
     )
 }
 
 export default componentName
 