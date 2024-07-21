import React, { useState , useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const StockChart = ({initialSeries ,setSeries ,series}) => {

  // Chart options
  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      events: {
        // Ensures that the chart is re-rendered on every data update
        dataPointSelection: () => {},
        dataPointMouseEnter: () => {},
        dataPointMouseLeave: () => {}
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Stock Prices Over Time',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Stock Price (USD)'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `$${val}`
      }
    }
  });

  useEffect(() => {
    // Function to simulate live data updates
    const updateStockPrices = () => {
      setSeries(prevSeries => 
        prevSeries.map(company => ({
          ...company,
          data: [...company.data.slice(1), Math.round(Math.random() * 100 + 150)]  // Generate random price for the end
        }))
      );
    };

    // Update stock prices every second
    const intervalId = setInterval(updateStockPrices, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={500} />
      </div>
    </div>
  );
};

export default StockChart;
