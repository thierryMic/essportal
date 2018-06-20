
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#ba000d'
        }
    },
    typography: {
        fontSize: 12,
    },
    overrides: {
        MuiFormControl: {
            root: {
                marginBottom: '1em',
                padding: 0
            },
        },
    }
})

export default Theme
