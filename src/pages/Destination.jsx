import "./destination.css";
import building from "../assets/building.png";
import vector from "../assets/vector.png";
// import destination2 from "../assets/destination2.png";
import tajmahel from "../assets/tajmahel.png";
import sideimage from "../assets/sideimage.png";

const Destination = () => {
  return (
    <div>
      <div>
        <div>
          <p>Top Selling</p>
          <h1>Top Destinations</h1>
        </div>
        <div>
          <div>
            <img src={building} alt="building-picture" />
            <div>
              <h3>Rome,Italty</h3>
              <h4>$5,42k</h4>
              <img src={vector} alt="vector-image" />
              <h4>10 Days Trip</h4>
            </div>
          </div>
          <div>
            {/* <img src={destination2} alt="destination2-image" /> */}
            <div>
              <h3>London,UK</h3>
              <h4>$4.2k</h4>
              <img src={vector} alt="vector-image" />
              <h4>12 Days Trip</h4>
            </div>
          </div>
          <div>
            <img src={tajmahel} alt="tajmahel-image" />
            <img src={sideimage} alt="side-image" />
            <div>
              <h3>Full Europe</h3>
              <h4>$15k</h4>
              <img src={vector} alt="vector-image" />
              <h4>28 Days Trip</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination