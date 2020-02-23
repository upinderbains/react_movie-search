import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { GlobalProvider } from "./GlobalState/GlobalState";
import FirstPage from "./components/layout/FirstPage/FirstPage";
import Movie from "./components/MoviesContainer/Movie";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <GlobalProvider>
        <Router>
          <div>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
