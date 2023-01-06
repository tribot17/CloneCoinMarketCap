import React from "react";

const DisplayPair = ({
  symbol,
  last_trade_price,
  price_24h,
  volume_24h,
}: any) => {
  return (
    <div>
      <ul>
        <li>symbol : {symbol}</li>
        <li>last trade price : {last_trade_price}</li>
        <li>price last 24h : {price_24h}</li>
        <li>volume 24h : {volume_24h}</li>
      </ul>
    </div>
  );
};

export default DisplayPair;
