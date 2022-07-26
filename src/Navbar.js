import logo from './logo.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    
    return (
        <div className="navbar">
           <img src={logo}  alt="logo" />
            <div className="links">
                <NavLink to="/" className={({isActive}) => isActive ? 'active' : 'inactive'} >Home</NavLink>
                <NavLink to="about" className={({isActive}) => isActive ? 'active' : 'inactive'}>About</NavLink>
                <NavLink to="roadmap" className={({isActive}) => isActive ? 'active' : 'inactive'}>RoadMap</NavLink>
            </div>

        </div>

     );
}
 


export default Navbar;