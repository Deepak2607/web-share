import React, { Component } from 'react';
import {Button} from 'react-materialize';
import image from "./workhour1.jpg";
class App extends Component {

       handleOnClick=() => {
            // window.open(
            //     `https://api.whatsapp.com/send?text=Share%20on%20Whatsapp%20http%3A%2F%2Fhttps://okcredit.in%20`,
            //     "_blank"
            // )
            if (navigator.canShare && navigator.canShare({
                    
                })) {
                navigator.share({
                        title: "web-share",
                        text: "share on any platform",
                        file: image,
                    })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            } else {
                console.log("Web Share API is not supported in your browser.")
            }      
        }

 
    render () {
        
        return (
            <div> 
            <div className="container-fluid">
            <Button node="a" style={{color:"white"}} waves="light" onClick={this.handleOnClick}>Share</Button>
            </div>
            </div>
    );
  }  
}

export default App;