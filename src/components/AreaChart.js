import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

import classes from "../assets/css/AreaChart.module.css";

Chart.register(CategoryScale);

export const AreaChart = ({ monthlyApplications }) => {
  const data = {
    labels: monthlyApplications.map((item) => item.date),
    datasets: [
      {
        label: "Count",
        data: monthlyApplications.map((item) => item.count),
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={classes["area_chart_container"]}>
      <Line
        className={classes["area_chart"]}
        data={data}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
