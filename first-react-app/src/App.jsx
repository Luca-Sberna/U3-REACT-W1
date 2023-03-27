import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponents";
import Card from "./components/Card";
import ClassComponents from "./components/ClassComponents";

//jsx è html in JS , accetta contenuto dinamico delimitato da {}
//la particolarità principale è l'utilizzo di className
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="cont-logo">
            <div className="logo-welcome">
              <img src={logo} className="App-logo" alt="logo" />
              <ClassComponents content=" Luca" />
            </div>
            <div className="input">
              <label htmlFor="test"></label>
              <input id="test" type="text" placeholder="input react" />
            </div>
          </div>
          <MyComponent />
        </header>
      </div>

      <main>
        <div className="container">
          <Card
            title="React"
            description="is now"
            bgColor="green"
            titleBtn="Aggiungi"
          />

          <Card
            title="React"
            description="is now"
            bgColor="red"
            titleBtn="Aggiungi"
            textColor="white"
          />
          <Card
            title="React"
            description="is now"
            bgColor="blue"
            titleBtn="Aggiungi"
            textColor="white"
          />
          <Card
            title="React"
            description="is now"
            bgColor="white"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="yellow"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="purple"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="brown"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="orange"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="gray"
            titleBtn="Aggiungi"
          />
          <Card
            title="React"
            description="is now"
            bgColor="violet"
            titleBtn="Aggiungi"
            textColor="white"
          />
          <Card
            title="React"
            description="is now"
            bgColor="green"
            titleBtn="Aggiungi"
          />
        </div>
      </main>
    </>
  );
}

export default App;
