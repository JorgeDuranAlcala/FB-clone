import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => ({
    Options: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        padding: '5px 20px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: grey[200]
        }
    },
    Options__Icon: {
       fontSize: '1.7rem'
    },
    Options__text: {
        marginLeft: 5,
        fontSize: '15px'
    },
}))