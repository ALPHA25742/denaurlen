import { Link } from "react-router-dom";
import bgImage from "../assets/welcome/bg.svg";
import firstImage from "../assets/welcome/1.svg";
import secondImage from "../assets/welcome/2.svg";
import thirdImage from "../assets/welcome/3.svg";

export default function Welcome() {
  return (
    <>
      <section style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>Welcome to DENAURLEN</h1>
        <h2>Gamify with Smart Savvy Social Network</h2>
        <ul>
          <li>Activity to infinity</li>
          <img src={firstImage} alt="" />
          <li>One Platform Multiple Persona</li>
          <img src={secondImage} alt="" />
          <li>Real you, rewards for you!</li>
          <img src={thirdImage} alt="" />
        </ul>
        <Link
          to="/signup"
          style={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
