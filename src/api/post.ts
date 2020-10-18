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

    let fdValues: { key: string, value: any }[] = []

    fd.forEach((value, key) => {
        fdValues = [...fdValues, { key, value }]
    })

    const res = await fetch(`http://localhost:3500/api/v1/upload`, {
        body: fd,
        method: 'post',
    })

    return await res.json()

    /* return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(fd) {
                resolve({message: "Its okey", fd: fdValues})
            } else {
                reject({message: 'Failed theres nothing to upload'})
            }
        }, 2500);
    }) */
}

