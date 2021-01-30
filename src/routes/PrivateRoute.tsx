import React, { ReactElement } from 'react'
import { Route, RouteProps, useHistory, Redirect, RouteComponentProps } from 'react-router-dom'
import useExistUser from '../hooks/useExistUser'
import * as api from '../api/auth'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState as useCTXState } from '../context'
import { auth_validator } from "../utils/auth_validation";
import { IUser } from '../models/user'
import { State } from '../context/reducer'


/* export default function PrivateRoute({ ...props}: RouteProps): ReactElement {
  
    const [{ user }] = useCTXState()
    
    React.useEffect(() => {
      
        if(!user) {
            history.push('/login')
      }
      
      console.log("Private route", user)
      
    }, [user, history])

    return <Route {...props} />
}
 */

interface PrivateRouteProps extends RouteProps {
   /*  isAuthenticated: boolean; */
   /* component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>; */
   //user: IUser
}

const PrivateRoute = ({
    /* component: Component, */
    ...rest
}: PrivateRouteProps) => {

    const [{ user }]: [State] = useCTXState()


    return  user ? <Route {...rest}  /> : <Redirect to="/login" />


}
export default React.memo(PrivateRoute)
