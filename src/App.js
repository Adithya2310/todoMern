import React from "react";
import Header from "./components/Header";
import TodoElem from "./components/TodoElem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <TodoElem />
      </header>
    </div>
  );
}

export default App;
