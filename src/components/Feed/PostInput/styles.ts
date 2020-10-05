import { createStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default (theme: Theme) => createStyles({
    root: {
        marginTop: 25,
        padding: '10px',
        maxHeight: '20rem',
        borderRadius: '10px'
    },
    imgProfile: {
        flex: 0.1,
        width: 40,
        height: 40,
        objectFit: 'contain'
    },
    Input: {
        flex: 0.9,
        padding: '10px',
        borderRadius: '20px',
        backgroundColor: grey['200'],
        border: 'none',
        outline: 'none',
        fontSize: '16px'
    },
    Input__container: {
        display: 'flex',
        alignItems: 'center',
      },
    Options__container: {
        display: 'flex',
    },
    Options: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        padding: '5px 20px',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: grey[200]
        }
    },
    Options__Icon: {
       fontSize: '30px'
    },
    Options__text: {
        fontWeight: 'normal',
        marginLeft: 5,
        fontSize: '15px'
    },
    hr: {
        border: 'none',
        marginTop: '10px',
        padding: ' 0 10px',
        borderBottom: `1px solid ${grey['300']}`
    }
})