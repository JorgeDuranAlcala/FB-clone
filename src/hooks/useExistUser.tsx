import React from 'react'
import * as api from "../api/auth";
import { useState as getCtxState } from '../context/index'
import useLocalStorage from './useLocalStorage';


export default function useExistUser() {
    
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
    const [{ user }] = getCtxState()

    const { getItem } = useLocalStorage()
    console.log("TOKEN >>> ", getItem('token'))
     setIsAuthenticated(!!user)

     console.log("hey")
        
    return {
        isAuthenticated,
        setIsAuthenticated
    }
}
