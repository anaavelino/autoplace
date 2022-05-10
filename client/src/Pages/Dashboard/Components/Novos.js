import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'

export default function Novos({ data }) {
  return (
    <TableContainer
      sx={{
        background: (theme) => theme.palette.background.default,
        borderRadius: '10px',
      }}
    >
      <Table
        stickyHeader
        sx={{
          minWidth: '250px',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: '5px 10px' }} align="center">
              Veículo
            </TableCell>
            <TableCell sx={{ padding: '5px 10px' }} align="center">
              Marca
            </TableCell>
            <TableCell sx={{ padding: '5px 10px' }} align="center">
              Ano
            </TableCell>
            <TableCell sx={{ padding: '5px 10px' }} align="center">
              Data Aquisição
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.veiculo}</TableCell>
              <TableCell align="center">{row.marca}</TableCell>
              <TableCell align="center">{row.ano}</TableCell>
              <TableCell align="center">
                {new Date(row.created).toLocaleString('pt-br')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
Novos.defaultProps = {
  data: [],
}
