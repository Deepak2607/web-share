import React, { Component } from 'react';
import {Button} from 'react-materialize';
import image from "./workhour1.jpg";
class App extends Component {

       handleOnClick=() => {

            if (navigator.share) {
              navigator.share({
                title: 'web.dev',
                text: 'Check out web.dev.',
                url: 'https://okcredit.in',
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
            }else {
              console.log(`Your system doesn't support sharing files.`);
            }
        }

        componentDidMount= ()=> {
          if (navigator.share === undefined) {
            if (window.location.protocol === 'http:') {
              window.location.replace(window.location.href.replace(/^http:/, 'https:'));
            } 
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


