import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = ({ setSeries, series }) => {
  // Chart options
  const [options] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      events: {
        // Ensures that the chart is re-rendered on every data update
        dataPointSelection: () => {},
        dataPointMouseEnter: () => {},
        dataPointMouseLeave: () => {},
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Stock Prices Over Time",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Stock Price (USD)",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `$${val}`,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={500}
        />
      </div>
    </div>
  );
};

export default StockChart;
