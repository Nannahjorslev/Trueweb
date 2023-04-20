
import phone from "../images/phone.webp";
import mail from "../images/mail.webp";
import instagram from "../images/instagram-icon.webp";
import facebook from "../images/facebook-icon.webp";
import linkedin from "../images/linkedin-icon.webp";
import logo from "../images/logo.webp";

import { NavLink } from "react-router-dom";


function Sidefod() {
    return (

        <div className="line mt-5 container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-5 mb-3">
                        <h5>Kontakt</h5>
                        <ul class="nav flex-column">

                            <li className="nav-item mb-2 phone-number"><img src={phone} width="15" /> +45 12 13 14 15</li>
                            <li className="nav-item mb-2 email"><img src={mail} width="15" /> mail@gmail.dk</li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 mb-3 text">
                        <h5>Følg os</h5>
                        <div className="icons mt-2">
                            <a href="https://www.instagram.com/" target="_blank"><img src={instagram} width="40" alt="ig" /></a>
                            <a href="https://www.facebook.com/" target="_blank"><img src={facebook} width="40" alt="fb" /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} width="40" alt="ig" /></a>
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <ul className="">
                            <img src={logo} width="300" alt="" />
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    );
} export default Sidefod;
