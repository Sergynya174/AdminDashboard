import React from "react";
import "./Summary.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Summary = () => {
  return (
    <div className="summary">
      <h3 className="summary__title">Всего</h3>
      <div className="summary__chart">
        <CircularProgressbar
          value={100}
          text="Всего 1 329 070 RUB"
          strokeWidth={5}
          styles={{ text: { fontSize: "9px", fill: "gray" } }}
        />
      </div>
    </div>
  );
};
