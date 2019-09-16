import React from 'react';
import {Switch,Route,Redirect} from 'dva/router'
const MaRoute = ({route}) => (
    <Switch>
{/*      
        {
           route.map(item=>(
               item.path?(
                item.children?(
                      <Route path={item.path}
                    key={item.path}
                    render={props=><item.component {...props} route={item.children}>
                    <MaRoute route={item.children}/>
                    </item.component>}
                    ></Route>
                ):
                <Route path={item.path}
                key={item.path}
                render={props=><item.component {...props}></item.component>}
                ></Route>
             
               )
               :<Redirect {...item} key={item.from}/>
           ))
        } */}
        {
            route.map(item=>(
                item.path?(
                    item.children?(
                        <Route path={item.path} 
                               key={item.path}
                               render={(props)=><item.component {...props} route={item.children}>
                                <MaRoute route={item.children}></MaRoute>
                               </item.component>}
                        />
                    ):<Route  path={item.path} 
                              key={item.path}
                              render={(props)=><item.component {...props} ></item.component>}></Route>
                )
                :<Redirect key={item.from} {...item}></Redirect>
            ))
        }
    </Switch>        
)
export default MaRoute
