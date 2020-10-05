import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '20% auto auto',
        justifyContent: 'space-between',
        padding: '8px',
        boxShadow: ' 0px 0px 12px rgba(0,0,0,0.2)',
        gridGap: '8px',
        position: 'fixed',
        width: '100%',
        left: 0,
        top: 0,
        zIndex: 99,
        background: '#fff'
    },
    header__left: {
        display: "flex",
        alignItems: "center",
    },
    header__left__input: {
        flex: 1,
        display: 'flex',
        borderRadius: '20px',
        alignItems: 'center',
        background: 'var(--facebook-light-gray)',
        marginLeft: '10px',
        paddingLeft: '8px',
    },
    Input: {
        width: '50%',
        background: 'inherit',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        padding: '8px 16px 8px 7px',
    }
    ,
    search__icon: {
        fontSize: "13px",
    }
    ,
    facebook__Icon: {
        width: "50px",
        height: "50px",
        marginRight: "auto",
    }
    ,
    header__center: {
        display: "flex",
        alignItems: "center;",
    }
    ,
    icon: {
        objectFit: "contain",
       /*  background: #F0F2F5; */
       margin: "0 10px;",
       padding: "10px 40px 5px 40px;"
    }
    ,
    icon__active: {
        borderBottom: `3px solid ${theme.palette.primary.main}`
    }
    ,
    svg: {
        fill: theme.palette.primary.main
    }, 
    header__right: {
        display: "flex",
        alignItems: "center",
    },
    user: {
        display: "flex",
        alignItems: "center",
    },
    
    Profile__Photo: {
        width: "36px",
        height: "36px",
    },
    
    Profile__userName: {
        fontSize: "14px",
        fontWeight: "normal",
    },
    icons: {
        display: "flex",
        marginLeft: "10px",
    }
    ,
    icon_right:  {
        fontSize: "18px",
        padding: "10px 13px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.secondary.main,
        margin: "0 5px",
    },
})