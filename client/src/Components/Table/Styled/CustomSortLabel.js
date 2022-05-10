import { TableSortLabel, styled } from '@mui/material'

const CustomSortLabel = styled(
  TableSortLabel,
  {}
)(({ theme, active }) => ({
  color: `${theme.palette.primary.main} !important `,
  '.MuiTableSortLabel-icon': {
    fill: `${
      active ? theme.palette.secondary.main : theme.palette.primary.dark
    } !important `,
  },
}))
export default CustomSortLabel