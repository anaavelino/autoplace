import { styled, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const CustomLink = styled(
  Link,
  {}
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
}))

export default function LinkButton({ to, variant, color, size, sx,children }) {
  return (
    <CustomLink to={to} sx={sx}>
      <Button size={size} color={color} variant={variant}>
        {children}
      </Button>
    </CustomLink>
  )
}
LinkButton.defaultProps = {
  to: '/',
  variant: 'contained',
  color: 'primary',
  size: 'large',
}
