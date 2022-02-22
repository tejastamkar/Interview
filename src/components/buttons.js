import "../styles/buttons.css";
import fire from "../assets/fire.png";
import diamond from "../assets/diamond.png";
import gorilla from "../assets/gorilla.png";
import temple from "../assets/temple.png";
import tornado from "../assets/tornado.png";
import { useState } from "react";
export default function Buttons() {
  const [Trend, setTrend] = useState("btn");
  const [Shows, setShows] = useState("btn");
  const [Popular, setPopular] = useState("btn");
  const [Genesis, setGenesis] = useState("btn");
  const [Temple, setTemple] = useState("btn");
  const [Void, setVoid] = useState("btn");
  const [Bayc, setBayc] = useState("btn");

  const Activate = ({ index }) => {
    switch (index) {
      case 1:
        setTrend("Active");
        setShows("btn");
        setPopular("btn");
        setGenesis("btn");
        setTemple("btn");
        setVoid("btn");
        setBayc("btn");
        break;
      case 2:
        setTrend("btn");
        setShows("Active");
        setPopular("btn");
        setGenesis("btn");
        setTemple("btn");
        setVoid("btn");
        setBayc("btn");
        break;
      case 3:
        setTrend("btn");
        setShows("btn");
        setPopular("Active");
        setGenesis("btn");
        setTemple("btn");
        setVoid("btn");
        setBayc("btn");
        break;
      case 4:
        setTrend("btn");
        setShows("btn");
        setGenesis("btn");
        setPopular("Active");
        setTemple("btn");
        setVoid("btn");
        setBayc("btn");
        break;
      case 5:
        setTrend("btn");
        setShows("btn");
        setPopular("btn");
        setGenesis("btn");
        setTemple("Active");
        setVoid("btn");
        setBayc("btn");
        break;
      case 6:
        setTrend("btn");
        setShows("btn");
        setPopular("btn");
        setGenesis("btn");
        setTemple("btn");
        setVoid("Active");
        setBayc("btn");
        break;
      case 7:
        setTrend("btn");
        setShows("btn");
        setPopular("btn");
        setGenesis("btn");
        setTemple("btn");
        setVoid("btn");
        setBayc("Active");
        break;
      default:
        setTrend("btn");
        setShows("btn");
        setPopular("btn");
        setGenesis("btn");
        setTemple("btn");
        setVoid("btn");
        setBayc("btn");
        break;
    }
  };

  return (
    <div className="Main">
      <button className={Trend} onClick={() => Activate(1)}>
        <img src={fire} alt="fire" className="icon" /> 24 Trending
      </button>
      <button className={Shows} onClick={() => Activate(2)}>
        Latest shows
      </button>
      <button className={Popular} onClick={() => Activate(3)}>
        Most Popular
      </button>
      <button className={Genesis} onClick={() => Activate(4)}>
        <img src={diamond} alt="diamond" className="icon" /> In Genesis
      </button>
      <button className={Temple} onClick={() => Activate(5)}>
        <img src={temple} alt="temple" className="icon" /> In Temple
      </button>
      <button className={Void} onClick={() => Activate(6)}>
        <img src={tornado} alt="tornado" className="icon" /> In Void
      </button>
      <button className={Bayc} onClick={() => Activate(7)}>
        <img src={gorilla} alt="gorilla" className="icon" /> #BAYC
      </button>
    </div>
  );
}
