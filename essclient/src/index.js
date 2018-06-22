// react
import React from 'react'
import ReactDOM from 'react-dom'

// Mobx
import { Provider } from 'mobx-react'
import RootStore from './stores/RootStore'


// react-router
import { BrowserRouter } from 'react-router-dom'

// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Theme from './styles/Theme'

// application
import App from './components/main/App'



ReactDOM.render(<BrowserRouter>
                    <Provider store={new RootStore()}>
                        <MuiThemeProvider theme={Theme}>
                            <CssBaseline/>
                            <App />
                        </MuiThemeProvider>
                    </Provider>
                </BrowserRouter>,
                document.getElementById('root')
            )

