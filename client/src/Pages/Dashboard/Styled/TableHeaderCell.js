import { TableCell, styled } from '@mui/material'

const TableHeaderCell = styled(
  TableCell,
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '5px 5px',
}))

export default TableHeaderCell
