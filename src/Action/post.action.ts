import { useState as getCtxState } from "../context/index";
import { ActionTypes, Action, State } from "../context/reducer";
import { IComment } from "../models/comment";
import { Ipost } from "../models/post";


export const action_like_post = (postId: string, posts?: Ipost[]): Action => {

    const posts_updated = posts?.map(p => p._id === postId ? {...p, likes: p.likes + 1} : p)

    return {
        type: ActionTypes.UPDATE_POST,
        posts: posts_updated
    }
}

export const action_add_comment = (postId: string, comment: IComment, posts?: Ipost[] ): Action => {

    const posts_updated = posts?.map(p => p._id === postId ? {...p, comments: [...p.comments, {...comment}]} : p)

    console.log(posts_updated)

    return {
        type: ActionTypes.UPDATE_POST,
        posts: posts_updated
    }
}