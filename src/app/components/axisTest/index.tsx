"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    cv: 1400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    cv: 1400,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    cv: 1400,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    cv: 1400,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    cv: 1400,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    cv: 1400,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    cv: 1400,
    amt: 2100,
  },
]

const RenderLineChart = () => {
  return (
    <>
      <LineChart width={800} height={600} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="cv" stroke="#81ca90" />
        <Line type="monotone" dataKey="a" stroke="#81ca90" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  )
}

export default RenderLineChart
