import "../styles/Cards.css";
import { Data } from "../Data/Data";
export default function Cards() {
  return (
    <>
      {Data.map((data, index) => (
        <Card Data={data} key={index} />
      ))}
    </>
  );
}

const Card = ({ Data }) => {
  const innerCard = Data.userData;

  return (
    <div className="Card">
      <img src={Data.url} alt="" className="CardImage" />
      <div className="TextSection">
        <h4 className="Title">{Data.title}</h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {innerCard.map((data) => (
            <InnerCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const InnerCard = ({ data }) => (
  <div className="InnerClass">
    <p className="Name">{data.name}</p>
    <p className="id">{data.userid}</p>
  </div>
);
