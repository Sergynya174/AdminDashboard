import React, { useEffect } from "react";
import "./Payments.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Cards } from "../../components/Cards/Cards";
import Table from "../../components/Table/Table";
import { ChartTime } from "../../components/Chart/ChartTime";
import { purchases } from "../../store/purchase";
import { useDispatch, useSelector } from "react-redux";

export const Payments = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.purchase.purchases);

  useEffect(() => {
    dispatch(purchases());
  }, []);

  return (
    <div className="payments">
      <Sidebar />
      <div className="payments__container">
        <ChartTime />
        <Table products={products} />
      </div>
      <div className="payments__container-right">
        <Cards />
      </div>
    </div>
  );
};
