
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Get from "./components/Get.tsx";
import Post from "./components/Post.tsx";
import Delete from "./components/Delete.tsx";



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

