
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
const Two_four   = () => {
    return ( 
        <div className="timeline">
            <h1 className="yearhead">2024: Real Estate Project Commencement</h1>  
            <VerticalTimeline  lineColor="#00f">
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                                <h2>Q1:</h2>
                        <ul>
                            <li>Estate development project begins in Nigeria</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                <h1>Q4:</h1>
                                        <ul>
                                            <li>Property construction progress AMA schedule release with live footage of the property (this will be a continues scheduled AMAs)
                </li>
                                        </ul>                    
                </VerticalTimelineElement>
                </VerticalTimeline>          
            
        </div>
     );
}
    
export default Two_four;