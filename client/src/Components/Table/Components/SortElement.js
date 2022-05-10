import { useEffect, useState } from 'react'

function sorter({ rows, sort }) {
  let sorted = [...rows]
  if (sort.property) {
    switch (sort.order) {
      case 'asc':
        return sorted.sort((a, b) =>
          a[sort.property] < b[sort.property] ? -1 : 1
        )
      case 'desc':
        return sorted.sort((a, b) =>
          a[sort.property] > b[sort.property] ? -1 : 1
        )
      default:
        return sorted
    }
  }
  return sorted
}
export default function SortElement({ rows, columns, sort, children }) {
  const [sortedRows, setSort] = useState([])

  useEffect(() => {
    setSort(sorter({ rows, sort }))
  }, [])

  useEffect(() => {
    setSort(sorter({ rows, sort }))
  }, [sort, rows])

  return children(sortedRows)
}
