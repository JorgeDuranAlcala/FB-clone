import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import LoginPage from "./pages/Log-in";
import PrivateRoute from './routes/PrivateRoute';
import { useState as getCtxState } from "./context/index";
import useExistUser from './hooks/useExistUser';
import { ActionTypes } from './context/reducer';
import useLocalStorage from './hooks/useLocalStorage';
import * as API from './api/auth'
import ProfilePage from './pages/Profile';

function App() {
  const [{ posts, user }, dispatch] = getCtxState()
  console.group("USER >>")
  console.log(user)
  console.groupEnd()
  const history = createBrowserHistory()
  const { getItem } = useLocalStorage()
  /* const [ cookies, setCookies ] = React.useState<{ user_session?: string }>() */

  React.useEffect(() => {

   /*  dispatch({
      type: ActionTypes.SIGN_IN,
      user:  JSON.parse( String(getItem('user')) )
    }) 
    */

    const fecthCookies = async () => {
        const res = await API.getCookies()
       console.log("Cookie response >> ", res)
        dispatch({
          type: ActionTypes.SIGN_IN,
          user: res?.user
        })
      }

      fecthCookies()

      console.log("hI THERE!!")
    

  }, [])

  return (
    <div className="App">
      <Router history={history}>
           {/*  <PrivateRoute path="/" exact component={Home} user={user} /> */}
           {
             !user ? <LoginPage/> 
             : (
                <>
                  <Route path="/" exact component={Home}  />
                  <Route path="/profile" component={ProfilePage} />
               </>
              )
           }
      </Router>
    </div>
  );
}

export default App;
