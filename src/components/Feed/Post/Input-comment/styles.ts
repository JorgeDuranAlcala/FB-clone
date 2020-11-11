import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme: Theme) => ({
    root: {
       
    },
    avatar: {
        flex: 0.1
    },
    input_container: {
        flex: 0.9,
        backgroundColor: grey['200'],
        borderRadius: 20,
        padding: '0 20px'
    },
    inputFile: {
        flex: 1,
        border: 'none',
        background: 'inherit',
        outline: 'none',
        /* fontSize: 15,
        fontWeight: 400,
        lineHeight: 20 */
    },
    form: {
        flex: 1
    },
    icons: {
        
    },
    icon: {
        margin: `0 ${theme.spacing(0.2)}`,
        opacity: 0.5
    }
}))