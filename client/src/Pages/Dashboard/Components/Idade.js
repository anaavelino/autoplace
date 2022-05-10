import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

export default function Idade({ data }) {
  const [parsed, setParsed] = useState(defaultData)

  useEffect(() => {
    setParsed({
      labels: data.map((item) => item.label),
      datasets: [
        {
          label: 'Idade do Veículo',
          data: data.map((item) => item.value),
          backgroundColor: '#4B4A67',
          borderColor: '#343348',
          borderWidth: 3,
        },
      ],
    })
  }, [data])

  return <Line options={options} data={parsed} />
}
