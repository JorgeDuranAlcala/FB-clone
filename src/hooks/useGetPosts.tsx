import React, { useEffect, useState } from 'react'
import { get_all_posts } from '../api/post'
import { Ipost } from "../models/post";
import Pusher from 'pusher-js'


export default function useGetPosts() {
    
    const [postsList, setPostsList] = useState<Ipost[]>([])
    
    const getPostFromAPI = async () => {
        setPostsList(await get_all_posts())
    }
    
    useEffect(() => {
        
        const pusher = new Pusher('b88e5dfc3c15df9e0133', {
            cluster: 'mt1'
        })

        const channel =  pusher.subscribe('post')
      
        channel.bind("inserted", (data: any) => { getPostFromAPI()})

    }, [])
    
    useEffect(() => {
        getPostFromAPI()
    }, [])


    return postsList
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

}