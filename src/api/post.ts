import { response } from "../models/response"


export const get_all_posts = async () => {
    const res = await fetch(`http://localhost:3500/api/v1/posts`)
    const { post_list } = await res.json() as response
    return post_list
}