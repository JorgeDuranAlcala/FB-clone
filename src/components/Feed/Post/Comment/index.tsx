import React, { ReactElement, useState } from 'react'
import Flex from '../../../Flex'
import Avatar from "../../../Avatar";
import useStyles from './styles'
import ICommentProps from './types';
import { MoreHoriz as MoreIcon, Delete as DeleteIcon  } from '@material-ui/icons';
import { format, formatDistanceToNow } from "date-fns";
import { IconButton, MenuList, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { usePopupState, bindTrigger  } from 'material-ui-popup-state/hooks'
import CustomPopover from '../../../CustomPopover';
import * as apiComment from "../../../../api/comments";
import * as apiReply from "../../../../api/reply";
import { IComment } from '../../../../models/comment';
import Reply from './Reply';
import InputComment from '../Input-comment';
import Reactions from '../../../Reactions';
import { useState as useCtxState } from '../../../../context/index'
import { State } from '../../../../context/reducer';
import { action_delete_comment, action_like_comment, action_reply_comment } from '../../../../Action/comment.action';
import CustomTooltip from '../../../CustomTooltip';
import RepliesList from './replies-list';

function Comment({ 
    comment,
    postId,
    ...rest
}: ICommentProps): ReactElement {

    const {
      _id,
      user,
      commentBody,
      likes,
      replies,
      created_at,
    } = comment

    const classes = useStyles()
    const [displayMoreIcon, setDisplayMoreIcon] = useState<boolean>(false)
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'options-popover'
    })
    const [Input, setInput] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(false)
    const [{ posts, user: currentUser }, dispatch]: [State, any] = useCtxState()

    const deleteComment = async () => {
        popupState.close()
        posts && dispatch(action_delete_comment(postId, comment, posts))
        await apiComment.delete_comment(postId, comment)
    }

    const onChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
  }  
  
    const onSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      
      const reply = {
        commentBody: Input,
          user: {
            userImg: currentUser?.picture.data.url,
            username: currentUser?.name
          }
        }
        
        _id && dispatch(action_reply_comment(postId, _id, reply, posts))
        
        const data = _id && await apiReply.add_new_reply(postId, _id, reply)
        
        setInput('')
        setShowInput(false)
        console.log(data)
  
  }  

  const like_comment = async () => {

   _id && dispatch(action_like_comment(postId, _id, posts))

    _id && await apiComment.like_comment(postId, _id)
  }

    return (
      <>
        <Flex
          align="center"
          className={classes.root}
          {...rest}
        >
          <Avatar src={user?.userImg} className={classes.Avatar} />
            <Flex direction="column" className={classes.commentBody} 
               onMouseOver={() => setDisplayMoreIcon(true)}
               onMouseLeave={() => setDisplayMoreIcon(false)}
            >
              <Flex direction="column" className={classes.commentBody_container}
                
              >
                  <h3 className={classes.userName}>{user?.username}</h3>
                  <p className={classes.text}>{commentBody}</p>

                  {/* Reactions */}

                  <div className={classes.reactions_container}>
                    <Reactions  numReactions={likes} />
                  </div>

                  {/* Delete Icon */}

                    <IconButton
                        {...bindTrigger(popupState)}
                        aria-label="options"
                        size="small"
                        className={`  ${
                            classes.MuiIconButton
                        }`}
                    >
                      <MoreIcon className={classes.moreIcon} />
                    </IconButton>

              </Flex>
            <Flex className={classes.like_reply_container}>
                <small className={classes.like_Reply_button} onClick={like_comment} >Like</small>
                <small className={classes.like_Reply_button} onClick={() => setShowInput(true)}>Reply</small>
                <CustomTooltip title={`${created_at && format(new Date(created_at), "PP")}`} >
                  <small className={`${classes.like_Reply_button} ${classes.created_at}`}>
                    {created_at && formatDistanceToNow(new Date(created_at))}
                  </small>
                </CustomTooltip>
            </Flex>
                <div className={classes.replies_container} >
                    { replies && _id && (
                          <RepliesList 
                          replies={replies}
                          postId={postId}
                          commentId={_id}
                          />
                      )
                    }
                </div>
                <div className={classes.input_comment_container}>
                  { showInput && <InputComment input={Input} postId={postId} onSubmit={onSubmit} onChange={onChange} />}
                </div>
            </Flex>


              {/* Popup to delete */}

            <CustomPopover popupState={popupState}>
              <MenuList onClick={deleteComment}>
                  <MenuItem>
                  <ListItemIcon>
                      <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delete comment" />
                  </MenuItem>
              </MenuList>
            </CustomPopover>
        </Flex>
      </>
    );
}

export default React.memo(Comment)