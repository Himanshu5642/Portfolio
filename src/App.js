import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
