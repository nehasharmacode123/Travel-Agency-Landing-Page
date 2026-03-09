import "./category.css";
import settlelight from "../assets/settlelight.png";
import plane from "../assets/plane.png";
import mic from "../assets/mic.png";
import settings from "../assets/settings.png";
import Rectangle157 from "../assets/Rectangle157.png";
import Group4 from "../assets/Group4.png";

const Category = () => {
  return (
    <div>
        <div>
            <h1 className="category">CATEGORY</h1>
            <h2 className="offer">We Offer Best Services</h2>
            <img className="side-design-image" src={Group4} alt="side-design-image" />
        </div>
        <div className="box">
            <img className="rectangle" src={Rectangle157} alt="rectangle157" />
            <img className="settlelight" src={settlelight} alt="settlelight-picture" />
            <img className="plane" src={plane} alt="plane-picture" />
            <img className="mic" src={mic} alt="mic-picture" />
            <img className="settings" src={settings} alt="settings-picture" />
        </div>
    </div>
  )
}

export default Category