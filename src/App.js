import React, { Component } from 'react';
import {Button} from 'react-materialize';
import image from './okcredit.jpeg';
class App extends Component {


       async handleOnClick(){

            if(navigator.share) {
              await navigator.share({
                title: 'Share',
                text: 'Download the app and buy essential items from your nearby shops.',
                url: 'https://okcredit.in',
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error in sharing', error));
            }else {
              console.log(`system does not support sharing files.`);
            }

            // const files = [image];
            // if (navigator.canShare && navigator.canShare({
            //         files: files
            //     })) {
            //     await navigator.share({
            //             title: 'Share',
            //             text: 'Download the app and buy anything from your nearby shops.',
            //             url: 'https://okcredit.in',
            //             file: files,
            //         })
            //         .then(() => console.log('Successful share'))
            //         .catch((error) => console.log('Error sharing', error));
            // }else{
            //     console.log("system doesn't support sharing files");
            // }

        }

        componentDidMount= ()=> {
          if (navigator.share === undefined) {
            if (window.location.protocol === 'http:') {
              window.location.replace(window.location.href.replace(/^http:/, 'https:'));
            } 
          }
        }

    render () {

    let style1={
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "100vh",
            }
            
    let style2= { 
            marginBottom: "10px",
            textAlign: "center",
            marginRight: 30,
            marginLeft: 30,
            }

        return (
            <div style={style1}>
            <div style={style2} className="container-fluid">
            <Button node="a" style={{ color:"white"}} waves="light" onClick={this.handleOnClick}>Share</Button>
            </div></div>
    );
  }  
}

export default App;


