import axios from "axios";
import Link from "next/link";



  const url = "https://api1.binance.com/api/v3/depth?symbol=BTCUSDT";
  axios.get(url).then((response) => {
    const result = response.data;
    console.log(result);
    function calculateOutputAmount() {
      let token: number = 0;
      let usdtAmount: number = 290000;
      let inputValue = usdtAmount;
      let totalBTC;
      result.asks.map((array: number[]) => {
        const price: number = ++array[0];
        const volume: number = ++array[1];
        const calInput = inputValue / (price * volume);
        if (inputValue > 0) {
          if (calInput > volume) {
            totalBTC = token + volume;
          } else {
            totalBTC = token + calInput;
          }
          inputValue = inputValue - price * (totalBTC - token);
          token = totalBTC;
        }
      });
      console.log("Input USDT: " + usdtAmount);
      console.log("Output BTC: " + token);
    }
    calculateOutputAmount();
  });
  

  function calculateOutputAmount() {
    throw new Error("Function not implemented.");
  }


export default function IndexPage() {
  return (
    <div>
      <h1>Assignment3</h1>


      <Link href="/">
        <a>assignment1</a>
      </Link>
      <br></br>
      <Link href="/assignment2">
        <a>assignment2</a>
      </Link>


    </div>
  );
}

