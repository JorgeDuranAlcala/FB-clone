import React from 'react'
import FacebookButton, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login'
import { Facebook as fcbIcon  } from "@material-ui/icons";
import useStyles from './styles'
import { useState as useCtxState } from '../../context';
import { ActionTypes } from '../../context/reducer';
import { useHistory } from 'react-router-dom';
import { IUser } from '../../models/user';
import useFBLogin from "../../hooks/useFacebookLogin";

const LogIn = () => {

    const classes = useStyles()
    const [{}, dispatch] = useCtxState()
    const history = useHistory()
    const { loginWithFB, error } = useFBLogin(history, dispatch)

    const fbResponse = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        
        //console.log(response)
        dispatch({
            type: ActionTypes.SIGN_IN,
            user: response as IUser
        })


        history.push('/')
    }


    return (
        <div className={classes.root} >
            <div>
                <h2>Login with Facebook</h2>
                <button onClick={loginWithFB} >
                    Login or signup with Facebook
                </button>
                <p> { error && error.message } </p>
            </div>
        </div>
    )
}

export default LogIn
