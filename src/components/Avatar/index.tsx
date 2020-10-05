import React from 'react'
import useStyles from './styles'

interface Props {
    
}

const Avatar = ({}: Props) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.Profile__Photo} alt="avatar" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow' />
            <h4 className={classes.Profile__userName}>Name</h4>
        </div>
    )
}

export default Avatar
