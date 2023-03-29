import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar brand="React Restaurant" claim="Best pasta in town!" />
      <Home />
    </>
  );
}

export default App;
