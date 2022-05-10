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

export default function Marcas({ data }) {
  const parsed = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: '# of Votes',
        data: data.map((item) => item.value),

        borderColor: '1',
        borderWidth: 1,
      },
    ],
  }
  return <Pie options={options} data={parsed} />
}
