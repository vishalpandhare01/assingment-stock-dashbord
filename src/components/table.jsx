// src/StockManager.js
import React, { useState, useEffect } from "react";

const StockManager = ({ stocks }) => {
  // const [stocks, setStocks] = useState(series);
  const [subscribedStocks, setSubscribedStocks] = useState([]);

  useEffect(() => {
    // Function to update subscribed stocks to reflect any changes in stock prices
    const updateSubscribedStocks = () => {
      setSubscribedStocks((prevSubscribedStocks) =>
        prevSubscribedStocks.map((subscribedStock) => {
          const updatedStock = stocks.find((stock) => stock.name === subscribedStock.name);
          return updatedStock ? { ...subscribedStock, data: updatedStock.data } : subscribedStock;
        })
      );
    };

    updateSubscribedStocks();
  }, [stocks]); // Dependency on stocks to update subscribed stocks when the stock prices change

  const handleSubscribe = (stock) => {
    // Check if the stock is already subscribed to avoid duplicates
    setSubscribedStocks((prevSubscribedStocks) => {
      const isSubscribed = prevSubscribedStocks.find((subscribedStock) => subscribedStock.name === stock.name);
      if (isSubscribed) {
        alert(`Already subscribed to ${stock.name}`);
        return prevSubscribedStocks;
      }
      const newSubscribedStocks = [...prevSubscribedStocks, stock];
      alert(`Subscribed to ${stock.name}`);
      return newSubscribedStocks;
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Stocks Table Column */}
        <div className="col-md-6">
          <h2 className="mb-3">Stocks</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Number</th>
                <th>Company Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stock.name}</td>
                  <td>${stock.data[0]}</td>{" "}
                  {/* Displaying the first price for simplicity */}
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSubscribe(stock)}
                    >
                      Subscribe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Subscribed Stocks Column */}
        <div className="col-md-6">
          <h2 className="mt-4 mb-3">Subscribed Stocks</h2>
          <ul className="list-group">
            {subscribedStocks.length === 0
              ? "No Stock subscribed yet!"
              : subscribedStocks.map((stock, index) => (
                  <li key={index} className="list-group-item">
                    {stock.name} : ${stock.data[0]}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StockManager;
