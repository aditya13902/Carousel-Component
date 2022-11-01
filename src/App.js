import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Item from "./Item";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];
export default function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    async function get() {
      const res = await axios.get(
        "https://c096a5cb-3833-418c-bfa5-693f575febc9.mock.pstmn.io"
      );
      setdata(res.data.image);
    }
    get();
  }, []);
  if (data === null) {
    return <></>;
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Foodies Heart 💖</h1>
      <Carousel breakPoints={breakPoints}>
        {data.map((e) => (
          <Item url={e} />
        ))}
      </Carousel>
    </div>
  );
}
