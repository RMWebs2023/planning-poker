import logo from "../image/favicon_PP-png.png";
import "../style/landing.css";

const Landing = () => {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title-landing p1">Planning </h1>
      <h1 className="title-landing p2">Poker</h1>
      <div>
        <button>Crear Mesa</button>
      </div>
    </div>
  );
};

export default Landing;
