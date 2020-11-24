import { Tooltip, withStyles, Theme } from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    tooltip: {
        fontSize: 13,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: 'rgba(255,255,255, 0.8)'
    }
}))(Tooltip)