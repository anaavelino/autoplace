import { styled } from '@mui/material'

const Sidebar = styled(
  'div',
  {}
)(({ theme, show }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'start',
  position: 'fixed',
  top: 0,
  left: 0,
  transitionDuration: '300ms',
  
  //   boxShadow: theme.shadows[4],
  //   borderRight: `1px solid ${theme.palette.secondary.light}`,
  background: theme.palette.background.paper,
  minHeight: ' calc( 100% - 60px ) ',
  [theme.breakpoints.up('sm')]: {
    paddingTop: '60px',
    zIndex: theme.zIndex.appBar - 1,
    transform: `${show ? 'translateX(0)' : 'translateX(-100%)'}`,
    width: '14rem',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '20px',
    zIndex: theme.zIndex.drawer,
    transform: `${show ? 'translateX(0)' : 'translateX(-100%)'}`,
    width: '100vw',
    height: '100%',
  },
}))

export default Sidebar
