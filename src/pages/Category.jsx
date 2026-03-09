import "./category.css";
import Group4 from "../assets/Group4.png";
import category from "../assets/category.png";
import CategoryActive from "../assets/CategoryActive.png";
import localEvent from "../assets/localEvent.png";
import setting from "../assets/setting.png";


const Category = () => {
  return (
    <div>
        <div>
            <h1 className="category">CATEGORY</h1>
            <h2 className="offer">We Offer Best Services</h2>
            <img className="side-design-image" src={Group4} alt="side-design-image" />
        </div>
        <div className="box">
            <img className="settlelight" src={category} alt="settlelight-picture" />
            <img className="pl-picture" src={CategoryActive} alt="plane-picture" />
            <img className="mic" src={localEvent} alt="mic-picture" />
            <img className="settings" src={setting} alt="settings-picture" />
        </div>
    </div>
  )
}

export default Category