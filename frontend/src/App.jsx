import Header from "./components/Header";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Header />

      
      <Routes>
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/add" element={<AddPage />} /> 
        <Route path="/update/:id" element={<AddPage />} /> 
        <Route path="/view/:id" element={<ViewPage />} /> 
      </Routes>
    
    </div>
  );
}

export default App;
