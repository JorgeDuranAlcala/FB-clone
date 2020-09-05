import React, { ReactElement } from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    className?: string;
    userName: string;
    userImage: string;
}

export default withStyles(styles)(
    
    function Story({ userImage, userName, className, classes }: Props): ReactElement {
    return (
        <div className={className}>
            <img className={classes.image}  src={userImage} alt="userProfileAvatar"/>
            <h6>{ userName }</h6>
        </div>
    )
})
