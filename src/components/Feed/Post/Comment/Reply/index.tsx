import React, { ReactElement, useState } from 'react'
import IReplyProps from "./types";
import Flex from '../../../../Flex'
import Avatar from "../../../../Avatar";
import { MoreHoriz as MoreIcon, Delete as DeleteIcon  } from '@material-ui/icons';
import { formatDistanceToNow } from "date-fns";
import { IconButton, MenuList, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { usePopupState, bindTrigger  } from 'material-ui-popup-state/hooks'
import CustomPopover from '../../../../CustomPopover';
import * as api from "../../../../../api/reply";
import { useState as useCtxState } from "../../../../../context/index";

import useStyles from './styles'
import { State } from '../../../../../context/reducer';
import { action_delete_reply } from '../../../../../Action/reply.action';

interface Props {
    
}

export default function Reply({  
    popupState, 
    reply,
    postId,
    commentId
}: IReplyProps): ReactElement {
    
    const {
        _id,
        user,  
        commentBody,
        likes,
        created_at,
    } = reply
    const [displayMoreIcon, setDisplayMoreIcon] = useState<boolean>(false)
    const classes = useStyles()
    const [{ posts }, dispatch]: [State, any] = useCtxState()

    const deleteReply = async () => {
        popupState.close()
        postId && commentId && dispatch(action_delete_reply(postId, commentId, reply, posts ))
        const res = postId && commentId && await api.delete_reply(postId, commentId, reply)
        console.log(res)
    }

    return (
        <Flex
            onMouseOver={() => setDisplayMoreIcon(true)}
            onMouseLeave={() => setDisplayMoreIcon(false)}
            className={classes.root}
        >
             <Avatar src={user?.userImg} className={classes.Avatar} />
            <Flex direction="column" className={classes.commentBody}>
            <Flex direction="column" className={classes.commentBody_cont}>
                <h3 className={classes.userName}>{user?.username}</h3>
                <p className={classes.text}>{commentBody}</p>
                <IconButton
                    {...bindTrigger(popupState)}
                    aria-label="options"
                    size="small"
                    className={` ${
                        classes.MuiReplyIconButton
                    }`}
                >
                    <MoreIcon className={classes.moreIcon} />
                </IconButton>
            </Flex>
            <Flex className={classes.like_reply_container}>
                <small className={classes.like_Reply_button}>Like</small>
                <small className={classes.like_Reply_button}>Reply</small>
                <small
                className={`${classes.like_Reply_button} ${classes.created_at}`}
                >
                {created_at && formatDistanceToNow(new Date(created_at))}
                </small>
            </Flex>
            </Flex>
            <CustomPopover popupState={popupState}>
                <MenuList onClick={deleteReply}>
                    <MenuItem>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Delete comment" />
                    </MenuItem>
                </MenuList>
            </CustomPopover>
        </Flex>
    )
}
