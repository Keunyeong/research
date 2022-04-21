import { Route, Routes } from "react-router-dom";
import Research from "./pages/Research";
import Result from "./pages/Result";
import Subjects from "./store/Subjects";

function App() {
  return (
    <Subjects>
      <Routes>
        <Route path="/" element={<Research />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </Subjects>
  );
}

export default App;
