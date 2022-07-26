import { Timeline,TimelineConnector,TimelineDot,TimelineSeparator,TimelineItem,TimelineContent } from "@material-ui/lab";

const Two_three = () => {
    return ( 
        <div className="timeline">

            <h1 className="yearhead">2023: Project Expansion Stage</h1>

        <Timeline align="alternate" >
            <TimelineItem>
                      <TimelineSeparator >
                            <TimelineConnector color="primary" />
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            <h2>Q1:</h2>
                            <ul>
                                <li>CEX listing</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem >
                    <TimelineItem>
                        <TimelineSeparator color="primary">
                            <TimelineDot color="primary" variant="outlined"/>
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            <h2>Q2:</h2>
                            <ul>
                                <li>Architectural drawing and 
renderings of the property 
release with public BOQ of 
the project
</li>
                                <li>NFT Marketplace Development</li>
                                
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            <h2>Q3:</h2>
                            <ul>
                        
                        <li>NFT Presale</li>
                        <li>                        Continued Advert and Marketing </li>
                        <li>Campaign</li>
                        <li>First buyback and burn</li>
                        <li>Uren DEX development and launch</li>

                        
                        
                        
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
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
                        </TimelineContent>
                    </TimelineItem>

        </Timeline>
        <div className="nextline">
                <button>View 2025 RoadMap</button>
            </div>
    </div>              
     );
}
 
export default Two_three;