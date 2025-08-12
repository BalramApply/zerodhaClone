import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from './Orders.module.css';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`);
        console.log(response.data);
        setAllOrders(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch orders");
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const formatQuantity = (qty) => {
    return new Intl.NumberFormat('en-IN').format(qty);
  };

  const getModeClass = (mode) => {
    return mode === 'BUY' ? Styles.buyMode : Styles.sellMode;
  };

  if (loading) {
    return (
      <div className={Styles.container}>
        <div className={Styles.loading}>
          <div className={Styles.spinner}></div>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={Styles.container}>
        <div className={Styles.error}>
          <h3>Error Loading Orders</h3>
          <p>{error}</p>
          <button 
            className={Styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 className={Styles.title}>Orders ({allOrders.length})</h3>
      </div>

      {allOrders.length === 0 ? (
        <div className={Styles.emptyState}>
          <div className={Styles.emptyIcon}>📋</div>
          <h4>No Orders Found</h4>
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className={Styles.orderTable}>
          <table className={Styles.table}>
            <thead>
              <tr className={Styles.tableHeader}>
                <th className={Styles.tableHeaderCell}>Stock</th>
                <th className={Styles.tableHeaderCell}>Mode</th>
                <th className={Styles.tableHeaderCell}>Price</th>
                <th className={Styles.tableHeaderCell}>Quantity</th>
                <th className={Styles.tableHeaderCell}>Total</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => {
                const total = stock.price * stock.qty;
                return (
                  <tr key={stock.id || index} className={Styles.tableRow}>
                    <td className={Styles.tableCell}>
                      <span className={Styles.stockName}>{stock.name}</span>
                    </td>
                    <td className={Styles.tableCell}>
                      <span className={`${Styles.modeTag} ${getModeClass(stock.mode)}`}>
                        {stock.mode}
                      </span>
                    </td>
                    <td className={Styles.tableCell}>
                      <span className={Styles.price}>{formatPrice(stock.price)}</span>
                    </td>
                    <td className={Styles.tableCell}>
                      <span className={Styles.quantity}>{formatQuantity(stock.qty)}</span>
                    </td>
                    <td className={Styles.tableCell}>
                      <span className={Styles.total}>{formatPrice(total)}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {allOrders.length > 0 && (
        <div className={Styles.footer}>
          <div className={Styles.summary}>
            <span>Total Orders: {allOrders.length}</span>
            <span>
              Total Value: {formatPrice(
                allOrders.reduce((sum, order) => sum + (order.price * order.qty), 0)
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;