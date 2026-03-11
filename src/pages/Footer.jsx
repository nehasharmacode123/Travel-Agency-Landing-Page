import "./footer.css";
import CompanyDesc from "../assets/CompanyDesc.png";
import outbound from "../assets/outbound.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-page">
          <div className="footer-section">
            <img className="companyDesc" src={CompanyDesc} alt="Company-logo" />
          </div>

          <div className="page-information">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </div>

          <div>
            <h4>More</h4>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>

          <div>
            <img src={outbound} alt="outbound-image" />
            <p>All rights reserved@jadoo.co</p>
          </div>

        </div>
    </div>
  )
}

export default Footer;