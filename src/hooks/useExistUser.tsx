import React from 'react'
import * as api from "../api/auth";


export default function useExistUser() {
    
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

       React.useEffect(() => {
           (async () => {
                const res = await api.getCookies()
                setIsAuthenticated(!!res.cookies?.user_session);
                
           })()
       }, [])

        
    return {
        isAuthenticated,
        setIsAuthenticated
    }
}
