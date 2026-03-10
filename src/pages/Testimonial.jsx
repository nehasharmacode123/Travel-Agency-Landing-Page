import "./testimonial.css";
import Group64 from "../assets/Group64.png";
import Group61 from "../assets/Group61.png";
import axon from "../assets/axon.png";
import jetstar from "../assets/jetstar.png";
import expedia from "../assets/expedia.png";
import qantus from "../assets/qantus.png";
import fook from "../assets/fook.png";

const Testimonial = () => {
  return (
    <div>
        <div className="testimonials">
            <h4>TESTIMONIALS</h4>
            <h2>What People Say <br /> About Us.</h2>
            <img src={Group61} alt="dotted-image" />
        </div>
        <div>
            <img className="group" src={Group64} alt="testimonials" />
        </div>
        <div className="company-logo">
          <div className="logo1">
              <img className="axon" src={axon} alt="axon-company-logo" />
              <img className="jetstar" src={jetstar} alt="jetstar-company-logo" />
              <img className="expedia" src={expedia} alt="expedia-company-logo" />
              <img className="quantus" src={qantus} alt="qantus-company-logo" />
              <img className="fook" src={fook} alt="fook-company-logo" />
          </div>
        </div>
    </div>
  )
}

export default Testimonial