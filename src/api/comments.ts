import { IComment } from "../models/comment";
import { newCommentResponse } from "../models/response"
import { ENDPOINT } from "./post";

export const endpoint = (postId: string, commentId?: string) => `${ENDPOINT}/post/${postId}/comments${commentId ? `/${commentId}` : ''}` 

export const add_new_comment = async (postId: string, body: Partial<IComment>) => {
    
    try {
   
        const res = await fetch(`${endpoint(postId)}/createComment`, {
            body: JSON.stringify(body),
            method: 'PUT',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as newCommentResponse
        
    } catch(e) {
        console.log(e.message)
    }
}

export const delete_comment = async (postId: string, comment: Partial<IComment>) => {
    
    try {
   
        const res = await fetch(`${endpoint(postId)}/deleteComment`, {
            body: JSON.stringify({ comment }),
            method: 'DELETE',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as newCommentResponse
        
    } catch(e) {
        console.log(e.message)
    }
}

export const like_comment = async (postId: string, commentId: string) => {
    
    try {
   
        const res = await fetch(`${endpoint(postId, commentId)}/like`, {
            method: 'PUT',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as newCommentResponse
        
    } catch(e) {
        console.log(e.message)
    }
}
