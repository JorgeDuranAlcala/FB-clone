import * as React from 'react'
import * as api from '.././api/auth'
import { ActionTypes, State } from '../context/reducer';
import { useState as getCtxState } from '../context';
import { useHistory } from 'react-router-dom'
import { IUser } from '../models/user';

export default function () {

    const [{}, dispatch]: [State | {}, any] = getCtxState()
   const [error, setError] = React.useState<Error | null>(null)
   const history = useHistory()

   React.useEffect(() => {
       (async () => {
           try {
               const data = await api.facebookLogin()

               dispatch({
                    type: ActionTypes.SIGN_IN,
                    user: data.user as IUser
                }) 

               history.push('/')

           } catch (error) {
                setError(error.message)
           }
       })()
   }, [dispatch, history])

   const loginWithFB = () => {
       window.open("http://localhost:3500/api/v1/auth/facebook", "_self")
   }

   const logOut = async () => {
       try {
           
           const response = await api.logOut()
           alert(response.message)

       } catch (error) {
           setError(error)
       }
   }

    return {
        loginWithFB,
        logOut,
        error
    }

}