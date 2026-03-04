import "./destination.css";
import destination from "../assets/destination.png";
import london from "../assets/london.png";
import Europe from "../assets/Europe.png";

const Destination = () => {
  return (
    <div>
        <div>
            <h3 className="top-selling">Top Selling</h3>
            <h1 className="top-destionation">Top Destinations</h1>
        </div>
        <div className="destionation-page">
            <img className="destination1" src={destination} alt="destionation" />
            <img className="london" src={london} alt="london-image" />
            <img className="europe" src={Europe} alt="Europe-image" />
        </div>
    </div>
  )
}

export default Destination;