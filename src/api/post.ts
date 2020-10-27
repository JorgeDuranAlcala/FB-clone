import { response } from "../models/response"


export const get_all_posts = async () => {
    const res = await fetch(`http://localhost:3500/api/v1/posts`)
    const { post_list } = await res.json() as response
    return post_list
}

export const create_post = async (desc: string, file?: File ) => {

    const fd = new FormData()

    fd.append('desc', desc)
    file && fd.append('image', file)


    try {
   
        const res = await fetch(`http://localhost:3500/api/v1/upload`, {
            body: fd,
            method: 'post',
        })
        
        return await res.json()
        
    } catch(e) {
        console.log(e)
    }
    
}

