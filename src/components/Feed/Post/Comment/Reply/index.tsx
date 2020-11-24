import React, { ReactElement } from 'react'
import Avatar from '../../../../Avatar'
import Flex from '../../../../Flex'
import IReply from './types'
import Reactions from '../../../../Reactions'
import { formatDistanceToNow, format } from "date-fns";
import { IconButton } from "@material-ui/core";
import { MoreHoriz as MoreIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { usePopupState, bindTrigger  } from 'material-ui-popup-state/hooks'
import CustomPopover from '../../../../CustomPopover'
import CustomTooltip from "../../../../CustomTooltip";
import { useState as useCtxState } from "../../../../../context";
import { State } from '../../../../../context/reducer'
import useStyles from './styles'
import { action_delete_reply, action_like_reply } from '../../../../../Action/reply.action'
import * as api from '../../../../../api/reply'


export default function Reply({
    reply,
    commentId,
    postId
}: IReply): ReactElement {

   const {
       _id: replyId,
        user,
        commentBody,
        likes,
        created_at,
   } = reply

   const classes = useStyles()
   const popupState = usePopupState({
        variant: 'popover',
        popupId: 'options-popover-reply'
    })
    const [{ posts }, dispatch]: [State, any] = useCtxState()

    async function deleteReply() {
        if(postId && commentId && replyId) {
            popupState.close()
            dispatch(action_delete_reply(postId, commentId, replyId , posts))
            const res = await api.delete_reply(postId, commentId, reply)
            console.log(res)
        }
    }

    async function LikeReply() {
        if(postId && commentId && replyId) {
            dispatch(action_like_reply(postId, commentId, replyId, posts))
            const res = await api.like_reply(postId, commentId, replyId)
            console.log("RESPONSE >>", res)
        }
    }


    return (
        <Flex align="center" className={classes.root} > 

            <Avatar  src={user.userImg} className={classes.avatar} />

            <Flex direction="column">
                <Flex direction="column" className={classes.commentBody}>

                  <h3 className={classes.userName}>{user?.username}</h3>
                  <p className={classes.text}>{commentBody}</p>

                  {/* Reactions */}

                  <div className={classes.reactions}>
                    <Reactions size="small" numReactions={likes} />
                  </div>

                   {/* Delete Icon */}

                   <IconButton
                        {...bindTrigger(popupState)}
                        aria-label="options"
                        size="small"
                        className={classes.MuiIconButton}
                    >
                      <MoreIcon />
                    </IconButton>

                     {/* Popup to delete */}

                    <CustomPopover popupState={popupState}>
                        <Flex align="center" className={classes.deletePlace} onClick={deleteReply}>
                            <DeleteIcon className={classes.deleteIcon} />
                           <span>
                                Delete reply
                            </span> 
                        </Flex>  
                    </CustomPopover>

                </Flex>
                <Flex align="center" className={classes.like_reply_container} >
                    <span className={classes.like_Reply_button} onClick={LikeReply}>Like</span>
                    <span className={classes.like_Reply_button}>Reply</span>
                    <CustomTooltip title={`${ created_at && format(new Date(created_at), "PP")}`} >
                        <span className={`${classes.created_at} ${classes.like_Reply_button}`}>
                            { created_at && formatDistanceToNow(new Date(created_at)) }
                        </span>
                    </CustomTooltip>
                </Flex>
            </Flex>
        </Flex>
    )
}
