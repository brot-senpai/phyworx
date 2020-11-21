import './App.css';


import Header from "./components/header/header";


const contStyle = {
  backgroundColor: "#000",
  width: "100%",
  height: "100%"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
