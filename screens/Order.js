import React, { createContext, useContext, useState } from 'react';

// Create Order Context
const OrderContext = createContext();

// Create a provider component
export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    starters: [],
    mains: [],
    desserts: [],
  });

  const addToOrder = (course, item) => {
    setOrder(prevOrder => ({
      ...prevOrder,
      [course]: [...prevOrder[course], item],
    }));
  };

  return (
    <OrderContext.Provider value={{ order, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use the Order Context
export const useOrder = () => {
  return useContext(OrderContext);
};
