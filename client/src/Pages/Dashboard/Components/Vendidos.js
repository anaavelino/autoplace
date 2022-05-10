import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        font: {
          family: "'Radio Canada'",
          size: 14,
        },
      },
    },
  },
}

const defaultData = {
  labels: [],
  datasets: [
    {
      label: 'Idade do Veículo',
      data: [],
      backgroundColor: '#4B4A67',
      borderColor: 1,
      borderWidth: 1,
    },
  ],
}
export default function Vendidos({ data }) {
  const [parsed, setParsed] = useState(defaultData)
  useEffect(() => {
    setParsed({
      labels: data.map((item) => item.label),
      datasets: [
        {
          label: '% de Veiculos Vendidos',
          data: data.map((item) => item.value),
          backgroundColor: ['#4B4A67', '#FF5A5F'],
          borderColor: ['#f0f0f0', '#f0f0f0'],
          borderWidth: 3,
        },
      ],
    })
  }, [data])

  return <Pie options={options} data={parsed} />
}
