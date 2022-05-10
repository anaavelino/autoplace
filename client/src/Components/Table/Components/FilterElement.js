import { useEffect, useState } from 'react'

function filter({ columns, rows, filterStatement }) {
  const inputs = []

  Object.keys(filterStatement).forEach((property) => {
    inputs.push({
      property,
      value: filterStatement[property],
    })
  })

  let filteredData = [...rows]

  inputs.forEach((input) => {
    columns.forEach((column) => {
      if (input.property === column.id) {
        filteredData = filteredData.filter((row) => {
          console.log(row)
          if (
            row[input.property]
              .toString()
              .toLowerCase()
              .includes(input.value.toString().toLowerCase())
          ) {
            return true
          }
          return false
        })
      }
    })
  })
  return filteredData
}

export default function FilterElement({
  children,
  rows,
  columns,
  filterStatement,
}) {
  const [filteredRows, setFiltered] = useState([])

  useEffect(() => {
    setFiltered(filter({ rows, columns, filterStatement }))
  }, [])

  useEffect(() => {
    setFiltered(filter({ rows, columns, filterStatement }))
  }, [filterStatement, rows])

  return children(filteredRows)
}
