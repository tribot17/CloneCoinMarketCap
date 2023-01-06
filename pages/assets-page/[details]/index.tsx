import axios from "axios";
import { useRouter } from "next/router";
import DisplayDetails from "../../../components/DisplayDetails";

const DetailPage = (props: any) => {
  const router = useRouter();

  return (
    <>
      <DisplayDetails {...props.data} />
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
  const data = (await axios.get(`https://api.coincap.io/v2/assets/${coinId}`))
    .data;

  return {
    props: {
      data: data.data,
    },
  };
}

export default DetailPage;
