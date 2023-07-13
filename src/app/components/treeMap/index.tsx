"use client"
import React, { PureComponent, useState } from "react"
import { Treemap, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "axis",
    children: [
      { name: "最優良", size: 11302 },
      { name: "優良候補", size: 24593 },
      { name: "新規", size: 2652 },
      { name: "顧客候補", size: 3636 },
      { name: "優良", size: 16703 },
      { name: "要注意", size: 16703 },
      { name: "休眠傾向", size: 6703 },
      { name: "過去最良", size: 6703 },
      { name: "危険", size: 6703 },
      { name: "休眠", size: 6703 },
    ],
  },
  // {
  //   name: "controls",
  //   children: [
  //     { name: "AnchorControl", size: 2138 },
  //     { name: "ClickControl", size: 3824 },
  //     { name: "Control", size: 1353 },
  //     { name: "ControlList", size: 4665 },
  //     { name: "DragControl", size: 2649 },
  //     { name: "ExpandControl", size: 2832 },
  //     { name: "HoverControl", size: 4896 },
  //     { name: "IControl", size: 763 },
  //     { name: "PanZoomControl", size: 5222 },
  //     { name: "SelectionControl", size: 7862 },
  //     { name: "TooltipControl", size: 8435 },
  //   ],
  // },
]

export default class TreeMap extends PureComponent {
  demoOnClick = () => {
    // const [count, setCount] = useState("")
    alert("e.name")
  }
  render() {
    return (
      <ResponsiveContainer width={800} height={600}>
        <Treemap
          width={400}
          height={200}
          data={data}
          dataKey="size"
          aspectRatio={1 / 2}
          animationEasing="ease-in-out"
          stroke="#fff"
          fill="#8889DD"
        />
      </ResponsiveContainer>
    )
  }
}
