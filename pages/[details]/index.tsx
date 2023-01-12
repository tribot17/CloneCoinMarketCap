import axios from "axios";
import { useRouter } from "next/router";
import DisplayDetails from "../../components/DisplayDetails";
import { currency } from "../../interface/intefaces";
import { useEffect, useState } from "react";
import { defaultCurrency } from "../../utils/defaultCurrency";

const DetailPage = (props: any) => {
  const [assetData, setAssetData] = useState<currency>(defaultCurrency);
  const router = useRouter();

  useEffect(() => {
    if (props.data) setAssetData(props.data.assetData);
  }, []);

  return (
    <>
      <DisplayDetails assetData={assetData} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          details: "bitcoin",
        },
      },
      {
        params: {
          details: "ethereum",
        },
      },
    ],
  };
}

export async function getStaticProps(context: any) {
  const coinId = context.params.details;
  const resAssets = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );

  const data = {
    assetData: resAssets.data,
  };

  return {
    props: {
      data: data,
    },
  };
}

export default DetailPage;
