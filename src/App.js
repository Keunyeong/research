import { Route, Routes } from "react-router-dom";
import Research from "./pages/Research";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Research />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
