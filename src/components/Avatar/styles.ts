import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles( (theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },    
    Profile__userName: {
        fontSize: "15px",
        fontWeight: 600,
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(0.4)
    },
}))