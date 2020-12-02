import { PhotoOutlined, EmojiEmotionsOutlined, GifOutlined } from '@material-ui/icons'
import React, { ReactElement, Fragment } from 'react'
import * as ctx from '../../../../context'
import { State } from '../../../../context/reducer'
import Avatar from '../../../Avatar'
import Flex from '../../../Flex'
/* import * as api from "../../../../api/comments"; */

import useStyles from './styles'
/* import { action_add_comment } from '../../../../Action/post.action' */

interface Props {
    postId: string;
    input: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputComment({
    postId,
    onSubmit,
    onChange,
    input
}: Props): ReactElement {

   const [{user}]: [State, any] = ctx.useState()
   const classes = useStyles()


    return (
        <Fragment>
            <Flex className={classes.root}>
                <Avatar className={classes.avatar} src={user?.userImg} />
                <Flex align="center"  className={classes.input_container}>
                    <form onSubmit={onSubmit && onSubmit} className={classes.form} >
                        <input placeholder="Write a comment" value={input} onChange={onChange} className={classes.inputFile} type="text"/>
                        <button hidden type="submit"></button>
                    </form>
                    <div className={classes.icons}>
                        <EmojiEmotionsOutlined className={classes.icon}/>
                        <GifOutlined className={classes.icon}/>
                        <PhotoOutlined className={classes.icon}/>
                    </div>
                </Flex>
            </Flex>
        </Fragment>
    )
}
