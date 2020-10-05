import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles( (theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    Profile__Photo: {
        width: "36px",
        height: "36px",
    },
    
    Profile__userName: {
        fontSize: "14px",
        fontWeight: "normal",
    },
}))