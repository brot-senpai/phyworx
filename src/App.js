import './App.css';


import Header from "./components/header/header2";


const contStyle = {
  backgroundColor: "#000",
  margin: 0,
  height: "100%",
  overflow: "hidden",
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
