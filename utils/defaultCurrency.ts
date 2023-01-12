export const defaultCurrency = {
  id: "",
  symbol: "",
  name: "",
  image: {
    large:undefined
  },
  coingecko_rank:0,
  current_price: 0,
  market_cap: 0,
  market_cap_rank: 0,
  fully_diluted_valuation: 0,
  total_volume: 0,
  high_24h: 0,
  low_24h: 0,
  price_change_24h: 0,
  price_change_percentage_24h: 0,
  market_cap_change_24h: 0,
  market_cap_change_percentage_24h: 0,
  circulating_supply: 0,
  total_supply: 0,
  max_supply: 0,
  ath: 0,
  ath_change_percentage:0,
  ath_date: "",
  atl: 0,
  atl_change_percentage: 0,
  atl_date: "",
  roi: "",
  last_updated: "",
  links: {
    homepage:["0"]
  },
  description: {
    en:""
  },
  market_data: {
    low_24h:{
      usd:0
    },
    high_24h:{
      usd:0
    },
    total_volume: {
      usd:0
    },
    circulating_supply:0,
    current_price: {
      usd:0
    },
    market_cap: {
      usd:0
    }
  }
};

export function numberWithSpaces(x:number) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
