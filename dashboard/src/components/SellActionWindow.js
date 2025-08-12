import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Access the context values
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    // Validation
    if (stockQuantity <= 0) {
      setError("Quantity must be greater than 0");
      return;
    }
    
    if (stockPrice <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/newOrder`, {
        name: uid,
        qty: parseInt(stockQuantity, 10),
        price: parseFloat(stockPrice),
        mode: "SELL",
      });

      // Optional: Handle successful response
      console.log("Sell order placed successfully:", response.data);
      
      closeSellWindow();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place sell order. Please try again.");
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setStockQuantity(value);
    setError(null); // Clear error when user makes changes
  };

  const handlePriceChange = (e) => {
    const value = Math.max(0, parseFloat(e.target.value) || 0);
    setStockPrice(value);
    setError(null); // Clear error when user makes changes
  };

  // Calculate total value for sell order
  const totalValue = (stockQuantity * stockPrice).toFixed(2);

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={handleQuantityChange}
              value={stockQuantity}
              disabled={isLoading}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={handlePriceChange}
              value={stockPrice}
              disabled={isLoading}
            />
          </fieldset>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="buttons">
        <span className="sell-info">Total value ₹{totalValue}</span>
        <div>
          <button 
            className="btn btn-red" 
            onClick={handleSellClick}
            disabled={isLoading || stockQuantity <= 0 || stockPrice <= 0}
          >
            {isLoading ? "Placing Order..." : "Sell"}
          </button>
          <button 
            className="btn btn-grey" 
            onClick={handleCancelClick}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;