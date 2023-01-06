import axios from "axios";
import { useState } from "react";
import DisplayCurrency from "../../components/DisplayCurrency";
import { currency } from "../../interface/intefaces";
const AssetPage = (props: any) => {
  const [topHundred, setTopHundred] = useState(props.data);
  return (
    <>
      <h1>Asset Page</h1>
      {topHundred.map((currency: currency, index: number) => (
        <div key={index}>
          <DisplayCurrency {...currency} />
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const data = (await axios.get("https://api.coincap.io/v2/assets?limit=100"))
    .data;

  return {
    props: {
      data: data.data,
    },
  };
}

export default AssetPage;
