import logo from "../logo.svg";
//versione normale

/* const MyComponent = () => {
  return (
    <>
      <li></li>
    </>
  );
}; */

//versione abbreviata

const MyComponent = () => (
  <>
    <h2>Eccola la prima lista</h2>
    <img src={logo} alt="logo" style={{ height: "2rem" }} />

    <ul>
      <li>React List</li>
      <li>React List</li>
      <li>React List</li>
      <li>React List</li>
    </ul>
  </>
);

export default MyComponent;
