import axios from "axios";
import { useRouter } from "next/router";
import DisplayDetails from "../../components/DisplayDetails";

const DetailPage = (props: any) => {
  const router = useRouter();

  return (
    <>
      <DisplayDetails {...props.data.assetData} />
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
  const resAssets = (
    await axios.get(`https://api.coincap.io/v2/assets/${coinId}`)
  ).data;

  const resMarket = (
    await axios.get(`https://api.coincap.io/v2/assets/${coinId}/markets`)
  ).data;

  const data = {
    assetData: resAssets.data,
    marketData: resMarket.data,
  };

  return {
    props: {
      data: data,
    },
  };
}

export default DetailPage;
