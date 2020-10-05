import React, { ReactElement } from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import styles from "./styles";
import Story from './Story';
import PostInput from './PostInput';
import Post from './Post';

interface Props extends WithStyles<typeof styles> {
    
}

export default withStyles(styles)(
    
    function Feed({ classes }: Props): ReactElement {
        return (
            <div className={classes.root}>
                <div className={classes.stories}>
                    <Story userName="Jorge Duran" className={classes.story} userImage='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow'  />
                    <Story userName="Jorge Duran" className={classes.story} userImage='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow'  />
                    <Story userName="Jorge Duran" className={classes.story} userImage='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow'  />
                    <Story userName="Jorge Duran" className={classes.story} userImage='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow'  />
                    <Story userName="Jorge Duran" className={classes.story} userImage='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow'  />
                </div>
                <div className={classes.feed_container}>
                    <PostInput/>
                    <Post title="titulo de prueba" img="https://picsum.photos/800/300" />
                    <Post title="titulo de prueba" img="https://picsum.photos/800/500" />
                </div>
            </div>
        )
})
