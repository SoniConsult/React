import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Get from "./components/Get.jsx";
import Post from "./components/Post.jsx";
import Delete from "./components/Delete.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get/:id" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
