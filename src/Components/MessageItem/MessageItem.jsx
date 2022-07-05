import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'

const MessageItem = ({message:{text,photoURL,senderName,createdAt},currentUser}) => {

  const msgDate = createdAt? new Date(createdAt.seconds*1000):new Date();
  const shortMsgDate = msgDate.toLocaleDateString('en-US');
  const shortMsgTime = msgDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  const todaysDate = new Date();
  const dateDiff = Math.floor((todaysDate.getTime() - msgDate.getTime())/(1000 * 3600 * 24));
  const displayTime = [shortMsgDate,shortMsgTime];

  if(dateDiff===0){
    displayTime[0]="Today";
  }else if(dateDiff===1){
    displayTime[0]="Yesterday";
  }

  const [currentUserStyle,setCurrentUserStyle] = useState(["","",""," text-black"," bg-white"]);
  const eltRef = useRef();
  

  useEffect(()=>{
    if(currentUser){
      setCurrentUserStyle([" flex-row-reverse"," m-0 mr-2"," float-right"," text-white"," bg-blue-500"]);
    }
    eltRef.current.scrollIntoView();

  },[currentUser])

  return (
    <div className="mb-3" ref={eltRef}>
      <div className={"flex"+currentUserStyle[0]}>
        <img src={photoURL} alt="" className="w-8 h-8 object-cover rounded-full mt-2"/>
        <div className={"ml-2 "+currentUserStyle[1]}>
          <div className={"p-2 pb-3 rounded-md max-w-md pr-4 shadow-lg"+currentUserStyle[4]}>
            <h2 className={"font-bold text-sm"+currentUserStyle[3]}>{senderName}</h2>
            <p className={"break-words"+currentUserStyle[3]}>{text}</p>
          </div>
          <p className={"text-xs mt-1"+currentUserStyle[2]}>{displayTime.join(" ")}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageItem