import React, { ReactElement } from 'react'
import { IUser } from '../../../../models/user'
import Flex from '../../../Flex'
import Avatar from "../../../Avatar";
import useStyles from './styles'
import ICommentProps from './types';


export default function Comment({ 
    user,  
    commentBody,
    likes,
    replies,
    created_at,
    ...rest
}: ICommentProps): ReactElement {
    
    const classes = useStyles()
    
    return (
        <>
            <Flex className={classes.root} {...rest} >
                    <Avatar src={user?.userImg}  className={classes.Avatar} />
                    <Flex direction="column" className={classes.commentBody}  >
                        <Flex direction="column" className={classes.commentBody_container}>
                            <h3 className={classes.userName} >
                                {user?.username}
                            </h3>
                            <p className={classes.text} >
                                { commentBody }
                            </p>
                        </Flex>
                        <Flex>
                            <span className={classes.like_Reply_button}>Like</span>
                            <span className={classes.like_Reply_button}>Reply</span>
                        </Flex>
                    </Flex>
            </Flex>
        </>
    )
}
