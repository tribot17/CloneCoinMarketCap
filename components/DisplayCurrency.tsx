import Link from "next/link";
import React from "react";
import { currency } from "../interface/intefaces";

const DisplayCurrency = (props: currency) => {
  return (
    <Link href={`assets-page/${props.id}`}>
      <div>
        <h4>Name : {props.name}</h4>
        <p>Rank : {props.rank}</p>
        <p>Price : {(+props.priceUsd).toFixed(2)}</p>
        <p>Volume 24h : {(+props.volumeUsd24Hr).toFixed(2)}</p>
        <p>
          24h % :{(+props.changePercent24Hr).toFixed(2) > "0" ? "+" : "-"}{" "}
          {"  "}
          {(+props.changePercent24Hr).toFixed(2)} %
        </p>
        <p>MarketCap : {(+props.marketCapUsd).toFixed(2)}</p>
        <p>Acutal Supply : {(+props.supply).toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default DisplayCurrency;
