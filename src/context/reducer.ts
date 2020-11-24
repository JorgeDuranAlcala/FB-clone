import { IComment } from "../models/comment"
import { Ipost } from "../models/post"
import { IUser } from "../models/user"

export type State = {
    user?: IUser | null,
    posts?: Ipost[]
}

export const initialState: State = {
    user: null,
    posts: []
}


export enum ActionTypes {
    SIGN_IN = "SIGN_IN",
    LOG_OUT = "LOG_OUT",
    ADD_POSTS = "ADD_POSTS",
    ADD_COMMENT = "ADD_COMMENT",
    UPDATE_COMMENT = "UPDATE_COMMENT",
    UPDATE_POST = "UPDATE_POST",
    REPLY_COMMENT = "REPLY_COMMENT",
    DELETE_COMMENT = "DELETE_COMMENT",
    LIKE_COMMENT = "LIKE_COMMENT",
    DELETE_REPLY = "DELETE_REPLY",
    LIKE_REPLY = "LIKE_REPLY",
}

export type Action = {
    type: ActionTypes
    user?: IUser
    posts?: Ipost[]
}

export default function ctxReducer(state: State, action: Action) {
            switch (action.type) {
                case ActionTypes.SIGN_IN:
                    return {
                        ...state,
                        user: action.user
                    }
                case ActionTypes.ADD_POSTS:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.UPDATE_POST:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.UPDATE_COMMENT:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.REPLY_COMMENT:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.DELETE_COMMENT:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.LIKE_COMMENT:
                    return {
                        ...state,
                        posts: action.posts
                    }
                case ActionTypes.DELETE_REPLY:
                    return {
                        ...state,
                        posts: action.posts
                    }
                    case ActionTypes.LIKE_REPLY:
                        return {
                            ...state,
                            posts: action.posts
                        }
            }
}