import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        minWidth: '350px',
        display: 'flex',
        justifyContent: 'center'
    },
    header: {
        display: 'grid',
        gridTemplateRows: '60% 20% 20%',
        marginTop: '70px',
        minWidth: '350px',
        width: '70%',
        //maxWidth: '80vw',
        height: '80vh',
        borderRadius: '10px'
    },
    userImg: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        margin: '0 auto',
        width: 250,
        height: 250,
        objectFit: 'cover',
        borderRadius: '50%'
    },
    userInfo: {

    },
    userInfo__username: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    userOptions: {},
    userOptions_options: {},
    options_links: {
        color: grey['700'],
        marginLeft: '3vmin'
    },
    userOptions_buttons: {},
    userOptions_buttons_btn: {
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        padding: theme.spacing(1),
        borderRadius: '10px',
        backgroundColor: grey['300'],
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: grey['400']
        }
    }
}))