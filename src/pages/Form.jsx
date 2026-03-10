import "./form.css";
import rectangle164 from "../assets/rectangle164.png";
import circle from "../assets/circle.png";
import { MdOutlineMailOutline } from "react-icons/md";

const Form = () => {
  return (
    <div className="form-container">
      <img className="rectangle-shape" src={rectangle164} alt="rectangle-shape-image" />
      <img className="circle" src={circle} alt="circle-image" />

      <div className="input-box">
        <p>
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </p>
        <div className="email-input">
          <MdOutlineMailOutline className="mail-icon" />
          <input type="text" placeholder="Your email" />
        </div>
        <input type="text" placeholder="Your email" />
        
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Form;