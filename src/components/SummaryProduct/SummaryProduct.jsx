import React from "react";
import "./SummaryProduct.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { grey } from "@mui/material/colors";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#80C9FF", "#BFE4FF", "#0066B3", "#00487D"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const SummaryProduct = () => {
  return (
    <div className="summary-product">
      <h1 className="summary-product__title">Отчет по продуктам</h1>
      <div className="summary-product__chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke={grey}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="summary-product__container">
        <div className="summary-product__info">
          <div className="summary-product__item">
            <div className="summary-product__color summary-product__color_blue"></div>
            <p className="summary-product__text">Капучино</p>
          </div>
          <p className="summary-product__count">254</p>
        </div>
        <div className="summary-product__info">
          <div className="summary-product__item">
            <div className="summary-product__color summary-product__color_dark-blue"></div>
            <p className="summary-product__text">Латте </p>
          </div>
          <p className="summary-product__count">238</p>
        </div>
        <div className="summary-product__info">
          <div className="summary-product__item">
            <div className="summary-product__color summary-product__color_light-blue"></div>
            <p className="summary-product__text">Американо</p>
          </div>
          <p className="summary-product__count">165</p>
        </div>
      </div>
    </div>
  );
};
