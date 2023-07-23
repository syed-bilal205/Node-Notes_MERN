import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNote from "./routes/Home/Add-note";
import Note from "./routes/Home/note";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/notes/:id" element={<Note />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
