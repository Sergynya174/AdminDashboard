import React from "react";
import "./Payments.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SummaryProduct } from "../../components/SummaryProduct/SummaryProduct";
import { Chart } from "../../components/Chart/Chart";
import { Purchases } from "../../components/Purchases/Purchases";

export const Payments = () => {
  return (
    <div className="payments">
      <Sidebar />
      <div className="payments__container">
        <Header />
        <div className="payments__container-charts">
          <div className="payments__container-chart">
            <Chart />
            <Purchases />
          </div>
          <div className="payments__container-summary">
            <Summary />
            <SummaryProduct />
          </div>
        </div>
      </div>
    </div>
  );
};
