import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
       margin: `${theme.spacing(1.5)} 0`,
    },
    paper: {
        padding: theme.spacing(0.5),
        borderRadius: 10,
        boxShadow: "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
    },
    Avatar: {
        flex: 0.1,
        alignSelf: 'flex-start'
    },
    commentBody_container: {
        width: '100%',
        backgroundColor: grey['200'],
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
        borderRadius: 10
    },
    like_reply_container: {
        marginTop: theme.spacing(0.5)
    },
    like_Reply_button: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(0.2),
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '12px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    created_at: {
        fontWeight: 400,
    },
    commentBody: {
        maxWidth: '80%',
    },
    displayNone: {
        display: 'none',
    },
    MuiIconButton: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    moreIcon: {
        color: '#1c1e21'
    },
    userName: {
        marginBottom: theme.spacing(0.2),
        fontSize: 13,
        lineHeight: '16px',
        fontWeight: 600
    },
    text: {
        fontSize: 15,
        lineHeight: '16px',
        fontWeight: 400
    }
}))