import logo from "../image/favicon_PP-png.png";
import "../style/landing.css";
import CrearMesa from "../components/CrearMesa";

const Landing = () => {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title-landing p1">Planning </h1>
      <h1 className="title-landing p2">Poker</h1>
      <CrearMesa />
    </div>
  );
};

export default Landing;
