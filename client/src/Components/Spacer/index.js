import { styled } from '@mui/material/styles'

const CustomDiv = styled(
  'div',
  {}
)(({ theme }) => ({
  display: 'flex',
}))

export default function Spacer({ sx }) {
  return <CustomDiv sx={sx} />
}

Spacer.defaultProps = {
  sx: { width: '1rem', height: '1rem', flex: '0 0 0' },
}
