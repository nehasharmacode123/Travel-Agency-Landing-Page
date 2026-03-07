import "./category.css";
import settlelight from "../assets/settlelight.png";
import plane from "../assets/plane.png";
import mic from "../assets/mic.png";
import settings from "../assets/settings.png";

const Category = () => {
  return (
    <div>
        <div>
            <h1 className="category">CATEGORY</h1>
            <h2 className="offer">We Offer Best Services</h2>
        </div>
        {/* <div>
            <img src={settlelight} alt="settlelight-picture" />
            <img src={plane} alt="plane-picture" />
            <img src={mic} alt="mic-picture" />
            <img src={settings} alt="settings-picture" />
        </div> */}
    </div>
  )
}

export default Category