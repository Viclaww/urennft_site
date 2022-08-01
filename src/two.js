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
                            
                        </TimelineContent>
                    </TimelineItem >
                    <TimelineItem>
                        <TimelineSeparator color="primary">
                            <TimelineDot color="primary"/>
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                            
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector color="primary"/>
                        </TimelineSeparator>
                        
                        <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </div>
     );
}
 
export default Two_two; 
 

 