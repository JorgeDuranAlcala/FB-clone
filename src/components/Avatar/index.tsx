import React from 'react'
/* import useStyles from './styles' */
import { Avatar as MuiAvatar } from "@material-ui/core";
import Flex from '../Flex';

interface Props extends React.HTMLProps<HTMLDivElement> {
    fontSize?: string
    shape?: 'circle'
    | 'rounded'
    | 'square';
    name?: string;
}

const Avatar = ({ 
    fontSize = '12px', 
    children, 
    name,
    shape = 'circle' ,
    src = "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow",
    ...rest
}: Props) => {


    return (
            <Flex align="center" {...rest} >
                <MuiAvatar
                src={src}
                variant={shape}
                />
               <h6>{name}</h6>
            </Flex>   
    )
}

export default Avatar
