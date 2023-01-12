import axios from "axios";
import { useState, useEffect } from "react";
import DisplayCurrency from "../components/DisplayCurrency";
import DisplayName from "../components/DisplayName";
import { currency } from "../interface/intefaces";

const AssetPage = (props: any) => {
  const [topHundred, setTopHundred] = useState(props.data);

  console.log(topHundred);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>Asset Page</h1>
      <div className="displayCurrency_page">
        <DisplayName />
        {topHundred.map((currency: currency, index: number) => (
          <DisplayCurrency {...currency} key={index} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const data = (
      await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
    ).data;

    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: {},
    },
  };
}

export default AssetPage;
