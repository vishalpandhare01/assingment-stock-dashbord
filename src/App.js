import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import StockSubscription from './components/StockSubscription';
import StockList from './components/StockList';



const App = () => {
  const [user, setUser] = useState(null);
  const [stocks, setStocks] = useState([]);

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleSubscribe = (newStocks) => {
    setStocks(newStocks);
  };

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome {user}</h1>
          <StockSubscription onSubscribe={handleSubscribe} />
          <StockList stocks={stocks} />
        </div>
      )}
    </div>
  );
};

export default App;
