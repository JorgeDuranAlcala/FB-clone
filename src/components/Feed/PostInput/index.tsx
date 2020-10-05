import React, { ReactElement } from 'react'
import { WithStyles, withStyles, Paper } from '@material-ui/core'
import { green, red, yellow } from '@material-ui/core/colors'
import styles from "./styles";
import { VideoCall, PhotoLibrary } from '@material-ui/icons';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

interface Props extends WithStyles<typeof styles> {
    
}

export default withStyles(styles)(
    
    function PostInput({ classes }: Props): ReactElement {
        return (
               <Paper className={classes.root}>
                   <div className={classes.Input__container}>
                        <img className={classes.imgProfile} alt="avatar" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow' />
                        <input className={classes.Input} type="text" placeholder="What's on your mind ?"/>
                   </div>
                   <hr className={classes.hr} />
                    <div className={classes.Options__container}>
                        <div className={classes.Options}>
                            <VideoCall className={classes.Options__Icon} style={{color: red['500']}}/>
                            <h5 className={classes.Options__text}>Live Video</h5>
                        </div>
                        <div className={classes.Options}>
                            <PhotoLibrary className={classes.Options__Icon} style={{color: green['500']}} />
                            <h5 className={classes.Options__text}>Photo/Video</h5>
                        </div>
                        <div className={classes.Options}>
                            <EmojiEmotionsOutlinedIcon className={classes.Options__Icon} style={{color: yellow['700']}}/>
                            <h5 className={classes.Options__text}>Feeling/Activity</h5>
                        </div>
                    </div>
               </Paper>
        )
})
