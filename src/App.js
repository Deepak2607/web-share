import React, { useState, useEffect } from 'react';
import {Button, TextInput, Card} from 'react-materialize';
const App = () =>{

       const [title, setTitle] = useState();
       const [text, setText] = useState();
       const [url, setUrl]= useState();
       const [file, setFile] = useState();

       const handleTitle= (event)=>{
        setTitle(event.target.value);
       }
       const handleText= (event)=>{
        setText(event.target.value);
       }
       const handleUrl= (event)=>{
        setUrl(event.target.value);
       }
       const handleFile= (event)=>{
        setFile(event.target.files[0]);
       }

       async function handleOnSubmit(){

            // const response = await fetch(image);
            // const blob = await response.blob();
            // const file = new File([blob], 'share.jpg', {type: blob.type});
            // console.log(file);

            if(navigator.share) {
              await navigator.share({
                title: title,
                text: text,
                url: url,
                files: [file]     
              })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error in sharing', error));
            }else {
              console.log(`system does not support sharing files.`);
            }
       
        }
         
        useEffect(()=> {
          if (navigator.share === undefined) {
            if (window.location.protocol === 'http:') {
              window.location.replace(window.location.href.replace(/^http:/, 'https:'));
            } 
          }
        }, []);

   
        // let style1={
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "column",
        // minHeight: "100vh",
        // }

        // let style2= { 
        // marginBottom: "10px",
        // textAlign: "center",
        // marginRight: 30,
        // marginLeft: 30,
        // }

        let style3= {
          color:"lightseagreen"
        }
        let style4= {
          marginTop:"4%"
        }

        return (
            <div>
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div style={style4} className="col-md-4">
              <Card>
              <h5 style={style3}>Share on any social platform</h5>
              <h6 style={style3}>(Supported in android & ios phones)</h6>
              <TextInput value={title} onChange={handleTitle} label="Title" />
              <TextInput value={text} onChange={handleText} label="Text" />
              <TextInput value={url} onChange={handleUrl} label="Url" />
              <TextInput onChange={handleFile} label="File" type="file" />
              <Button node="a" style={{ color:"white"}} waves="light" onClick={handleOnSubmit} >Share</Button>
              </Card>
              </div>
              <div className="col-md-4"></div>
            </div>   
            </div>
            </div>
    );
}

export default App;


