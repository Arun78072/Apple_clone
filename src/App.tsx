import React from "react";
import Home from "./pages/Home";
import Layout from "./component/layout";
import './App.css';
function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
