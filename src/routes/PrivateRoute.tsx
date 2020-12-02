import React, { ReactElement } from 'react'
import { Route, RouteProps, useHistory } from 'react-router-dom'
import useExistUser from '../hooks/useExistUser'

interface Props extends RouteProps {
    
}

export default function PrivateRoute({ ...props}: Props): ReactElement {

   const { isAuthenticated } = useExistUser()
   const history = useHistory()

   if(!isAuthenticated) {
       history.push('/login')
   }

    return <Route {...props} />
}
