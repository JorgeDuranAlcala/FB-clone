import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        fontSize: '13px',
        marginLeft: theme.spacing(0.2)
    }
}))