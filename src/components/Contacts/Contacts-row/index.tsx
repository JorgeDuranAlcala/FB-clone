import React, { ReactElement } from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { 
    Search as SearchIcon,
} from "@material-ui/icons";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    className?: string;
    ContactName: string;
    userImage: string;
}

export default withStyles(styles)(
    
    function ContactRow({ classes, className, userImage, ContactName }: Props): ReactElement {
        return (
            <div className={className}>
               <img className={classes.image} src={userImage} alt="ContactProfileImage"/>
               <h5 className={classes.contactName}>{ ContactName }</h5>
            </div>
        )
})
