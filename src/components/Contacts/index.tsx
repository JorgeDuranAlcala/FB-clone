import React, { ReactElement } from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { 
    Search as SearchIcon,
} from "@material-ui/icons";
import styles from "./styles";
import ContactsRow from './Contacts-row';

interface Props extends WithStyles<typeof styles> {
    
}

export default withStyles(styles)(
    
    function Contacts({ classes }: Props): ReactElement {
        return (
            <div className={classes.contacts}>
                <h4>Contactos</h4>
                <div className={classes.contacts__header}>
                    <SearchIcon className={classes.Icon} />
                    <i className={`fas fa-ellipsis-h ${classes.Icon} `}></i>
                </div>
                <div className={classes.friends__list}>
                    <ContactsRow ContactName="FistName LastName"  className={classes.friends__list__row} userImage="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"  />
                    <ContactsRow ContactName="FistName LastName"  className={classes.friends__list__row} userImage="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"  />
                    <ContactsRow ContactName="FistName LastName"  className={classes.friends__list__row} userImage="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"  />
                    <ContactsRow ContactName="FistName LastName"  className={classes.friends__list__row} userImage="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"  />
                    <ContactsRow ContactName="FistName LastName"  className={classes.friends__list__row} userImage="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Blue01&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Yellow"  />
                </div>
            </div>
        )
})
