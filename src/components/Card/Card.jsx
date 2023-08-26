import { useState } from "react";
import "./Card.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimatePresence>
  );
};

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="card__compact"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={param.id}
      onClick={setExpanded}
    >
      <motion.div className="card__radial-bar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <motion.span className="card__title-compact">{param.title}</motion.span>
      </motion.div>
      <motion.div className="card__detail">
        <motion.span className="card__span-compact">
          &#8381;{param.value}
        </motion.span>
        <motion.span className="card__span-compact">За 24 часа</motion.span>
      </motion.div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="card__expanded"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={param.id}
    >
      <motion.div
        style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
      >
        <CloseIcon onClick={setExpanded} />
      </motion.div>
      <motion.span className="card__title-expanded">{param.title}</motion.span>
      <motion.div className="card__chart-container-expanded">
        <Chart options={data.options} series={param.series} type="area" />
      </motion.div>
      <motion.span className="card__span-expanded">За 24 часа</motion.span>
    </motion.div>
  );
}

export default Card;
