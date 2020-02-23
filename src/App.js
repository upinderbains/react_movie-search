import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Search from "./components/layout/Search/Search";
import { GlobalProvider } from "./GlobalState/GlobalState";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";

function App() {
  return (
    <div>
      <Navbar />
      <GlobalProvider>
        <Search />
        <MoviesContainer />
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
