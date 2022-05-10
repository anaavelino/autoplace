import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

const theme = createTheme({
  palette: {
    background: {
      paper: '#f0f0f0',
      default: '#e6e6e8',
      foreground: '#BCBCC5',
    },
    primary: { main: '#4B4A67', light: '#6f6e85', dark: '#343348' },
    secondary: { main: '#FF5A5F', light: '#ff7b7f', dark: '#b23e42' },
    info: colors.lightBlue,
    warning: colors.amber,
    error: colors.red,
    success: colors.green,
    text: {
      icon: 'rgba(0,0,0,0.5)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: ['"Radio Canada"'].join(','),
  },
})

export default function MuiTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
