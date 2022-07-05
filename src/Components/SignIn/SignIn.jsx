import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from '../../firebase.js'
import { FcGoogle } from 'react-icons/fc';



const SignIn = () => {
  const signInWithGoogleHandler =(e)=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center ">
      <h1 className="font-semibold text-3xl mb-6 text-purple-900">Welcome to fireChat</h1>
      <button onClick={signInWithGoogleHandler} className=" bg-slate-100 p-3 w-48 hover:bg-slate-200 flex justify-center items-center shadow-md font-semibold"><FcGoogle size={18}/><p className="ml-2">Sign in with google</p></button>
    </div>
  )
}

export default SignIn