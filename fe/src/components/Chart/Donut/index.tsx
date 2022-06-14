import { PieChart, Pie, Legend } from 'recharts'

export const Donut = () => {
  const data = [
    { name: "Yes", value: 750, fill: "#31AEA9" },
    { name: "No", value: 250, fill: "#F67473" },
  ];

  return (
    <PieChart width={200} height={200}>
      <Legend
        height={36}
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
      />
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={0}
        dataKey="value"
        label
      >
      </Pie>
    </PieChart>
  )
}