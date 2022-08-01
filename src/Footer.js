import { Link } from 'react-router-dom';
import logo from './logo.png'
const Footer = () => {
    return ( 
        <div className="footer">
            <img src={logo} alt="" />
            <div className="footer-text">
                 <ul>
                     <h4>Explore</h4>
                     <li> <Link to="/">Home</Link> </li>
                     <li>  <Link to="/about">about</Link></li>
                     <li> <Link to="/roadmap">roadmap</Link></li>
                 
                 </ul>
                 <ul className="hiddenhead">
                     <h4 id="hide">d</h4>
                    <li>Support</li>
                    <li>careers</li>
                    <li>community</li>
                 </ul>
                 <ul>
                     <h4>legal</h4>
                     <li>site terms</li>
                     <li>terms & condition</li>
                     <li>privacy policy</li>
                 </ul>
                 <ul>
                    <h4>Documents</h4>
                    <li>White paper</li> 
                    <li>Code of Ethics</li>
                 </ul>
            </div>

            <p>Copyright &#169; urentech 2022. All rights reserved</p>
        </div>
     );
}
 
export default Footer;