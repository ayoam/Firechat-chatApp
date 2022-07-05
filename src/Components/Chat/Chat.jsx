import React from 'react'
import { useEffect,useState } from 'react';
import { auth,db } from '../../firebase'
import Messages from '../Messages/Messages';
import SendMessage from '../SendMessage/SendMessage';
import { FiLogOut } from 'react-icons/fi';
import { AiFillFire } from 'react-icons/ai';

const Chat = () => {
  const[messages,setMessages] = useState([]);
  const{photoURL,displayName} = auth.currentUser;
  const signOutHandler=()=>{
    auth.signOut();
  }


  useEffect(()=>{
    db.collection('messages').orderBy('createdAt').onSnapshot({ includeMetadataChanges: false },(snapshot)=>{
      setMessages(snapshot.docs.map(doc=>{
        const data= doc.data();
        return {id:doc.id,...data}
      }));
    })
  },[setMessages])

  return (
    <div className="flex flex-col h-screen mx-auto bg-slate-200">
      <div className="bg-blue-500">
        <div className="flex justify-between items-center p-4 w-full max-w-5xl mx-auto">
          <h1 className="font-bold text-2xl text-white flex justify-center items-center"><AiFillFire className="mr-1" size={28}/>fireChat</h1>
          <div className="flex gap-2 justify-center items-center">
            <img src={photoURL} alt="" className="w-10 h-10 rounded-full"/>
            <p className="text-white font-semibold">{displayName}</p>
            <button onClick={signOutHandler} className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 shadow-lg"><FiLogOut/></button>
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll scroll-smooth	w-full max-w-5xl mx-auto h-5/6 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 px-3">
        <Messages messages={messages.slice(Messages.length-50)}/>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <SendMessage/>
      </div>
    </div>
  )
}

export default Chat