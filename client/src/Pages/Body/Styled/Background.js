import { styled } from '@mui/material'

const Background = styled(
  'div',
  {}
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'stretch',
  position: 'relative',
  minWidth: '100vw',
  maxWidth: '100vw',
  minHeight: '100vh',
  maxHeight: '100vh',
  overflow:'auto',
  background: ` radial-gradient(circle,
      ${theme.palette.background.default} 0%,
      ${theme.palette.background.default} 50%,
      ${theme.palette.background.foreground} 100%)`,

}))

export default Background
