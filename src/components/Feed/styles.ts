import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        gridArea: 'content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px' ,
    },
    stories: {
        display: 'flex',
        color: '#fff',
        fontSize: '1.2rem',
        width: 'max-content',
        gridGap: '8px',
        height: 'auto',
        maxHeight: '200px', 
        gridTemplateRows: '1fr',
        gridTemplateColumns:'repeat(5, 1fr)',
        
    },
    story: {
        minWidth: 80,
        maxWidth: '110px',
        height:' 200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        padding: '12px',
        background: 'url("https://picsum.photos/400/300")',
        backgroundSize: 'cover',
        cursor: 'pointer',
    },
    feed_container: {
        
    }
})