import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { currency } from "../../interface/intefaces";
import { numberWithSpaces } from "../../utils/defaultCurrency";
import classes from "./displayDetails.module.scss";

interface IDisplayDetails {
  assetData: any;
}

const DisplayDetails: React.FC<IDisplayDetails> = ({ assetData }) => {
  const [displayButton, setDisplayButton] = useState({
    links: false,
    marketData: false,
  });
  console.log(assetData);

  const DisplayChainExplorer = () => {
    return assetData.links.blockchain_site
      .filter((n: string) => n.length > 0)
      .map((blocksite: string, index: number) => (
        <p key={index}>{blocksite}</p>
      ));
  };

  return (
    <div className={classes.displayDetails_page}>
      <div className={classes.displayDetails_header}>
        <div className={classes.container1}>
          <div className={classes.container_header}>
            <Image
              src={assetData.image.large}
              alt="large_coin_img"
              width={80}
              height={80}
            />
            <div className={classes.container_header_text}>
              <div className={classes.name_symbol}>
                <h3>{assetData.name}</h3>
                <p id={classes.symbol}>{assetData.symbol.toUpperCase()}</p>
              </div>
              <p id={classes.rank}>Rank {assetData.market_cap_rank}</p>
            </div>
          </div>

          <h3>
            <Link href={assetData.links.homepage[0]} target="_blank">
              {assetData.links.homepage[0]}
            </Link>
          </h3>
          <button
            onClick={() =>
              setDisplayButton({
                ...displayButton,
                links: !displayButton.links,
              })
            }
          >
            Chain Explorer
          </button>

          {displayButton.links && <DisplayChainExplorer />}
        </div>
        <div className={classes.container2}>
          <div className={classes.price_display}>
            <div className={classes.price_purcentage}>
              <h2>${(+assetData.market_data.current_price.usd).toFixed(2)}</h2>
              <h3
                id={classes.price_purcentage}
                style={
                  assetData.market_data.price_change_percentage_24h > 0
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {(+assetData.market_data.price_change_percentage_24h).toFixed(
                  2
                )}{" "}
                %
              </h3>
            </div>
            <div className={classes.low_high}>
              <p>${assetData.market_data.low_24h.usd}</p>
              <p>${assetData.market_data.high_24h.usd}</p>
            </div>
          </div>
          <div className={classes.token_details_display}>
            <div className={classes.market_cap}>
              <p>MarketCap</p>
              <p>
                $
                {numberWithSpaces(
                  assetData.market_data.market_cap.usd.toFixed(2)
                )}
              </p>
            </div>
            <div className={classes.volumes}>
              <p>Volume</p>
              <p>
                $
                {numberWithSpaces(
                  assetData.market_data.total_volume.usd.toFixed(2)
                )}
              </p>
            </div>
            <div className={classes.actual_supply}>
              <p>Acutal Supply</p>
              <p>
                {numberWithSpaces(
                  assetData.market_data.circulating_supply.toFixed(2)
                )}{" "}
                {assetData.symbol.toUpperCase()}
              </p>
            </div>
          </div>
          {/* <button
            onClick={() =>
              setDisplayButton({
                ...displayButton,
                marketData: !displayButton.marketData,
              })
            }
          >
            <h2>Market</h2>
          </button> */}
        </div>
      </div>

      <p dangerouslySetInnerHTML={{ __html: assetData.description.en }}></p>

      {/* {displayButton.marketData &&
        marketData &&
        marketData
          .filter((n, i) => i < 4)
          .map((market: any, index) => (
            <ul key={index}>
              <p>Exchange : {market.exchangeId}</p>
              <p>
                Pair Symbol : {market.quoteSymbol}/
                {assetData.symbol.toUpperCase()}
              </p>
              <p>Volume : {(+market.volumePercent).toFixed(2)}%</p>
              <p>Volume : ${(+market.volumeUsd24Hr).toFixed(2)}</p>
            </ul>
          ))
      } */}
    </div>
  );
};

export default DisplayDetails;
