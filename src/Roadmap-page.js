import Footer from "./Footer"
import {  NavLink, Outlet,  } from 'react-router-dom'
const Roadmappage = () => {
  return ( 
      
                <div className="Roadmappage">
                <div className="development">
                <div className="header">
                    <div className="text">
                    <h1> RoadMap</h1>
                    </div>
                    <img src={require("./roadmap.png")} alt="" className="headimg" />
                </div>

            </div>
            <div className="Mainconten">

              <div className="year">
                <NavLink to="2022" className={({isActive}) => isActive ? 'activeYear' : 'inactive'}>2022</NavLink>
                <NavLink to="2023"className={({isActive}) => isActive ? 'activeYear' : 'inactive'}>2023</NavLink>
                <NavLink to="2024"className={({isActive}) => isActive ? 'activeYear' : 'inactive'}>2024</NavLink>
                <NavLink to="2025/"className={({isActive}) => isActive ? 'activeYear' : 'inactive'}>2025</NavLink>
              </div>
              <div>
                
                <Outlet />  
                </div>              
              
 
            
              
            </div>
            
            
        
            <Footer />
        </div>
     
        
     );
}
 
export default Roadmappage;
