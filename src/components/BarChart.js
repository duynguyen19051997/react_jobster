import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

import classes from "../assets/css/BarChart.module.css";

Chart.register(CategoryScale);

export const BarChart = ({ monthlyApplications }) => {
  const data = {
    labels: monthlyApplications.map((item) => item.date),
    datasets: [
      {
        label: "Count",
        data: monthlyApplications.map((item) => item.count),
        backgroundColor: ["#bcccdc"],
        borderColor: "#bcccdc",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={classes["bar_chart_container"]}>
      <Bar
        className={classes["bar_chart"]}
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
