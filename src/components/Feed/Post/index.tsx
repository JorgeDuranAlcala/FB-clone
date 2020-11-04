import React, { ReactElement } from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";
import { IProps } from "./types";
import MuiAvatar from "../../Avatar";
import Option from "../../Option";
import { CommentOutlined, ThumbUpAltOutlined, ReplyOutlined } from "@material-ui/icons";
import Reactions from "../../Reactions";

function Post({ userImg , img_path, desc, num_comments, likes }: IProps): ReactElement {
  const classes = useStyles();

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
        <Reactions numReactions={likes} />
        <span>Comments {num_comments}</span>
      </div>
      <hr className={classes.hr} />
      <div className={classes.footer}>
        <Option className={classes.Options} Icon={ThumbUpAltOutlined} text="Like" />
        <Option className={classes.Options} Icon={CommentOutlined} text="Comment" />
        <Option className={classes.Options} Icon={ReplyOutlined} text="Share" />
      </div>
    </Paper>
  );
}

export default Post;
