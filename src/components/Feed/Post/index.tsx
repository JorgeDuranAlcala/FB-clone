import React, { ReactElement } from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";
import { IProps } from "./types";
import Avatar from "../../Avatar";
import Option from "../../Option";
import { CommentOutlined, ThumbUpAltOutlined, ReplyOutlined } from "@material-ui/icons";
import Reactions from "../../Reactions";

function Post({ title, img_path, desc, num_comments, likes }: IProps): ReactElement {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Avatar />
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
        <Option Icon={ThumbUpAltOutlined} text="Like" />
        <Option Icon={CommentOutlined} text="Comment" />
        <Option Icon={ReplyOutlined} text="Share" />
      </div>
    </Paper>
  );
}

export default Post;
