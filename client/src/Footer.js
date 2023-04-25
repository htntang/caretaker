import { Link } from "react-router-dom";

export default function Footer(){
    return(
    <footer>
      <div className="row">
        <div className="column">
          <img src=""></img>
        </div>
        <div className="column">
          <img src=""></img>
        </div>
        <div className="column">
          <a href="/resources" className="footer-link">Resources</a>
          <br></br>
          <a href="/mission" className="footer-link">Our Mission</a>
          <br></br>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
      </div>
    </footer>
    )
}