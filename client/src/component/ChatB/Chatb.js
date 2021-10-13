import React,{useState,useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
let socket;

const Chatb = ({location}) => {
    const [ name , setName ] = useState('');
    const [room , setRoom ] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setmessages] = useState([]);

    const endpoint = 'localhost:8080';

    useEffect(() =>{
      const {name,room} = queryString.parse(location.search)
      socket = io(endpoint)
      setName(name);
      setRoom(room);
      
      socket.emit('join',{name ,room},()=>{

      });

      return ()=>{
          socket.emit('disconnect')

          socket.off();
      }

    },[endpoint,location.search])

    useEffect(()=>{
        socket.on("message",(message)=>{
                setmessages([...messages,message]);
        })
    },[message]);

    const sendMessage = e =>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(""))
        }
    }
     
    console.log(message,messages);

    return (
        <div className = "outerContainer">
            <div className ="container">
                <InfoBar romm = {room}/>
                <Input
                  value={message}
                  message={message}
                  setMessage={setMessage}
                  sendMessage={sendMessage}
                />
            </div> 
        </div>
    )
}

export default Chatb
