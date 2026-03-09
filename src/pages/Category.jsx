import "./category.css";
import Group4 from "../assets/Group4.png";
import Group48 from "../assets/Group48.png";


const Category = () => {
  return (
    <div>
        <div>
            <h1 className="category">CATEGORY</h1>
            <h2 className="offer">We Offer Best Services</h2>
            <img className="side-design-image" src={Group4} alt="side-design-image" />
        </div>
        <div className="box">
            <img className="settlelight" src={Group48} alt="settlelight-picture" />
            <img className="plane1" src={} alt="plane-picture" />

            <img className="rectangle2" src={Rectangle157} alt="rectangle157" />
            <img className="mic" src={mic} alt="mic-picture" />
            <img className="settings" src={settings} alt="settings-picture" />
        </div>
    </div>
  )
}

export default Category