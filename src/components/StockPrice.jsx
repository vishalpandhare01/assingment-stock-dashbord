import React, { useEffect, useState } from 'react';

const StockPrice = ({ stock }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const Number = Math.random() * (1000 - 1) + 1
    setPrice(Number);
  }, [stock]);

  return (
    <div>
      <h3>{stock}: ${price ? price.toFixed(2) : 'Loading...'}</h3>
    </div>
  );
};

export default StockPrice;
