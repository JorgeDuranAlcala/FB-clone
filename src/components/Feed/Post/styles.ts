import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";


export default makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.8rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        borderRadius: '10px'
    },
    header: {
        display: 'flex'
    },
    imgProfile: {
        flex: 0.1,
        width: 40,
        height: 40,
        objectFit: 'contain'
    },
    img_post: {
        maxWidth: 500,
        objectFit: 'contain'
    },
    desc: {
        maxWidth: '30rem',
        padding: '0.8rem 0.2rem'
    },
    footer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    hr: {
        border: 'none',
        marginTop: '10px',
        padding: ' 0 10px',
        borderBottom: `1px solid ${grey['300']}`
    },
    post_reacts_n_comments: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.7rem'
    },
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
}))