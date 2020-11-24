import React, { useEffect, useState, useCallback } from 'react'
import { get_all_posts } from '../api/post'
import { Ipost } from "../models/post";
import Pusher from 'pusher-js'
import { IComment } from '../models/comment';
import { findAndModify } from '../utils/array';
import { useState as getCtxState } from "../context/index";
import { ActionTypes, State } from '../context/reducer';


export default function useGetPosts() {
    
    const [postsList, setPostsList] = useState<Ipost[]>([])
    const [{ posts }, dispatch]: [State, any] = getCtxState()
    
    const getPostFromAPI = useCallback( async () => {
        const posts = await get_all_posts()
        dispatch({
            type: ActionTypes.ADD_POSTS,
            posts
        })
        /* setPostsList(posts) */
    }, [dispatch])

    const getUpdatedPostFromAPI = useCallback( async () => {
        const posts = await get_all_posts()
        dispatch({
            type: ActionTypes.REPLY_COMMENT,
            posts
        })
        /* setPostsList(posts) */
    }, [dispatch])
    
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
        channel.bind('deleted', (data: any) => getPostFromAPI())
        channel.bind("updated", (data: pusherData) => {
            if(data) {
                const {
                    documentKey: {
                        _id: Id
                    }, 
                    updateDescription: { 
                    updatedFields
                    } 
                } = data.change
                
                /* 
                console.log(data)
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
                setPostsList(newArr) */
               /*  alert("Reply") */
               /*  const numbers =  Object.keys(updatedFields)[0].match(/[0-9]/g) as string[]
                const typeReply =  Object.keys(updatedFields)[0].match(/replies/g) as string[]
               let newData = updatedFields[Object.keys(updatedFields)[0]] as IComment
                console.log(updatedFields, newData)
                console.log("Numbers", numbers, "Replies", typeReply)
                console.log("change", data)
                let comment = posts?.find(p => p._id === Id)?.comments[`${numbers[0]}`] as any */
                getPostFromAPI()
            }

        })

        return () => {
            channel.unbind()
            pusher.unsubscribe('post')
        }

    }, [getPostFromAPI, postsList, getUpdatedPostFromAPI])

    
    useEffect(() => {
        getPostFromAPI()
    }, [])


    return posts
            ?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}