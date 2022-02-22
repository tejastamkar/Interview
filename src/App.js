// import logo from './logo.svg';
import "./styles/App.css";
import tick from "./assets/check.png";
import Buttons from "./components/buttons";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="App">
      <h1 className="title">Live Space</h1>
      <div className="subTitleSection">
        <img src={tick} alt="tick" className="tick" />
        <p className="subtitle">
          All NFTs on Cyber either belong to or were minted by their space
          creator.
        </p>
      </div>
      <div className="BtnSection">
        <Buttons />
      </div>
      <div className="CardSection">
        <Cards />
      </div>
    </div>
  );
}

export default App;
