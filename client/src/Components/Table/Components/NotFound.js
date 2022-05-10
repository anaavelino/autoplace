import { TableRow, TableCell, Typography } from '@mui/material'
import SearchOffIcon from '@mui/icons-material/SearchOff'

export default function NotFound({ colspan }) {
  return (
    <TableRow>
      <TableCell
        colSpan={colspan}
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontWeight: (theme) => theme.typography.button,
            color: (theme) => theme.palette.text.secondary,
          }}
          variant="button"
        >
          <SearchOffIcon sx={{mx:'5px'}}/>
          Nada Encontrado
        </Typography>
      </TableCell>
    </TableRow>
  )
}
