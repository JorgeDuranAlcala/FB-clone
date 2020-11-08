import { Ipost } from "../models/post"
import { getPostsResponse, updatePostResponse } from "../models/response"

const ENDPOINT = `http://localhost:3500/api/v1`

export const get_all_posts = async () => {
    const res = await fetch(`${ENDPOINT}/posts`)
    const { post_list } = await res.json() as getPostsResponse
    return post_list
}

export const create_post = async (desc: string, userImg?: string, file?: File ) => {

    const fd = new FormData()

    fd.append('desc', desc)
    userImg && fd.append('userImg', userImg)
    file && fd.append('image', file)


    try {
   
        const res = await fetch(`${ENDPOINT}/upload`, {
            body: fd,
            method: 'post',
        })
        
        return await res.json()
        
    } catch(e) {
        console.log(e)
    }
    
}

export const update_post = async (id: string, body: Partial<Ipost>) => {
    
    try {
   
        const res = await fetch(`${ENDPOINT}/post/${id}`, {
            body: JSON.stringify(body),
            method: 'PUT',
            headers: { "Content-type": 'application/json' }
        })
        
        return await res.json() as updatePostResponse
        
    } catch(e) {
        console.log(e.message)
    }
}

