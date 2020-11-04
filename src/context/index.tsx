import React,  { createContext, Reducer, useContext, useReducer,  } from "react";
import { Action, State } from "./reducer";


export const ContextState = createContext<any>([])

export type StateProviderProps = {
    reducer: any
    initialState: State
}

export type Props = StateProviderProps & React.HTMLProps<HTMLDivElement>

export const StateProvider = ({ children, reducer, initialState }: Props ) => (
    <ContextState.Provider value={useReducer<Reducer<State, Action>>(reducer, initialState)} >
        {children}
    </ContextState.Provider>
)

export const useState = () => useContext(ContextState)