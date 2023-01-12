import Image from "next/image";
import Link from "next/link";
import React from "react";
import { currency } from "../../interface/intefaces";
import { numberWithSpaces } from "../../utils/defaultCurrency";
import classes from "./displayCurrency.module.scss";

const DisplayCurrency = (props: currency) => {
  return (
    <Link href={`/${props.id}`} className={classes.displayCurrency}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Image src={props.image} alt="coin_img" width={24} height={24} />
        <h3>{props.name}</h3>
        <p style={{ fontSize: "0.9rem" }}>{props.symbol.toUpperCase()}</p>
      </div>
      <p>${numberWithSpaces(props.market_cap)}</p>
      <p>${numberWithSpaces(props.current_price)}</p>
      {/* <p>Volume 24h : {(+props.volumeUsd24Hr).toFixed(2)}</p> */}
      <p
        style={
          props.price_change_percentage_24h.toFixed(2) > "0"
            ? { color: "green" }
            : { color: "red" }
        }
      >
        {props.price_change_percentage_24h.toFixed(2)} %
      </p>
      <p>
        {numberWithSpaces(+props.circulating_supply.toFixed(2))}{" "}
        {props.symbol.toUpperCase()}
      </p>
      <p>${numberWithSpaces(props.total_volume)}</p>
    </Link>
  );
};

export default DisplayCurrency;
