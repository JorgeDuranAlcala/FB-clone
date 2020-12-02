import * as api from '../api/profile'
import * as React from 'react'

export default function useProfile() {

    const [data, setData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<Error | null>(null)

    const getProfileData = () => {

        setLoading(true)

        api.getProfileData()
            .then(data =>{ 

                setLoading(false)
                setData(data)

            })
            .catch(err => {

                setLoading(false)
                setError(err)
            })
    }

    return {
        data,
        getProfileData,
        loading,
        error
    }
    
}