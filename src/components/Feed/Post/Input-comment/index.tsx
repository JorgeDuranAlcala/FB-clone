import { PhotoOutlined, EmojiEmotionsOutlined, GifOutlined } from '@material-ui/icons'
import React, { ReactElement, Fragment, ChangeEvent, useState, FormEvent } from 'react'
import * as ctx from '../../../../context'
import { State } from '../../../../context/reducer'
import Avatar from '../../../Avatar'
import Flex from '../../../Flex'
import * as api from "../../../../api/post";

import useStyles from './styles'

interface Props {
    postId: string
}

export default function InputComment({
    postId
}: Props): ReactElement {

   const [{user}]: [State] = ctx.useState()
   const classes = useStyles()
   const [input, setInput] = useState<string>('')

  const onChange =  (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }  

  const onSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await api.add_new_comment(postId, {
            commentBody: input,
            user: {
                userImg: user?.picture.data.url,
                username: user?.name
            }
        })

    }  
   

    return (
        <Fragment>
            <Flex className={classes.root}>
                <Avatar className={classes.avatar} src={user?.picture.data.url} />
                <Flex align="center"  className={classes.input_container}>
                    <form onSubmit={onSubmit} className={classes.form} >
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
