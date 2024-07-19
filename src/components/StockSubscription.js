import React, { useState, useEffect } from 'react';

const StockSubscription = ({ onSubscribe }) => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const availableStocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

  const handleSubscription = () => {
    onSubscribe(selectedStocks);
  };

  return (
    <div className='container flex-d'>
      <h2>Subscribe to Stocks</h2>
      <select
        multiple
        value={selectedStocks}
        onChange={(e) => setSelectedStocks(Array.from(e.target.selectedOptions, option => option.value))}
        className='w-50'
      >
        {availableStocks.map(stock => (
          <option key={stock} value={stock}>{stock}</option>
        ))}
      </select>
      <button onClick={handleSubscription}>Subscribe</button>
    </div>
  );
};

export default StockSubscription;
