import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ChartTime.scss";

export const ChartTime = () => {
  const data = [
    {
      name: "Ср 09.08",
      uv: 13000,
    },
    {
      name: "Чр 10.08",
      uv: 14000,
    },
    {
      name: "Пт 11.08",
      uv: 12000,
    },
    {
      name: "Сб 12.08",
      uv: 13600,
    },
    {
      name: "Вс 13.08",
      uv: 12700,
    },
    {
      name: "Пн 14.08",
      uv: 13200,
    },
    {
      name: "Вт 15.08",
      uv: 7600,
    },
  ];

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
