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
    chartArea: { width: '100%' },
    isStacked: true,
    hAxis: {
      title: hAxis
    },
    vAxis: {
      title: vAxis
    }
  };

  return (
    <Chart
      chartType={chartType}
      width="100%"
      height="100%"
      data={data}
      options={!optionsProp ? options : optionsProp}
    />
  );
}
