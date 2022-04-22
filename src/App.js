import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Research from "./pages/Research";
import Result from "./pages/Result";
import Subjects from "./store/Subjects";

function App() {
  return (
    <Subjects>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Research" element={<Research />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </Subjects>
  );
}

export default App;
