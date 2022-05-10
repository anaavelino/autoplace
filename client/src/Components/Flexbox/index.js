import { styled } from '@mui/material/styles'

const CustomDiv = styled(
  'div',
  {}
)(({ direction, justify, align, flex, padding, margin, wrap }) => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  flexWrap: wrap,
  flex,
  padding,
  margin,
}))

export default function FlexBox({
  children,
  direction,
  justify,
  align,
  flex,
  padding,
  margin,
  wrap,
  sx,
}) {
  return (
    <CustomDiv
      sx={sx}
      direction={direction}
      justify={justify}
      align={align}
      flex={flex}
      padding={padding}
      margin={margin}
      wrap={wrap}
    >
      {children}
    </CustomDiv>
  )
}

FlexBox.defaultProps = {
  sx: '',
  direction: 'row',
  justify: 'start',
  align: 'center',
  flex: '1 1 auto',
  padding: '',
  margin: '',
  wrap: '',
}
