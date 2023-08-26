import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
import { cardsData } from "../../utils/utils";

export const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, id) => {
        return (
          <div className="cards__container" key={id}>
            <Card
              id={id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};
