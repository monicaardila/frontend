import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './components/Archivos/Home'
import Footer from "./components/Archivos/Footer";
import Contacto from './components/Archivos/Contacto'
import Header from "./components/Page/Header/Header";
function App(){
  return(
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Contacto" exact component={() => <Contacto />} />
        </Switch>
        <Footer />
      </Router>,
    </div>
  );
}

export default App;
