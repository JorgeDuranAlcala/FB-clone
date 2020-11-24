import { makeStyles, createStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => createStyles({
    paper: {
        padding: theme.spacing(0.5),
        borderRadius: 10,
        boxShadow: "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
    }
}))