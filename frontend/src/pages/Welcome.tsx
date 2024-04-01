import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <section>
        <h1>Welcome to DENAURLEN</h1>
        <h2>Gamify with Smart Savvy Social Network</h2>
        <ul>
          <li>Activity to infinity</li>
          <li>One Platform Multiple Persona</li>
          <li>Real you, rewards for you!</li>
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
