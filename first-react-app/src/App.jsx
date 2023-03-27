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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ClassComponents content=" Luca" />
          <label htmlFor="test">input react</label>
          <input id="test" type="text" />
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
