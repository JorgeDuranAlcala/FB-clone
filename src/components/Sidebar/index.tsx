import React, { ReactElement } from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { ArrowDropDown } from "@material-ui/icons";
import styles from "./styles";
import SidebarRow from './Sidebar-row';

interface Props extends WithStyles<typeof styles> {
    
}

export default withStyles(styles)(
    
    function Sidebar({ classes }: Props): ReactElement {
        return (
            <div className={classes.root}>
                <SidebarRow className={classes.sidebar__row} title="Name" src="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow" />
                <SidebarRow className={classes.sidebar__row} title="Friends" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"  />
                <SidebarRow className={classes.sidebar__row} title="Groups" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"  />
                <SidebarRow className={classes.sidebar__row} title="Watch" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"  />
                <SidebarRow className={classes.sidebar__row} title="Events" src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"  />
                <SidebarRow className={classes.sidebar__row} title="Memories" src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"  />
                <SidebarRow className={classes.sidebar__row} title="Saved" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"  />
                <SidebarRow className={classes.sidebar__row} title="Pages" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"  />
                <SidebarRow className={classes.sidebar__row} title="Jobs" src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"  />
                <SidebarRow className={classes.sidebar__row} title="Messenger"  src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png"/>
                <SidebarRow className={classes.sidebar__row} title="See more" Icon={ArrowDropDown} />   
            </div>
        )
})
