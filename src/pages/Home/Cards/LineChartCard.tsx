import ReactApexCharts from 'react-apexcharts'
import { LineChartCardContainer } from '../styles'

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
}

const series = [
  { name: 'Lucros',
    data: [7000, 5000, 6000, 8000, 6000, 5000, 7600, 4800, 3000, 4000, 8000, 6000]
  },
  {
    name: 'Despesas',
    data: [1000, 2000, 3000, 4000, 2000, 4000, 3600, 2800, 3000, 2000, 3000, 5000]
  }
]

export function LineChartCard() {
  return (
    <LineChartCardContainer>
      <ReactApexCharts
      options={options}
      series={series}
      type='area'
      width='100%'
      height='100%'
      />
    </LineChartCardContainer>
  )
}
