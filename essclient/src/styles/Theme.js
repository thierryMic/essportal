
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
                margin: '.5em 0',
            },
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
    }
})

export default Theme
