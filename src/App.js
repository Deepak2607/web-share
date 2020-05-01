import React, { Component } from 'react';
import {Button} from 'react-materialize';
import image from "./workhour1.jpg";
class App extends Component {

       handleOnClick=() => {
            // window.open(
            //     `https://api.whatsapp.com/send?text=Share%20on%20Whatsapp%20http%3A%2F%2Fhttps://okcredit.in%20`,
            //     "_blank"
            // )
            const files = [image];
            if (navigator.canShare && navigator.canShare({ files: files})){
                navigator.share({
                        title: 'Vacation Pictures',
                        text: 'Photos from September 27 to October 14.',
                        file: files,
                    })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            } else {
                console.log("Web Share API is not supported in your browser.")
            }
        }

 
    render () {
              
            // const onLoad()=> {
            //   if (navigator.share === undefined) {
            //     if (window.location.protocol === 'http:') {
            //       window.location.replace(window.location.href.replace(/^http:/, 'https:'));
            //     } 
            //   }
            // }

            // window.addEventListener('load', onLoad);
        
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


