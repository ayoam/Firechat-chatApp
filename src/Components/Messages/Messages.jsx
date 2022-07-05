import React from 'react'
import MessageItem from '../MessageItem/MessageItem';
import { auth } from '../../firebase'

const Messages = ({messages}) => {
  const{uid} = auth.currentUser;

  if(messages.length===0){
    return <></>
  }

  return (
    <div className="p-3">
    {messages.length===1 && messages[0].empty 
      ?
        <center><p>Say Hello 👋</p></center>
      :
        messages.map(msg=>{
          if(msg.uid===uid){
            return <MessageItem key={msg.id} message={msg} currentUser={true}/>
          }
          if(msg.empty){
            return <div key={0}></div>
          }
          return <MessageItem key={msg.id} message={msg} currentUser={false}/>
          })
    }
    </div>
  )
}

export default Messages