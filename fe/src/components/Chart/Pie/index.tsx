import { PieChart, Pie as PieGraph } from 'recharts'

export const Pie = () => {
  const data = [
    { value: 310, fill: "#31AEA9" },
    { value: 150, fill: "#F67473" },
    { value: 200, fill: "#edc345" },
    { value: 190, fill: "#d91074" },
    { value: 50, fill: "#a12674" },
    { value: 100, fill: "#015079" },
  ];

  return (
    <PieChart width={200} height={200}>
      <PieGraph data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} />
    </PieChart>
  )
}