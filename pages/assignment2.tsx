import axios from 'axios';
import Link from 'next/link';

let getApi: object = {};
let setApi: object = {};

const url = 'https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';
axios.get(url)

.then(response => {

    const graph = response.data;
    for(let i of graph){
      setApi = {
        "open" : i[1],
        "high" : i[2],
        "low" :  i[3],
        "close" : i[4],
      };
      let openTime = new Date(i[0]);
      let dateTime = openTime.getFullYear() + '-' + ("00" + (openTime.getMonth() + 1)).slice(-2)+ '-' + ("00" + openTime.getDate()).slice(-2) + '/' + ("00" + openTime.getHours()).slice(-2)+':'+ ("00" +openTime.getMinutes()).slice(-2)+':'+ ("00"+openTime.getSeconds()).slice(-2);

      Object.assign(getApi,{[dateTime]:setApi});
    }
    console.log(getApi);
  }
);

export default function IndexPage() {

  return (
    <div>
      <h1>Assignment2</h1>
      <Link href="/">
        <a>assignment1</a>
      </Link>
      <br></br>
      <Link href="/assignment3">
          <a>assignment3</a>
      </Link>
    </div>
  );
}

