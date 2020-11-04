import { IUser } from "../models/user"

export type State = {
    user?: IUser | null
}

export const initialState: State = {
    user: null
}


export enum ActionTypes {
    SIGN_IN = "SIGN_IN",
    LOG_OUT = "LOG_OUT"
}

export type Action = {
    type: ActionTypes
    user: IUser
}

export default function ctxReducer(state: State, action: Action) {
            switch (action.type) {
                case ActionTypes.SIGN_IN:
                    return {
                        ...state,
                        user: action.user
                    }
            }
}