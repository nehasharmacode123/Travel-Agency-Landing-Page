import "./trip.css";
import group7 from "../assets/group7.png";
import group12 from "../assets/group12.png";
import group11 from "../assets/group11.png";

const Trip = () => {
  return (
    <div>
      <div>
        <h3>Easy and Fast</h3>
        <h1>
          Book Your Next Trip <br />
          In 3 Easy Steps
        </h1>
        <div>
          <img src={group7} alt="group" />
          <h4>Choose Destination</h4>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. Urna, <br /> tortor tempus.{" "}
          </p>
        </div>
        <div>
          <img src={group12} alt="payment group image" />
          <h4>Make Payment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Urna, tortor tempus.{" "}
          </p>
        </div>
        <div>
          <img src={group11} alt="reach airport image" />
          <h4>Reach Airport on Selected Date</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna,
            tortor tempus.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trip;
