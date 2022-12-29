import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import BookshelfPage from "./components/BookshelfPage";
import "../src"
import "./App.css"

function App() {
  return (
<div className="app">
      <Routes>
        <Route exact path="/" element={<BookshelfPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
export default App;