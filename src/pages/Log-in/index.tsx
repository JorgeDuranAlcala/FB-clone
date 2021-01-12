import React from 'react'
import useStyles from './styles'
import useFBLogin from "../../hooks/useFacebookLogin";
import FacebookLogin from 'react-facebook-login';

const LogIn = () => {

    const classes = useStyles()
    const { loginWithFB, error } = useFBLogin()

    return (
        <div className={classes.root} >
            <div>
                <h2>Login with Facebook</h2>
               {/*  <button onClick={loginWithFB} >
                    Login or signup with Facebook
                </button> */}
                <FacebookLogin
                    appId="1533079716891507"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={loginWithFB} 
                />
                <p> { error?.message } </p>
            </div>
        </div>
    )
}

export default LogIn
