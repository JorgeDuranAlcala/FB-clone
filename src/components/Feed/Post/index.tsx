import React, { ReactElement } from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";
import { Props } from "./types";
import Avatar from "../../Avatar";
import Option from "../../Option";
import { CommentOutlined, ThumbUpAltOutlined, ReplyOutlined } from "@material-ui/icons";
import Reactions from "../../Reactions";

function Post({ title, img }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Avatar />
      </div>
      <p className={classes.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          expedita ut corporis vitae quidem modi ullam delectus cum placeat
          voluptatum, veritatis quo vero possimus sed minus, eius ea unde quasi?
      </p>
        {
            img && (
                <>
                  <img src={img} className={classes.img_post} alt="post" />  
                </>
            )
        }
       <div>
       </div>
      <div className={classes.post_reacts_n_comments}>
        <Reactions numReactions={3} />
        <span>Comments 10</span>
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
