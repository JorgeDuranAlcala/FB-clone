import React, { ReactElement } from 'react'
import { Route, RouteProps, useHistory, Redirect, RouteComponentProps } from 'react-router-dom'
import useExistUser from '../hooks/useExistUser'
import * as api from '../api/auth'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState as useCTXState } from '../context'
import { auth_validator } from "../utils/auth_validation";
import { IUser } from '../models/user'


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
   user: IUser
}

const PrivateRoute = ({
    /* component: Component, */
    user,
    ...rest
}: PrivateRouteProps) => {
    
    const history = useHistory()
    /*     const [condition, setCondition] = React.useState(false)
    
    React.useEffect(() => {
        
        const fetchCondition = async () => setCondition( await auth_validator() )
        
        fetchCondition()

        console.log("hello")
        
    }, []) */
    console.log("private >> ", user)


    return  user ? <Route {...rest}  /> : <Redirect to="/login" />


}
export default React.memo( PrivateRoute, (prevProps, nextProps) => (
    prevProps.user === nextProps.user || prevProps.component === nextProps.component
))
