import React, { ReactElement, useState, useLayoutEffect , useRef } from "react";
import { IconButton, Paper, MenuList, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import useStyles from "./styles";
import { IProps } from "./types";
import MuiAvatar from "../../Avatar";
import Option from "../../Option";
import { CommentOutlined, ThumbUpAltOutlined, ReplyOutlined, MoreHoriz as MoreIcon, Delete as DeleteIcon } from "@material-ui/icons";
import Reactions from "../../Reactions";
import { update_post } from "../../../api/post";
import InputComment from "./Input-comment";
import CommentList from "./CommentList";
import Flex from "../../Flex";
import { usePopupState, bindTrigger  } from 'material-ui-popup-state/hooks'
import CustomPopover from "../../CustomPopover";
import * as api from '../../../api/post'
import * as commentsApi from '../../../api/comments'
import { useState as useCtxState } from '../../../context/index'
import { action_add_comment, action_like_post } from "../../../Action/post.action";
import { State } from "../../../context/reducer";

function Post({
   _id ,  
   userImg, 
   img_path, 
   desc, 
   num_comments, 
   likes,
   comments
  }: IProps): ReactElement {

  const classes = useStyles();
  const [triggerLike, setTriggerLike] = useState<boolean>(false)
  const ref = useRef<HTMLHeadingElement>(null);
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'options-popover'
})

const [{ posts, user }, dispatch]: [State, any] = useCtxState()
const [input, setInput] = useState<string>('')

  useLayoutEffect(() => {
      if(null !== ref.current && triggerLike) {
        ref.current.innerText = (likes + 1 ).toString()
      } 
  }, [likes, triggerLike])

  const like_event = async () => {
      //setTriggerLike(true)
      dispatch(action_like_post(_id, posts))
      await update_post(_id, { likes: likes + 1 })
  }
  
  const delete_post = async () => {
    const res = await api.delete_post(_id)
    popupState.close()
    console.log(res)
  }

  const onChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
}  

  const onSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const comment = {
        commentBody: input,
        user: {
            userImg: user?.userImg,
            username: user?.username
        }
    }

    dispatch(action_add_comment(_id, comment, posts))

    await commentsApi.add_new_comment(_id, comment)

}  


  return (
    <Paper className={classes.root}>
      <Flex align="center" justify="space-between" className={classes.header}>
        <MuiAvatar src={userImg} />
        <IconButton {...bindTrigger(popupState)}>
          <MoreIcon />
        </IconButton>
        <CustomPopover popupState={popupState} >
          <MenuList onClick={delete_post}>
              <MenuItem>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete comment" />
              </MenuItem>
            </MenuList>
        </CustomPopover>
      </Flex>
      <p className={classes.desc}>
         {desc}
      </p>
        {
            img_path && (
                <>
                  <img src={`http://localhost:3500/${img_path}`} className={classes.img_post} alt="post" />  
                </>
            )
        }
       <div>
       </div>
      <div className={classes.post_reacts_n_comments}>
        <Reactions size="medium" numReactions={likes} ref={ref} />
        <h4>Comments {comments.length}</h4>
      </div>
      <hr className={classes.hr} />
      <div className={classes.footer}>
        <Option className={classes.Options} Icon={ThumbUpAltOutlined} onClick={like_event}  text="Like" />
        <Option className={classes.Options} Icon={CommentOutlined} text="Comment" />
        <Option className={classes.Options} Icon={ReplyOutlined} text="Share" />
      </div>
      <CommentList postId={_id} comments={comments} />
      <InputComment input={input} onChange={onChange} onSubmit={onSubmit} postId={_id} />
    </Paper>
  );
}

export default Post;
