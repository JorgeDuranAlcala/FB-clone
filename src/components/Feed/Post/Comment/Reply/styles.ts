import { makeStyles, createStyles, Theme, darken } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        margin: `${theme.spacing(1)} 0`,
    },
    userName: {
        marginBottom: theme.spacing(0.2),
        fontSize: 13,
        lineHeight: '16px',
        fontWeight: 600
    },
    text: {
        fontSize: 15,
        lineHeight: '16px',
        fontWeight: 400
    },
    commentBody: {
       position: 'relative',
       backgroundColor: grey['200'],
       padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
       borderRadius: 10,
    },
    reactions: {
        position: 'absolute',
        right: '-22px',
        bottom: '-2px',
        background: '#fff',
        fontSize: '13px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        borderRadius: '20px'
    },
    like_reply_container: {
        marginTop: theme.spacing(0.5)
    },
    like_Reply_button: {

        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(0.2),
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: 12,
        color: '#65676b',
        lineHeight: '12px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    created_at: {
        fontSize: 9,
        fontWeight: 400,
    },
      avatar: {
        alignSelf: 'flex-start'
      },
      MuiIconButton: {
        position: 'absolute',
        top: '20%',
        margin: '0 auto',
        right: 0,
        transform: 'translateX(55px)',
        fontSize: '13px',
      },
      deleteIcon: {
          marginRight: theme.spacing(0.8)
      },
      deletePlace: {
          cursor: 'pointer',
      }
}))