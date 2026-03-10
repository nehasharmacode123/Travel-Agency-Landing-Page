import "./form.css";
import subscribe from "../assets/subscribe.png";
// import rectangle164 from "../assets/rectangle164.png";
// import circle from "../assets/circle.png";
// import sideCircle from "../assets/sideCircle.png";
// import { MdOutlineMailOutline } from "react-icons/md";

const Form = () => {
  return (
    // <div className="form-container">
    //   <img className="rectangle-shape" src={rectangle164} alt="rectangle-shape-image" />
    //   <img className="circle" src={circle} alt="circle-image" />
    //   <img className="sideCircle" src={sideCircle} alt="side-circle" />

    //   <div className="input-box">
    //     <p>
    //       Subscribe to get information, latest news and other <br />
    //       interesting offers about Jadoo
    //     </p>
    //     <div className="email-input">
    //       <MdOutlineMailOutline className="mail-icon" />
    //       <input type="text" placeholder="Your email" />
    //     </div>
       

    //     <button>Subscribe</button>
    //   </div>
    // </div>
    <div className="form-container">
      <img className="subscribe" src={subscribe} alt="subscribe-image" />
    </div>
  )
}

export default Form;