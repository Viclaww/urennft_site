import { Timeline,TimelineConnector,TimelineDot,TimelineSeparator,TimelineItem,TimelineContent } from "@material-ui/lab";

const Two_four   = () => {
    return ( 
        <div className="timeline">
            <h1 className="tall">2024: Real Estate Project Commencement</h1>            
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
                            <li>Estate development project begins in Nigeria</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h1>Q4:</h1>
                        <ul>
                            <li>Property construction progress AMA schedule release with live footage of the property (this will be a continues scheduled AMAs)
</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
     );
}
    
export default Two_four;