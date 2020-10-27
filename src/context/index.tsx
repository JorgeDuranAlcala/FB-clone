import React,  { createContext, Dispatch, useContext, useReducer,  } from "react";
import { Action, State } from "./reducer";


export const ContextState = createContext<any>([])

export type StateProviderProps = {
    reducer: (state: State, action: Action) => any
    initialState: State
}

export type Props = StateProviderProps & React.HTMLProps<HTMLDivElement>

export const StateProvider = ({ children, reducer, initialState }: Props ) => (
    <ContextState.Provider value={useReducer(reducer, initialState)} >
        {children}
    </ContextState.Provider>
)

export const useState = () => useContext(ContextState)