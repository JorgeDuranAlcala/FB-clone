import { createStyles, darken, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 25,
      padding: "10px",
      maxHeight: "20rem",
      borderRadius: "10px",
    },
    imgProfile: {
      flex: 0.1,
      width: 40,
      height: 40,
      objectFit: "contain",
    },
    Input: {
      flex: 0.9,
      padding: "10px",
      borderRadius: "20px",
      backgroundColor: grey["200"],
      border: "none",
      outline: "none",
      fontSize: "16px",
    },
    Input__container: {
      display: "flex",
      alignItems: "center",
    },
    Options__container: {
      display: "flex",
    },
    Options: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      padding: "5px 20px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: grey[200],
      },
    },
    Options__Icon: {
      fontSize: "30px",
    },
    Options__text: {
      fontWeight: "normal",
      marginLeft: 5,
      fontSize: "15px",
    },
    hr: {
      border: "none",
      marginTop: "10px",
      padding: " 0 10px",
      borderBottom: `1px solid ${grey["300"]}`,
    },
    container: {
      display: "grid",
      placeItems: "center",
      width: "100%",
      height: "100%",
      zIndex: 2,
    },
    paper: {
      minWidth: "30rem",
      padding: "0.5rem 1rem",
    },
    body_whoCanWatchIt_section: {
      padding: "1rem 0",
    },
    body_center_section: {
      overflowY: "auto",
      maxHeight: "300px",
    },
    textField: {
      color: grey["400"],
      fontSize: "1.5rem",
      minHeight: "10rem",
      border: "none",
      outline: "none",
      "&::placeholder": {
        fontSize: "1.5rem",
        color: grey["400"],
      },
    },
    preview_img: {
      objectFit: "contain",
      width: "100%",
      maxWidth: "30rem",
      '&:hover': {
        filter: 'brightness(92%)',
      }
    },
    body_header: {
      display: "grid",
      gridTemplateColumns: "92% auto",
    },
    body_header_title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cancel_icon: {
      fontSize: "13px",
      padding: "0.4rem 0.3rem",
      cursor: "pointer",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.secondary.main,
      "&:hover": {
        background: darken(theme.palette.secondary.main, 0.1),
      },
    },
    modal_body_options: {},
    modal_body_options_icon: {
      fontSize: "2rem",
      marginLeft: "0.5rem",
      cursor: "pointer",
    },
    AddPost_container: {
      padding: "0.8rem",
      margin: "1rem 0",
      borderRadius: "10px",
      border: `1px solid ${grey["400"]}`,
    },
  })
);
