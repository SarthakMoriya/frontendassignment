import React from "react";
import "./Footer.css";
import { github, facebook, linkedin, twitter } from "../../assets/icons";

const Footer = () => {
  return (
    <footer>
      <div className="brand-name">ImageSpace</div>
      <div className="footer-2nd-column">
        <div className="icons">
          <div className="icons-div">
            <div>
              <img src={github} alt="socioIcon" width="20" />
              <h6>Github</h6>
            </div>
          </div>
          <div className="icons-div">
            <div>
              <img src={facebook} alt="socioIcon" width="20" />
              <h6>Facebook</h6>
            </div>
          </div>
          <div className="icons-div">
            <div>
              <img src={twitter} alt="socioIcon" width="20" />
              <h6>Twitter</h6>
            </div>
          </div>
          <div className="icons-div">
            <div>
              <img src={linkedin} alt="socioIcon" width="20" />
              <h6>Linkedin</h6>
            </div>
          </div>
        </div>
        <div className="newsLetter">
          <form action="">
            <label htmlFor="newsLetter">Subscribe To Our Newsletter</label>
            <div className="">
              <input type="email" id="newsLetter" required/>
              <button className="button-4" type="">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-links">
        <div className="">Contact us</div>
        <div className="">privacy policy</div>
        <div className="">terms of service</div>
        <div className="">blog</div>
      </div>
      <hr />
      <div className="copyright">Copyright © Enbiit & Company. 2022</div>
    </footer>
  );
};

export default Footer;
