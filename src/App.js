import './Assets/Styles/App.css';
// import SignIn from './Components/SignIn/SignIn';
// import Chat from './Components/Chat/Chat'
// import PageNotFound from './Pages/PageNotFound/PageNotFound';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Route,Switch,Redirect} from 'react-router-dom'
import LoadingSpinner from './Components/UI/LoadingSpinner';
import React,{Suspense} from 'react'

const SignIn = React.lazy(()=>import('./Components/SignIn/SignIn'));
const Chat = React.lazy(()=>import('./Components/Chat/Chat'));
const PageNotFound = React.lazy(()=>import('./Pages/PageNotFound/PageNotFound'));

function App() {
  const [user]=useAuthState(auth);
  return (
    <>
      <Suspense fallback={<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner/></div>}
        >
        <Switch>
          <Route path="/welcome" exact>
            {user ? <Redirect to="/chat"/> : <SignIn/>}
          </Route>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/chat">
            {!user ? <Redirect to="/"/> : <Chat/>}
          </Route>
          <Route path="/page-not-found">
            <PageNotFound/>
          </Route>
          <Route path="*">
            <Redirect to="/page-not-found"/>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
