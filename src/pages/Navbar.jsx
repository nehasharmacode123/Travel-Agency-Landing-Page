import { useState } from "react";
import logo from "../assets/logo.png";
import { FaCirclePlay } from "react-icons/fa6";
import "./navbar.css";
import decore from "../assets/Decore.png";
import girl from "../assets/girl.png";
import plane from "../assets/plane.png";
import brush from "../assets/brush.png";
import CTA from "../assets/CTA.png";
import playbutton from "../assets/playbutton.png";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div>
      <div className="jadoo-logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="navbar-design">
        <h2 className="destination2">Destinations</h2>
        <h2 className="hotels">Hotels</h2>
        <h2 className="flights">Flights</h2>
        <img className="decoration" src={decore} alt="background decoration" />
        <img className="girlPicture" src={girl} alt="girl-picture" />
        <img className="plane1" src={plane} alt="plane-image" />
        <img className="plane2" src={plane} alt="plane-image" />
        <h2 className="booking">Bookings</h2>
        <h2 className="login">Login</h2>
        <button className="sign-up">Sign up</button>

        {/* Language Dropdown button */}

        <div className="dropdown">
          <button className="language-btn" onClick={() => setOpen(!open)}>
            {language} ⌄
          </button>
          {open && (
            <div className="dropdown-menu">
              <p onClick={() => selectLanguage("EN")}>EN</p>
              <p onClick={() => selectLanguage("HIN")}>HIN</p>
              <p onClick={() => selectLanguage("FR")}>FR</p>
            </div>
          )}
        </div>

            <div>
                <div className="destinations">
                    <h3>BEST DESTINATIONS AROUND THE WORLD</h3>

                    <h1 className="title">Travel,  <span className="highlight">
                        enjoy </span> <br /> and live a new <br /> and full life</h1>
                        <img className="brush" src={brush} alt="brush-image" />

                        <p>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>
                    <div>
                        <div className="find-out">
                            <img className="cta" src={CTA} alt="CTA-button" />
                            <img className="play-button" src={playbutton} alt="playbutton-image" />
                            <p>Play Demo</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
