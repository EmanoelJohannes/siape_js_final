import Chart from 'react-google-charts';

export default function ChartComponent({
  chartType,
  title,
  hAxis,
  vAxis,
  data,
  optionsProp
}) {
  const options = {
    title,
    chartArea: { width: '70%' },
    hAxis: {
      title: hAxis
    },
    vAxis: {
      title: vAxis
    },
    legend: { position: 'right' }
  };

  return (
    <Chart
      chartType={chartType}
      data={data}
      width="100%"
      height="100%"
      options={options}
    />
  );
}
