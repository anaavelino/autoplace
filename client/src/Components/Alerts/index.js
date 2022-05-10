import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function AlertType(desc, msg) {

  switch (desc) {
    case 'success':
      return <Alert severity="success">{msg}</Alert>
    case 'error':
      return <Alert severity="error">{msg}</Alert>

    default:
      return 'info'
  }
}
export default function Alerts({ type, msg,open }) {

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
    >
      {AlertType(type, msg)}
    </Snackbar>
  )
}
