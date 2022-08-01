import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Two_five   = () => {
    return ( 
        <div className="timeline">
            <h1 className="yearhead">2025: Uren Chain</h1>
            <VerticalTimeline  lineColor="#00f">
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                        <h1>Q1:</h1>
                        <ul>
                            <li>First Uren Estate launch and Listing</li>

                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                <h1>Q3:</h1>
                        <ul>
                            
                            <li>Uren Chain</li>
                        </ul>                   
                </VerticalTimelineElement>
                </VerticalTimeline>          

    
        </div>
     );
}
    
export default Two_five;