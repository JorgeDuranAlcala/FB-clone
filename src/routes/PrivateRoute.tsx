import React, { ReactElement } from 'react'
import { Route, RouteProps, useHistory } from 'react-router-dom'
import useExistUser from '../hooks/useExistUser'
import * as api from '../api/auth'


export default function PrivateRoute({ ...props}: RouteProps): ReactElement {

   const { isAuthenticated } = useExistUser()
   const history = useHistory()


    return <Route {...props} />
}
