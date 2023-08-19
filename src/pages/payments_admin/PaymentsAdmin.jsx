import React from "react";
import "./PaymentsAdmin.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SummaryProduct } from "../../components/SummaryProduct/SummaryProduct";
import { Chart } from "../../components/Chart/Chart";
import { UserTable } from "../../components/UserTable/UserTable";

export const PaymentsAdmin = () => {
  return (
    <div className="payments-admin">
      <Sidebar />
      <div className="payments-admin__container">
        <Header />
        <div className="payments-admin__container-charts">
          <div className="payments-admin__container-chart">
            <Chart />
            <UserTable />
          </div>
          <div className="payments-admin__container-summary">
            <Summary />
            <SummaryProduct />
          </div>
        </div>
      </div>
    </div>
  );
};
