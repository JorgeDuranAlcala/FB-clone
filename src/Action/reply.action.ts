import { ActionTypes, Action } from "../context/reducer";
import { IComment, IReply } from "../models/comment";
import { Ipost } from "../models/post";
import { findAndModify, findAndRemoveById } from "../utils/array";


export const action_delete_reply = (postId: string, commentId: string, replyId: string , posts?: Ipost[]): Action => {

    
        const post = posts?.find(p => p._id === postId)
        const comment = post?.comments?.find(c => c._id === commentId)
        const new_replies_arr = comment?.replies && findAndRemoveById<IReply>(comment.replies, replyId )
        const comments = post?.comments.map(c => c._id === commentId ? {...c, replies: new_replies_arr} : c)
        console.log("Comments", comments)
        const posts_updated = posts?.map(p => p._id === postId ? {...p, comments} : p) as Ipost[]

        console.log("Updated", posts_updated)

        return {
            type: ActionTypes.DELETE_REPLY,
            posts: posts_updated
        }
}

export const action_like_reply = (postId: string, commentId: string, replyId: string, posts?: Ipost[]): Action => {

    const post = posts?.find(p => p._id === postId)
    const comment = post?.comments.find(c => c._id === commentId)
    const new_replies = comment?.replies?.map(r => (r._id === replyId && r.likes) ? {...r, likes: r.likes + 1} : r)
    const comments = post?.comments && findAndModify(commentId, post.comments, { replies: new_replies })
    const posts_updated = posts && findAndModify(postId, posts, { comments })
    
        return {
            type: ActionTypes.LIKE_REPLY,
            posts: posts_updated
        }
}