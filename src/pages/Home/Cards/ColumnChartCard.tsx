import ReactApexCharts from 'react-apexcharts'
import { ColumnChartCardContainer } from '../styles'

const options = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    theme: 'dark'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: [
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabádo',
      'Domingo'
    ],
    labels: {
      style: {
        colors: '#C8CFCA',
        fontSize: '12px'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#C8CFCA',
        fontSize: '12px'
      }
    }
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: '34px'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: []
    },
    colors: ['#2CD9FF', '#582CFF']
  },
  colors: ['#2CD9FF', '#582CFF']
}

const series = [
  { name: 'Lucros', data: [7000, 0, 6000, 8000, 0, 5000, 7600] },
  {
    name: 'Despesas',
    data: [1000, 2000, 0, 4000, 2000, 4000, 0]
  }
]

export function ColumnChartCard() {
  return (
    <ColumnChartCardContainer>
      <ReactApexCharts
        options={options}
        series={series}
        type='bar'
        width='100%'
        height='100%'
      />
    </ColumnChartCardContainer>
  )
}
