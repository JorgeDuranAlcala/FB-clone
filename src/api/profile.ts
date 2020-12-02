import { ENDPOINT } from "./post";
import cookies from "js-cookie"

export const getProfileData = async () => {
    try {

        const headers = new Headers()
        /* headers.append("cookies", `${cookies.getJSON()}`) */

        const res = await fetch(`${ENDPOINT}/profile`, {
            method: 'get',
            headers,
            credentials: 'include'
        })
        return res.json()
    
    } catch (error) {
        throw new Error(error.message)
    }
}