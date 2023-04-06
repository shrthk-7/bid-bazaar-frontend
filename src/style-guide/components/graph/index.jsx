import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./style.module.scss";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Bid History",
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export function Graph({ data, labels }) {
  const newData = {
    labels,
    datasets: [
      {
        label: "Bid History",
        data: data,
        borderColor: "rgb(255,255,255)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    ],
  };
  return <Line options={options} data={newData} className={styles.graph} />;
}
