import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {

    },
    image: {
        width: '40px',
        height: '40px',
        objectFit: 'contain',
        borderRadius: '50%',
        border: `4px solid ${theme.palette.primary.main}`
    }
})