import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1877F2'
      },
      secondary: {
        main: grey['300']
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 899,
        lg: 1280,
        xl: 1920
      }
    }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
