import { useState, useEffect } from "react";
import {Sliderdata} from "./Headss"

const Header = ( { slides }) => {
    const [headers, setHeaders] = useState(0)
    const length = slides.length

    useEffect(() => {
        const interval =   setInterval(() => {
            setHeaders( headers === length -1 ? 0: headers + 1 )
        }, 5000);
        return () => clearInterval(interval)
    }, [headers])
    if (!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }
    
    return ( 
        <div className="development" >
            {Sliderdata.map((head, index) => {
              
                    return (
                        
                            <div className={index === headers ? "slide-active:" : 'slide'} key= {index}>
                            {index === headers && (
                                         

                                            <div className= 'text w3-animate-right'>
                                                <div>
                                                <h1>{ head.header }</h1>
                                                <p>{ head.subHead}</p>
                                                <button>View More</button>
                                                </div>
                                               
                                                <img src={require(`${ head.image }` )} alt="kyrh" style={{
                                                    width: head.width,
                                                    height: head.height,
                                                    top: head.top,
                                                    left: head.left,
                                                }} />
                                                
                                               
                                            </div> 
                            )}               
                          
                                        </div>
                        
                    
                    
              
        
                 
            

                
)}
        

            )}
 </div>)}
export default Header;