//  import './App.css'
import Landing from "./sections/Landing";
import { Route, Routes } from "react-router-dom";
import Politics from "./sections/Politics";
import theme from "./theme/theme";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/politics" element={<Politics />} />
    </Routes>
  );
}

export default App;
