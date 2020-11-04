import React from 'react'
import { useState as useCtxState } from '../context'
import { State } from '../context/reducer'


export default function useExistUser() {
    const [{user}]: [State] = useCtxState()

    return !!user
}
