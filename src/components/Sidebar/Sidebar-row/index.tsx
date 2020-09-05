import React, { ReactElement } from 'react'
import { WithStyles, withStyles, SnackbarContent } from '@material-ui/core'
import styles from "./styles";
import { Title } from '@material-ui/icons';

interface Props extends WithStyles<typeof styles> {
    className?: string;
    title: string;
    Icon?: any;
    src?: string;
}

export default withStyles(styles)(
    
    function SidebarRow({ classes, title, src, Icon, className }: Props): ReactElement {
        return (
            <div className={className}>
                {
                    Icon 
                        ? (<Icon className={classes.Image} />) 
                        : (<img className={classes.Image} src={src&&src} alt="SidebarIcon"/>)
                }
                 <h5 className={classes.title} >{title}</h5>
            </div>
        )
})
