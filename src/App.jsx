import { useState } from "react";
import portrait from "./assets/Rectangle90.png";
import "./App.css";
import twitter from "./assets/TwitterIcon.png";
import facebook from "./assets/FacebookIcon.png";
import instagram from "./assets/InstagramIcon.png";
import github from "./assets/GitHubIcon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <img src={portrait} />
        <div className="card--2">
          <h2 className="card--h2">Laura Smith</h2>
          <h5 className="card--h5">Frontend Developer</h5>
          <h6 className="card--h6">laurasmith.website</h6>
          <button className="button1"></button>
          <button className="button2"></button>
          <div className="text">
            <h2 className="text--h2">About</h2>
            <h5 className="text--h5">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </h5>
            <h2 className="text--h2">Interests</h2>
            <h5 className="text--h5">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </h5>
          </div>
        </div>
        <div className="card--3">
          <img src={twitter} className="card3--image" />
          <img src={facebook} className="card3--image" />
          <img src={instagram} className="card3--image" />
          <img src={github} className="card3--image" />
        </div>
      </div>
    </>
  );
}

export default App;
