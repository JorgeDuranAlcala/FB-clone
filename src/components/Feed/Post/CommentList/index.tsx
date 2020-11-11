import React, { ReactElement } from 'react'
/* import { OverlayScrollbarsComponent } from 'overlayscrollbars-react' */
import Comment from '../Comment'
import { IComment } from '../../../../models/comment'

interface Props {
    comments: IComment[]
}

export default function CommentList({  comments  }: Props): ReactElement {
    

    
    return (
        <>
           { comments.map( (comment) => <Comment key={comment._id} {...comment} /> ) }
        </>
    )
}
