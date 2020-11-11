import React, { useEffect, useState } from 'react'
import { get_all_posts } from '../api/post'
import { Ipost } from "../models/post";
import Pusher from 'pusher-js'
import { IComment } from '../models/comment';
import { findAndModify } from '../utils/array';


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
      
        type pusherData = {
            change: {
                updateDescription: {
                    removedFields: Array<any> | []
                    updatedFields: any
                },
                documentKey: {
                    _id: string
                }
            }
        }

        channel.bind("inserted", (data: any) => getPostFromAPI())
        channel.bind("like", (data: pusherData) => {
            if(data) {
                console.log(data)
                const {
                    documentKey: {
                        _id: Id
                    }, 
                    updateDescription: { 
                    updatedFields
                    } 
                } = data.change
                
                /* let property = Object.keys(updatedFields)[0].replace(/\.[0-9]$/g, '') */
                let newData = updatedFields[Object.keys(updatedFields)[0]] as IComment
                console.log(newData)
                let newArr = updatedFields.likes 
                                ? findAndModify(Id, postsList, { likes: updatedFields.likes })
                                : postsList.map(post => post._id === Id 
                                    ? {
                                        ...post, 
                                        comments: [...post.comments, {...newData}]
                                     } 
                                    : post)
                console.log(newArr)
                setPostsList(newArr)
            }

        })

        return () => {
            channel.unbind()
            pusher.unsubscribe('post')
        }

    }, [postsList])

    
    useEffect(() => {
        getPostFromAPI()
    }, [])


    return postsList
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}