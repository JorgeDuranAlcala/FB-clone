import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
       margin: `${theme.spacing(1.5)} 0`
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
    like_Reply_button: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(0.2),
        cursor: 'pointer'
    },
    commentBody: {
        maxWidth: '80%',
    },
    userName: {
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