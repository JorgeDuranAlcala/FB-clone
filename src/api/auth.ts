import { ENDPOINT } from './post'

export const facebookLogin = async () => {
    try {
        let headers = new Headers()
        /* headers.append('Access-Control-Allow-Origin', 'http://localhost:3000'); */
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-type', 'application/json')
        headers.append('Accept', 'application/json')

        const res = await fetch(`${ENDPOINT}/success`, {
            method: 'get',
            credentials: 'include',
            headers
        });
        return await res.json()
    } catch (error) {
        throw new Error(error.message)
    }
} 