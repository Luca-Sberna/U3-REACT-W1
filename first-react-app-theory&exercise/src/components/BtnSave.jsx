const BtnSave = (props) => (
  <>
    <button
      className="card-btn card-btn-save"
      style={{ color: props.btnTextColor, backgroundColor: props.btnBgColor }}
    >
      {props.btnName}
    </button>
  </>
);

export default BtnSave;
