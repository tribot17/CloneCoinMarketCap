import axios from "axios";
import { Fragment, useState } from "react";
import DisplayPair from "../components/DisplayPair";

const HomePage = (props: any) => {
  const [data, setData] = useState(
    props.data.filter((a: any) => a.symbol.includes("BTC"))
  );

  const handleDataChange = (e: any) => {
    setData(props.data.filter((a: any) => a.symbol.includes(e.target.value)));
  };

  const handleSort = () => {
    setData(
      props.data.sort((a: any, b: any) => {
        if (a.volume_24h < b.volume_24h) {
          return 1;
        } else if (a.volume_24h > b.volume_24h) {
          return -1;
        }
      })
    );
  };

  return (
    <>
      <input onChange={handleDataChange} type={"text"} />
      <button onClick={handleSort}>Sort By Volume</button>
      {data.map((pair: any, index: number) => (
        <Fragment key={index}>
          <DisplayPair
            symbol={pair.symbol}
            last_trade_price={pair.last_trade_price}
            price_24h={pair.price_24}
            volume_24h={pair.volume_24h}
          />
        </Fragment>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const data = (
    await axios.get("https://api.blockchain.com/v3/exchange/tickers")
  ).data;

  return {
    props: {
      data: data,
    },
  };
}

export default HomePage;
