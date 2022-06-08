import Navbar from "./Navbar";
import Header from "./Header"
import Maincontent from "./Maincontent"
import { Sliderdata } from "./Headss";
const Home = () => {
    return ( 
        <div className="home">
            <Navbar />     
            <Header slides = { Sliderdata }   />

            
            <Maincontent />
        </div>
     );
}
 
export default Home;