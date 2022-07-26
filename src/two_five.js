import { Timeline,TimelineConnector,TimelineDot,TimelineSeparator,TimelineItem,TimelineContent } from "@material-ui/lab";

const Two_five   = () => {
    return ( 
        <div className="timeline">
            <h1 className="yearhead">2025: Uren Chain</h1>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h1>Q1:</h1>
                        <ul>
                            <li>First Uren Estate launch and Listing</li>

                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <h1>Q3:</h1>
                        <ul>
                            
                            <li>Uren Chain</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            
        </div>
     );
}
    
export default Two_five;