import * as React from 'react'
import * as api from '.././api/auth'
import { ActionTypes } from '../context/reducer';
import { History } from 'history'
import { IUser } from '../models/user';

export default function (history: History<History.UnknownFacade>, dispatch: any ) {

   const [error, setError] = React.useState<{ message?: string }>({})

   React.useEffect(() => {
       (async () => {
           try {
               const data = await api.facebookLogin()

               dispatch({
                    type: ActionTypes.SIGN_IN,
                    user: data.user as IUser
                })

                history.replace('/')

           } catch (error) {
                setError(error)
           }
       })()
   }, [dispatch, history])

   const loginWithFB = () => {
       window.open("http://localhost:3500/api/v1/auth/facebook", "_self")
   }

    return {
        loginWithFB,
        error
    }

}