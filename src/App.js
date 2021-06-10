import './App.css';
import React,{ useEffect, useState } from 'react';
import Message from './Message';
import {Button,Input} from '@material-ui/core';
import {db } from './firebase.js';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [message,setmessage] = useState([]);
  const [username,setUsername]= useState('');


  useEffect(()=>{
    db.collection('message').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setmessage(snapshot.docs.map(doc=>
        doc.data()
      ))
    })
  })




  useEffect(() => {
   setUsername(prompt('enter your username'));
  },[]);


  const  hanclick = (e)=>{
      e.preventDefault();

      db.collection('message').add({
        username:username,
        input:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
    // setmessage([...message,{username:username,input:input}]);
    setInput('');

  }


  return (
    <div className="app">
     <div className="app__header">
        <img src="https://www.citypng.com/public/uploads/preview/-41604239917hr3jiufrzu.png" alt="jp"/>
        </div>
      <div className="app__message">
          <div className="app__msgheader">
               <h1>Message view:{username}</h1>

          </div>
         <div>
             {message.map(msg=>(
                <div>
                  <Message message={msg} username={username}/>
                </div>
              ))}
          </div>
        </div>
     <div className="app__main">
      
        <Input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Emter your name"/>
        <Button   variant="contained" color="primary" disabled={!input} type="button" onClick={hanclick}>submit</Button>
     
     </div>
      
   
    
    </div>
  );
}

export default App;
