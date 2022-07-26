import { Timeline,TimelineConnector,TimelineDot,TimelineSeparator,TimelineItem,TimelineContent, } from "@material-ui/lab";
const Two_two = () => {
    return ( 
<div className="timeline">
    <h1 className="yearhead">2022: Development Stage</h1>
                    <Timeline align="alternate">
                <TimelineItem>
                        <TimelineSeparator >
                            <TimelineConnector color="primary" />
                            <TimelineDot color="primary" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            <h2>Q2:</h2>
                            <ul>
                                <li>initial seed funding il</li>
                                <li>BRISE Audit</li>
                                <li>Website launch</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem >
                    <TimelineItem>
                        <TimelineSeparator color="primary">
                            <TimelineDot color="primary"/>
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            <h2>Q3</h2>
                            <ul>
                                <li>Token Launch</li>
                                <li>DEX Listing</li>
                                <li>Uren Andriod App development</li>
                                <li>Web App development</li>
                                <li>App Early bird testing</li>
                                <li>Debugging and upgrades</li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
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
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </div>
     );
}
 
export default Two_two; 
 

 