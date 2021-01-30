import React, { ReactElement } from 'react'
import { useState as useCTXstate } from '../../context'
import { State } from '../../context/reducer'
import useStyles from './styles'
import Flex from '../../components/Flex'
import Button from '../../components/Button'
import { Edit, FormatColorTextRounded } from '@material-ui/icons'
import ProfileHeader from '../../components/ProfileHeader'

export default function ProfilePage(): ReactElement {

    const [{ user }]: [State] = useCTXstate()
    const classes = useStyles()

 
    return (
        <div className={classes.root}>
            <ProfileHeader user={user} />
        </div>
    )
}
