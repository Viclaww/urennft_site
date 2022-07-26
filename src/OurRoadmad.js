import image from "./roadmap.png"
const OurRoadmap = () => {
    return ( 
        <div className="OurRoadmap">
            <div className="text">
                <h3>Our Roadmap</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quae cum nam vitae quia labore accusantium natus ex recusandae illo dolor error quos sequi officia?
                </p>
                <button>View Road Map</button>
            </div>
            <img src={image} alt="" />
        </div>
     );
}
 
export default OurRoadmap;