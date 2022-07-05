import React from 'react'
import { useState } from 'react';
import { auth,db } from '../../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { IoSend } from 'react-icons/io5';



const SendMessage = () => {
  const[messageText,setMessageText] = useState('');
  const formSubmitHandler=async(e)=>{
    e.preventDefault();
    const{photoURL,uid,displayName} = auth.currentUser;
    await db.collection("messages").add({
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      photoURL,
      senderName:displayName,
      text:messageText.trim(),
      uid
    })
    setMessageText('');
  }

  const messageChangeHandler=(e)=>{
    setMessageText(e.target.value)
  }

  return (
    <div className="bg-transparent w-full h-30">
      <form className="flex items-center py-2 px-2" onSubmit={formSubmitHandler}>
        <input className="w-full m-2 rounded-xl p-2 px-3 h-10 bg-slate-100 shadow-lg focus:border-none focus:outline-none" onChange={messageChangeHandler} value={messageText} placeholder="Message"/>
        <div className="flex justify-center items-center px-2">
          <button className="bg-blue-500 w-20 h-8 p-3 text-white rounded-2xl font-semibold hover:bg-blue-700 disabled:text-black disabled:bg-gray-300 flex justify-center items-center shadow-md" disabled={messageText.length<=0?true:false}><IoSend/> <p className="ml-1">SEND</p> </button>
        </div>
      </form>
    </div>
  )
}

export default SendMessage