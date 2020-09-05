import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {

    },
    title: {
        fontSize:'15px',
        fontWeight: 'normal'
    },
    Image: {
        width: '28px',
        height: '28px',
        marginRight: '8px'
    },
    sidebar__row__icon: {
        padding: '4px 8px',
        borderRadius: '50%',
        marginRight: '8px',
        background: 'var(--facebook-light-gray)'
    }
})