import { LineChart, CartesianGrid, XAxis, Tooltip, Line as LineGraph } from 'recharts'

export const Line = () => {
  const data = [
    {
      "name": "JAN",
      "Clients": 4000,
      "New clients": 1900,
    },
    {
      "name": "FEB",
      "Clients": 2000,
      "New clients": 4100,
    },
    {
      "name": "MAR",
      "Clients": 3400,
      "New clients": 3800,
    },
    {
      "name": "APR",
      "Clients": 2000,
      "New clients": 5000,
    },
    {
      "name": "MAY",
      "Clients": 6000,
      "New clients": 4000,
    },
    {
      "name": "JUNE",
      "Clients": 3500,
      "New clients": 6000,
    },
    {
      "name": "JULY",
      "Clients": 4000,
      "New clients": 4300,
    },
    {
      "name": "AUG",
      "Clients": 2200,
      "New clients": 8000,
    },
    {
      "name": "SEPT",
      "Clients": 4500,
      "New clients": 6200,
    }
  ]

  return (
    <LineChart width={280} height={200} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Tooltip />
      <LineGraph type="monotone" dataKey="Clients" stroke="#8884d8" />
      <LineGraph type="monotone" dataKey="New clients" stroke="#82ca9d" />
    </LineChart>
  )
}