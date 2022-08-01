import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
const Two_three = () => {
    return ( 
        <div className="timeline">

            <h1 className="yearhead">2023: Project Expansion Stage</h1>
            <VerticalTimeline  lineColor="#00f">
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                                <h2>Q1:</h2>
                            <ul>
                                <li>CEX listing</li>
                            </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                         <h2>Q2:</h2>
                            <ul>
                                <li>Architectural drawing and 
renderings of the property 
release with public BOQ of 
the project
</li>
                                <li>NFT Marketplace Development</li>
                                
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
                        
                        <li>NFT Presale</li>
                        <li>                        Continued Advert and Marketing </li>
                        <li>Campaign</li>
                        <li>First buyback and burn</li>
                        <li>Uren DEX development and launch</li>

                        
                        
                        
                            </ul>
                        
                     
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    iconStyle={{background:"#08091a", color:'#33a'}} 
                    className="vertical-timeline-element"
                    contentStyle={{ background:'#00001c', color:'#fff'}}
                    contentArrowStyle={{borderRight:'7px solid black'}}
                    >
                     <h2>Q4:</h2>
                            <ul>
                        
                        <li>Uren CEX Developmet and Beta
Testing</li>
                        <li>   Investors Benefit Implementation takes effect</li>
                        <li>
Bounty Program</li>
                        <li>CEX full launch</li>
                        <li>Internationalization and Establishment
 of branches
</li>
                        <li>
Patent Applications (More to unfold)
                        </li>
                     



                        
                            </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
             
     );
}
 
export default Two_three;