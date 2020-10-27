import React from 'react'
import FacebookButton, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login'
import { Facebook as fcbIcon  } from "@material-ui/icons";
import useStyles from './styles'
import { useState as useCtxState } from '../../context';
import { ActionTypes } from '../../context/reducer';
import { useHistory } from 'react-router-dom';
import { IUser } from '../../models/user';

const LogIn = () => {

    const classes = useStyles()
    const [{}, dispatch] = useCtxState()
    const history = useHistory()

    const fbResponse = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        
        dispatch && dispatch({
            type: ActionTypes.SIGN_IN,
            user: response as IUser
        })

        history.push('/')
    }

    return (
        <div className={classes.root} >
            <div>
                <h2>Login with Facebook</h2>
                    <FacebookButton 
                        appId="1533079716891507"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={fbResponse}
                        icon="fa-facebook"
                        />
            </div>
        </div>
    )
}

export default LogIn