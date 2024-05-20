import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./pages/About";
import Education from "./components/Education";
import Experience from './components/Experience';
import Skills from "./components/Skills";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Publication from "./components/Publication";


function App() {
  return (
    <Router>
       <div>
        <ScrollToTopButton />
        <Header />
        <Profile />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Publication />
        <Form />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
