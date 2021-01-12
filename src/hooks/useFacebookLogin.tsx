import * as React from 'react'
import * as api from '.././api/auth'
import { ActionTypes, State } from '../context/reducer';
import { useState as getCtxState } from '../context';
import { useHistory } from 'react-router-dom'
import { IUser } from '../models/user';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

export default function () {

    const [{}, dispatch]: [State | {}, any] = getCtxState()
   const [error, setError] = React.useState<Error | null>(null)
   const history = useHistory()

   const loginWithFB = async (response: ReactFacebookLoginInfo) => {
       //window.open("http://localhost:3500/api/v1/auth/facebook", "_self")


       //console.log(response)

        const user: IUser = {
            access_token: response.accessToken,
            username: response.name || '',
            userImg: response.picture?.data.url || '',
            facebookId: response.id
        }

        const res = await api.Login(user)
        console.group("Login Response >>")
        console.log(res)
        console.groupEnd()
        
       dispatch({
            type: ActionTypes.SIGN_IN,
            user
        }) 
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