import Header from "./Header"
import Maincontent from "./Maincontent"
import { Sliderdata } from "./Headss";
import OurRoadmap from "./OurRoadmad";
import Community from "./Community";
import Footer from "./Footer";
const Home = () => {
    return ( 
        <div className="home">
        
            <Header slides = { Sliderdata }   />

            
            <Maincontent />
            <Community />
            <OurRoadmap />
            <Footer />
        </div>
     );
}
 
export default Home;