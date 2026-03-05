import "./testimonial.css";
import Group64 from "../assets/Group64.png";
import Group61 from "../assets/Group61.png";

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
    </div>
  )
}

export default Testimonial