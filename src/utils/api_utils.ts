
export function fetchOptionsWithCredentials(extraOps?: RequestInit): RequestInit {
    return {
        credentials: 'include',
        ...extraOps
    }
}