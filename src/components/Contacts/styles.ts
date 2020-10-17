import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {

    },
    contacts: {
        gridArea: 'contacts',
        padding: '8px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    contacts__header: {
        color: 'var(--secondary-text)'
    },
    Icon: {
        marginTop: '0.5rem',
        marginLeft: '0.5rem'
    },
    friends__list: {
        marginTop: '10px',
    },
    friends__list__row: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px',
    },
})