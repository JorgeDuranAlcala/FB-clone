import React from 'react'
/* import { Facebook as fcbIcon  } from "@material-ui/icons"; */
import useStyles from './styles'
/* import { useState as useCtxState } from '../../context'; */
import useFBLogin from "../../hooks/useFacebookLogin";
import useProfile from '../../hooks/useProfile';

const LogIn = () => {

    const classes = useStyles()
    /* const [{}, dispatch] = useCtxState()
    const history = useHistory() */
    const { loginWithFB, error, logOut } = useFBLogin()
    const { data, error: errProfile, loading, getProfileData  } = useProfile()

    console.log(data)

    return (
        <div className={classes.root} >
            <div>
                <h2>Login with Facebook</h2>
                <button onClick={loginWithFB} >
                    Login or signup with Facebook
                </button>
                <button onClick={logOut} >
                    Log out
                </button>
                <button onClick={getProfileData} disabled={loading} >
                    Get profile Data
                </button>
                <p> { error?.message || errProfile?.message } </p>
            </div>
        </div>
    )
}

export default LogIn
