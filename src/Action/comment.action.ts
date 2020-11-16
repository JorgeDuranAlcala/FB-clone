import { ActionTypes, Action } from "../context/reducer";
import { IComment, IReply } from "../models/comment";
import { Ipost } from "../models/post";
import { findAndModify, findAndRemove } from "../utils/array";


export const action_reply_comment = (postId: string, commentId: string, reply: IReply , posts?: Ipost[]): Action => {

        const post = posts?.find(p => p._id === postId)
        const comments = post?.comments?.map(c => c._id === commentId ? {...c, replies: [...c.replies, {...reply}]} : c)
        console.log("Posts", posts)
        console.log("PostsId", postId)
        console.log("Comments", commentId)
        console.log("reply", reply)
        const posts_updated = posts?.map(p => p._id === postId ? {...p, comments} : p) as Ipost[]
        console.log("Post Updated", posts_updated)
    
        return {
            type: ActionTypes.REPLY_COMMENT,
            posts: posts_updated
        }
}

export const action_like_comment = (postId: string, commentId: string, posts?: Ipost[]): Action => {

        const post = posts?.find(p => p._id === postId)
        const comments = post?.comments?.map(c => c._id === commentId ? {...c, likes: c.likes ? c.likes + 1 : c.likes} : c)
        const posts_updated = posts?.map(p => p._id === postId ? {...p, comments} : p) as Ipost[]
        console.log(posts_updated)
    
        return {
            type: ActionTypes.LIKE_COMMENT,
            posts: posts_updated
        }
}

export const action_delete_comment = (postId: string, comment: IComment , posts: Ipost[]): Action => {

        const post = posts?.find(p => p._id === postId)
        const newCommentsArr = post?.comments && findAndRemove(comment, post?.comments)
        const newPostsArr = posts?.map(p => p._id === postId ? {...p, comments: newCommentsArr} : p) as Ipost[]
        console.log("DELETE COMMENT ACTION >>", newCommentsArr)

        return {
            type: ActionTypes.DELETE_COMMENT,
            posts: newPostsArr
        }
}
