import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
const Two_two = () => {
    return ( 
<div className="timeline">
    <h1 className="yearhead">2022: Development Stage</h1>
                <VerticalTimeline  lineColor="#00f">
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                        <h2>Q2:</h2>
                            <ul>
                                <li>initial seed funding il</li>
                                <li>BRISE Audit</li>
                                <li>Website launch</li>
                            </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                        <h2>Q3:</h2>
                            <ul>
                                <li>Token Launch</li>
                                <li>DEX Listing</li>
                                <li>Uren Andriod App development</li>
                                <li>Web App development</li>
                                <li>App Early bird testing</li>
                                <li>Debugging and upgrades</li>
                            </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                               <h2>Q4</h2>
                            <ul>
                                <li>Apps listing on website, 
Google PlayStore e.t.c</li>
                                <li>Property Listing and Apps Use
 fully commence  </li>
                                <li>Marketing campaign launch
(with AMAs and interviews)
</li>
                                <li>Partnership</li>
                            </ul>
                     
                    </VerticalTimelineElement>
                </VerticalTimeline>
                </div>
     );
}
 
export default Two_two; 
 

 