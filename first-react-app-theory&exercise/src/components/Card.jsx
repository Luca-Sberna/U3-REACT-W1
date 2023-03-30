import logo from "../logo.svg";
import BtnSave from "./BtnSave";

const Card = (props) => (
  <div className="card-container" style={{ backgroundColor: props.bgColor }}>
    <img src={logo} alt="img-card" />
    <div className="card-body">
      <h3 style={{ color: props.textColor }}>title: {props.title}</h3>
      <p style={{ color: props.textColor }}>test: {props.description}</p>
      <button className="card-btn" style={{ color: props.textColor }}>
        {props.titleBtn}
      </button>
      <BtnSave btnName="save" btnTextColor="white" btnBgColor="gray" />
    </div>
  </div>
);

export default Card;
