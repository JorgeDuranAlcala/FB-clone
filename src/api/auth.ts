import { GetCookieResponse, Response } from '../models/response';
import { IUser } from '../models/user';
import { fetchOptionsWithCredentials } from '../utils/api_utils';
import { ENDPOINT } from './post'

export const facebookLogin = async () => {
    try {
        let headers = new Headers()
        /* headers.append('Access-Control-Allow-Origin', 'http://localhost:3000'); */
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-type', 'application/json')
        headers.append('Accept', 'application/json')

        const res = await fetch(`${ENDPOINT}/success`, fetchOptionsWithCredentials({ headers, method: 'get' }));
        return await res.json()
    } catch (error) {
        throw new Error(error.message)
    }
} 

export const Login = async (user: IUser) => {
    try {
        let headers = new Headers()
        /* headers.append('Access-Control-Allow-Origin', 'http://localhost:3000'); */
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-type', 'application/json')
        headers.append('Accept', 'application/json')

        const res = await fetch(`${ENDPOINT}/login`, fetchOptionsWithCredentials({ 
            headers, 
            method: 'POST',
            body: JSON.stringify(user)
        }));
        return await res.json()

    } catch (error) {
        throw new Error(error.message)
    }
} 

export const logOut = async () => {
    try {
        const res = await fetch(`${ENDPOINT}/logout`)
        return await res.json()
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getCookies = async () => {
    try {

        const res = await fetch(`${ENDPOINT}/getCookies`, fetchOptionsWithCredentials())
        return await res.json() as GetCookieResponse

    } catch (error) {
        throw new Error(error)
    }
}