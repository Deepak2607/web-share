import React, { Component } from 'react';
import {Button} from 'react-materialize';
class App extends Component {


       async handleOnClick(){

            if(navigator.share) {
              await navigator.share({
                title: 'Share',
                text: 'Share application',
                url: 'https://okcredit.in',
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error in sharing', error));
            }else {
              console.log(`system doesn't support sharing files.`);
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


