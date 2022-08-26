import { GetServerSideProps } from "next";

interface IndexPageProps {
  data_1: {
    success: boolean;
    result: any;
  };
  data_2: {
    mins: number;
    price: number;
  };
}

export default function IndexPage({ data_1, data_2 }: IndexPageProps) {
  let totalPrice = 0;
  let Diff = 0;  
  if(data_1.result.price < data_2.price){
    totalPrice = data_2.price - data_1.result.price;
    Diff = totalPrice / data_2.price;
  }else{
    totalPrice = data_1.result.price - data_2.price;
    Diff = totalPrice / data_2.price;
  }
  return (
    <>
        <h1>Assignment3</h1>
        <h4>FTX BTC Price: {data_1.result.price} USDT</h4>
        <h4>Binance BTC Price: {data_2.price} USDT</h4>
        <h4>Diff: {totalPrice}, ({Diff}%)</h4>

    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res_1 = await fetch('https://ftx.com/api/markets/BTC/USDT');
  const data_1 = await res_1.json();
  const res_2 = await fetch('https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
  const data_2 = await res_2.json();
  const res = await fetch('https://api1.binance.com/api/v3/depth?symbol=BTCUSDT');
  const data = await res.json();
  console.log(data_1, data_2);
  return {
    props: {
      data_1,
      data_2,
    },
  };
};