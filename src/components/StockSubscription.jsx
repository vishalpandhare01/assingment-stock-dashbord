import React, { useState, useEffect } from "react";
import StockChart from "./chart";
import StockManager from "./table";
const initialSeries = [
  {
    name: "Apple",
    data: [150, 155, 160, 170, 165, 175, 180, 185, 190],
  },
  {
    name: "Microsoft",
    data: [200, 205, 210, 220, 215, 225, 230, 235, 240],
  },
  {
    name: "Google",
    data: [2500, 2525, 2550, 2575, 2600, 2625, 2650, 2675, 2700],
  },
  {
    name: "Amazon",
    data: [3200, 3225, 3250, 3275, 3300, 3325, 3350, 3375, 3400],
  },
  {
    name: "Facebook",
    data: [330, 335, 340, 345, 350, 355, 360, 365, 370],
  },
];
const StockSubscription = ({ onSubscribe }) => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [series, setSeries] = useState(initialSeries);

  async function fetchStovckData() {
    try {
      const response = await fetch("http://localhost:8000/getStock");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSeries(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    try {
    const intervalId =  setInterval(() => {
        fetchStovckData();
      }, 2000);
      return () => clearInterval(intervalId); 
    } catch (error) {}
  }, []);
  const availableStocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

  const handleSubscription = () => {
    onSubscribe(selectedStocks);
  };

  return (
    <div className="container flex-d">
      <StockManager stocks={series} />
      <StockChart
        initialSeries={initialSeries}
        series={series}
        setSeries={setSeries}
      />
    </div>
  );
};

export default StockSubscription;
