//  import './App.css'
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Politics from "./pages/Politics";
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
