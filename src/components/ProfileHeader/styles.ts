import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => ({
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
        top: '40%',
        transform: 'translateY(70px)',
        margin: '0 auto',
        width: 120,
        height: 120,
        objectFit: 'contain',
        borderRadius: '50%',
    },
    userImg_img: {
        width:"100%",
        height: '100%',
        objectFit:"cover",
        objectPosition:"50% 50%",
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
        color: grey['800'],
        marginLeft: '3vmin',
        fontSize: '1.2rem'
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
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            backgroundColor: grey['400']
        }
    }
}))