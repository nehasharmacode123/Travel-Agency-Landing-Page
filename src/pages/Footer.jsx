import "./footer.css";
import CompanyDesc from "../assets/CompanyDesc.png";

const Footer = () => {
  return (
    <div>
        <div>
            <img className="companyDesc" src={CompanyDesc} alt="Company-logo" />
        </div>
    </div>
  )
}

export default Footer;