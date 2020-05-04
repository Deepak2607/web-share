import React, { Component } from 'react';
import {Button} from 'react-materialize';
import image from './okcredit.jpeg';
class App extends Component {


       async handleOnClick(){

            const image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rick_Astley_Dallas.jpg/267px-Rick_Astley_Dallas.jpg";
        
            if(navigator.share) {
              const response = await fetch(image_url);
              const blob = await response.blob();
              const file = new File([blob], 'rick.jpg', {type: blob.type});
              console.log(file);
              await navigator.share({
                title: 'Share',
                text: 'Download the app and buy essential items from your nearby shops.',
                url: 'https://okcredit.in',
                files: [file]     
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error in sharing', error));
            }else {
              console.log(`system does not support sharing files.`);
            }


             // if (files && files.length > 0) {
             //    if (!navigator.canShare || !navigator.canShare({files})) {
             //      console.log('Error: Unsupported feature: navigator.canShare()');
             //      return;
             //    }
             //  }

            // var file = new File(['okcredit'], './okcredit.jpeg', {type:'image/jpg'});
            // console.log(file);
            // let filesArray = [];
            // filesArray.push(file);

            // if (navigator.canShare && navigator.canShare({ files: filesArray })) {
            //     await navigator.share({
            //             title: 'Share',
            //             text: 'Download the app and buy essential items from your nearby shops.',
            //             url: 'https://okcredit.in',
            //             file: files
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
            <Button node="a" style={{ color:"white"}} waves="light" onClick={this.handleOnClick}>Shar</Button>
            </div></div>
    );
  }  
}

export default App;


