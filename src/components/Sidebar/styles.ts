import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        width: '20%',
        gridArea: 'sidebar',
        padding: '10px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    sidebar__row: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
    }
})