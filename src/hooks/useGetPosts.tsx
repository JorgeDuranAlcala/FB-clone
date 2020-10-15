import React, { useEffect, useState } from 'react'
import { get_all_posts } from '../api/post'
import { Ipost } from "../models/post";

export default function useGetPosts() {

    const [postsList, setPostsList] = useState<Ipost[]>([])

    useEffect(() => {
        (async () => {
            setPostsList(await get_all_posts())
        })()
    }, [])

    return postsList

}