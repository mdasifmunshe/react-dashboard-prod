import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Chart from "react-apexcharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {expanded ? (
        <ExpandedCard params={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard params={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimatePresence>
  );
};

const CompactCard = ({ params, setExpanded }) => {
  return (
    <motion.div
      className={`${params.class} ${params.shadow} relative flex h-auto flex-1 cursor-pointer rounded-[0.7rem] p-4 text-white hover:shadow-none`}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="flex flex-1 flex-col justify-end gap-4">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
          strokeWidth={12}
          styles={buildStyles({
            pathColor: `#fff`,
            trailColor: `none`,
            textSize: "20px",
            textColor: `#fff`,
          })}
          className="w-16 overflow-visible font-bold drop-shadow-[2px_4px_6px_#fff]"
        />
        <span className="text-base font-bold">{params.title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between">
        <img src={params.icon} alt={params.title} className="h-7 w-7" />
        <span className="text-2xl font-bold">{params.value}</span>
        <span className="text-xs">Last 24 Hours</span>
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ params, setExpanded }) => {
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
      className={`${params.class} ${params.shadow} absolute left-52 z-10  flex h-[70vh] w-[60%] flex-col items-center justify-between rounded-2xl p-4`}
      layoutId="expandableCard"
    >
      <div className="self-end">
        <img
          src="/crossMark.svg"
          alt="crossMark"
          onClick={setExpanded}
          className="h-6 w-6 cursor-pointer"
        />
      </div>
      <span className="text-2xl font-bold text-white drop-shadow-[0_0_15px_#fff]">
        {params.title}
      </span>
      <div className="w-[70%]">
        <Chart series={params.series} type="area" options={data.options} />
      </div>
      <span className="text-base text-[#dfdede]">Last 24 Hours</span>
    </motion.div>
  );
};

export default Card;
