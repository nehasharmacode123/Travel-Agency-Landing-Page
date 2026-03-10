import "./form.css";
import rectangle164 from "../assets/rectangle164.png";
import circle from "../assets/circle.png";
const Form = () => {
  return (
    <div>
        <div>
            <img className="rectangle-shape" src={rectangle164} alt="" />
            <p>Subscribe to get information, latest news and other <br />
                interesting offers about Jadoo</p>
                <img src={circle} alt="circle-image" />
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Form;