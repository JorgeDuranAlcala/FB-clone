import React, { ReactElement } from 'react'
import { grey } from '@material-ui/core/colors'
import { Edit } from '@material-ui/icons'
import { IUser } from '../../models/user'
import Avatar from '../Avatar'
import Button from '../Button'
import Flex from '../Flex'
import useStyles from './styles'


interface Props {
    user?: IUser | null
}

function ProfileHeader({ user }: Props): ReactElement {

    const classes = useStyles()

    return (
        <div className={classes.header}  >
        {/* <img src={user?.userImg} alt="profile" /> */}
            <Flex style={{ background: grey['300'], position: 'relative' }} >
                <div className={classes.userImg} >
                    <img src={user?.userImg} className={classes.userImg_img}  alt="profile" />
                </div>
            </Flex>
            <Flex justify="center" align="center" className={classes.userInfo} >
                <h3 className={classes.userInfo__username}>
                    { user?.username }
                </h3>
            </Flex>
            <Flex justify="space-between" align="center"  className={classes.userOptions}>
                <Flex align="center" className={classes.userOptions_options}>
                    <h5 className={classes.options_links}>Posts</h5>
                    <h5 className={classes.options_links}>Friends</h5>
                    <h5 className={classes.options_links}>Photos</h5>
                </Flex>
                <Flex align="center" className={classes.userOptions_buttons}>
                    <Button className={classes.userOptions_buttons_btn} >
                        <Edit/>
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default ProfileHeader


