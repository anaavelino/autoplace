import { styled } from '@mui/material'
import gradient from 'Assets/gradient.svg'

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
  overflow: 'auto',
  background: `url(${gradient})`,
  backgroundSize: 'cover',
}))

export default Background
