import React from 'react'
import * as api from "../api/auth";


export default function useExistUser() {
    
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

     /*   React.useEffect(() => {
           (async () => {
                api.getCookies()
                .then(res => {
                    console.group("Cookies")
                    console.log(res)
                    setIsAuthenticated(!!res.cookies?.user_session);
                })
                
           })()
       }, []) */

        
    return {
        isAuthenticated,
        setIsAuthenticated
    }
}
