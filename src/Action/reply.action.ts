import { ActionTypes, Action } from "../context/reducer";
import { IComment, IReply } from "../models/comment";
import { Ipost } from "../models/post";
import { findAndRemove } from "../utils/array";


export const action_delete_reply = (postId: string, commentId: string, reply: IReply , posts?: Ipost[]): Action => {

        const post = posts?.find(p => p._id === postId)
        const comment = post?.comments?.find(c => c._id === commentId)
        const new_replies_arr = comment?.replies && findAndRemove(reply, comment?.replies)
        const comments = post?.comments.map(c => c._id === commentId ? {...c, replies: new_replies_arr} : c)
        const posts_updated = posts?.map(p => p._id === postId ? {...p, comments} : p) as Ipost[]
    

        return {
            type: ActionTypes.DELETE_REPLY,
            posts: posts_updated
        }
}