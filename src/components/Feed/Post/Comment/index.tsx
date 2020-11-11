import React, { ReactElement, useState } from 'react'
import Flex from '../../../Flex'
import Avatar from "../../../Avatar";
import useStyles from './styles'
import ICommentProps from './types';
import { MoreHoriz as MoreIcon, Delete as DeleteIcon  } from '@material-ui/icons';
import { formatDistanceToNow } from "date-fns";
import { IconButton, MenuList, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { usePopupState, bindTrigger  } from 'material-ui-popup-state/hooks'
import CustomPopover from '../../../CustomPopover';


export default function Comment({ 
    user,  
    commentBody,
    likes,
    replies,
    created_at,
    ...rest
}: ICommentProps): ReactElement {
    
    const classes = useStyles()
    const [displayMoreIcon, setDisplayMoreIcon] = useState<boolean>(false)
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'options-popover'
    })

    return (
      <>
        <Flex
          align="center"
          className={classes.root}
          onMouseOver={() => setDisplayMoreIcon(true)}
          onMouseLeave={() => setDisplayMoreIcon(false)}
          {...rest}
        >
          <Avatar src={user?.userImg} className={classes.Avatar} />
          <Flex direction="column" className={classes.commentBody}>
            <Flex direction="column" className={classes.commentBody_container}>
              <h3 className={classes.userName}>{user?.username}</h3>
              <p className={classes.text}>{commentBody}</p>
            </Flex>
            <Flex className={classes.like_reply_container}>
              <small className={classes.like_Reply_button}>Like</small>
              <small className={classes.like_Reply_button}>Reply</small>
              <small
                className={`${classes.like_Reply_button} ${classes.created_at}`}
              >
                {" "}
                {created_at && formatDistanceToNow(new Date(created_at))}{" "}
              </small>
            </Flex>
          </Flex>
          <IconButton
            {...bindTrigger(popupState)}
            aria-label="options"
            size="small"
            className={`${!displayMoreIcon && classes.displayNone} ${
              classes.MuiIconButton
            }`}
          >
            <MoreIcon className={classes.moreIcon} />
          </IconButton>
          <CustomPopover popupState={popupState}>
            <MenuList onClick={popupState.close}>
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
