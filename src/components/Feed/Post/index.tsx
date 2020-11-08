import React, { ReactElement, useState, useLayoutEffect, memo , useRef } from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";
import { IProps } from "./types";
import MuiAvatar from "../../Avatar";
import Option from "../../Option";
import { CommentOutlined, ThumbUpAltOutlined, ReplyOutlined } from "@material-ui/icons";
import Reactions from "../../Reactions";
import { update_post } from "../../../api/post";

function Post({ _id ,  userImg, img_path, desc, num_comments, likes }: IProps): ReactElement {
  const classes = useStyles();
  /* const [num_likes, setNumLikes] = useState<number>(likes) */
  const [triggerLike, setTriggerLike] = useState<boolean>(false)
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
      if(null !== ref.current && triggerLike) {
        ref.current.innerText = (likes + 1 ).toString()
      } 
  }, [likes, triggerLike])

  const like_event = async () => {
      setTriggerLike(true)
      await update_post(_id, { likes: likes + 1 })
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <MuiAvatar src={userImg} />
      </div>
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
        <span>Comments {num_comments}</span>
      </div>
      <hr className={classes.hr} />
      <div className={classes.footer}>
        <Option className={classes.Options} Icon={ThumbUpAltOutlined} onClick={like_event}  text="Like" />
        <Option className={classes.Options} Icon={CommentOutlined} text="Comment" />
        <Option className={classes.Options} Icon={ReplyOutlined} text="Share" />
      </div>
    </Paper>
  );
}

export default Post;
