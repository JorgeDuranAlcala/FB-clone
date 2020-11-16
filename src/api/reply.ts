import { IReply } from "../models/comment";
import { ReplyResponse } from "../models/response"
import { endpoint } from "./comments";

const repEndpoint = (postId: string, commentId: string, replyId?: string) => `${endpoint(postId, commentId)}/reply${replyId ? `/${replyId}` : ''}` 


export const add_new_reply = async (postId: string, commentId: string, body: Partial<IReply>) => {
    
    try {
   
        const res = await fetch(repEndpoint(postId, commentId), {
            body: JSON.stringify(body),
            method: 'PUT',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as ReplyResponse
        
    } catch(e) {
        console.log(e.message)
    }
}

export const delete_reply = async (postId: string, commentId: string, reply: Partial<IReply>) => {
    
    try {
   
        const res = await fetch(`${repEndpoint(postId, commentId)}/deleteComment`, {
            body: JSON.stringify({ reply }),
            method: 'DELETE',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as ReplyResponse
        
    } catch(e) {
        console.log(e.message)
    }
}

export const like_reply = async (postId: string, commentId: string, replyId: string) => {
    
    try {
   
        const res = await fetch(`${repEndpoint(postId, commentId, replyId)}/like`, {
            method: 'PUT',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as ReplyResponse
        
    } catch(e) {
        console.log(e.message)
    }
}
