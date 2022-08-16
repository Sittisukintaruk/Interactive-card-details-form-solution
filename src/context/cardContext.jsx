import React, { createContext, useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    name: "",
    cardNumber: 0,
    data: {
      month: 0,
      year: 0,
    },
    cvc: 0,
  });

  const updateDetail = ({ cardNumber, cvc, mm, name, yy }) => {
    const newobj = {
      name: name,
      cardNumber: cardNumber,
      data: {
        month: mm,
        year: yy,
      },
      cvc: cvc,
    };
    setDetail(newobj);
  };

  return (
    <CardContext.Provider value={{ detail, updateDetail }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
