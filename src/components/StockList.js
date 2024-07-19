import React from 'react';
import StockPrice from './StockPrice';

const StockList = ({ stocks }) => (
  <div>
    <h2>Subscribed Stocks</h2>
    {stocks.map(stock => (
      <StockPrice key={stock} stock={stock} />
    ))}
  </div>
);

export default StockList;
