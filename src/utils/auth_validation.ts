import * as API from '../api/auth'

export const auth_validator = async () => {
    const res = await API.getCookies()
    return !!res?.user
}