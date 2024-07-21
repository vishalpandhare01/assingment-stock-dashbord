import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import StockSubscription from "./components/StockSubscription";
import StockList from "./components/StockList";

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
          <h4 className="m-2">Login user:- {user}</h4>
          <StockSubscription onSubscribe={handleSubscribe} />
        </div>
      )}
    </div>
  );
};

export default App;
