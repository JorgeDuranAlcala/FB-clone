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
/* import Comment from "./Comment"; */

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

  useLayoutEffect(() => {
      if(null !== ref.current && triggerLike) {
        ref.current.innerText = (likes + 1 ).toString()
      } 
  }, [likes, triggerLike])

  const like_event = async () => {
      setTriggerLike(true)
      await update_post(_id, { likes: likes + 1 })
  }
  
  const delete_post = async () => {
    const res = await api.delete_post(_id)
    popupState.close()
    console.log(res)
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
        <Reactions numReactions={likes} ref={ref} />
        <h4>Comments {comments.length}</h4>
      </div>
      <hr className={classes.hr} />
      <div className={classes.footer}>
        <Option className={classes.Options} Icon={ThumbUpAltOutlined} onClick={like_event}  text="Like" />
        <Option className={classes.Options} Icon={CommentOutlined} text="Comment" />
        <Option className={classes.Options} Icon={ReplyOutlined} text="Share" />
      </div>
      <CommentList comments={comments} />
      <InputComment postId={_id} />
    </Paper>
  );
}

export default Post;
