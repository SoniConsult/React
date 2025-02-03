
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Get from "./components/Get.js";
import Post from "./components/Post.js";
import Delete from "./components/Delete.js";



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

