import { styled } from '@mui/material'

const AppBar = styled(
  'div',
  {}
)(({ theme }) => ({
  showTheme: console.log(theme),
  zIndex: theme.zIndex.appBar,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'start',
  position: 'sticky',
  top: 0,
  left: 0,
  background: theme.palette.primary.main,
  transitionDuration: '300ms',
  boxShadow: `inset 0px 10px 30px 0px rgba(0,0,0,0.2)`,
}))

export default AppBar
