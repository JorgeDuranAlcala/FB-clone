import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {

    },
    contacts: {
        gridArea: 'contacts',
        padding: '8px'
    },
    contacts__header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'var(--secondary-text)'
    },
    Icon: {
        marginTop: '8px'
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