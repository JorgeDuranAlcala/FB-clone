import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        gridArea: 'content',
        display: 'grid',
        justifyContent: 'center',
        paddingTop: '20px' ,
    },
    stories: {
        display: 'grid',
        color: '#fff',
        fontSize: '1.2rem',
        width: 'max-content',
        height: 'auto',
        gridGap: '8px',
        gridTemplateRows: '1fr',
        gridTemplateColumns:'repeat(5, 1fr)'
    },
    story: {
        width: '110px',
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
})