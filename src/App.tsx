import { Route, Routes } from "react-router";
import "./App.css";
import RecipesPage from "./Pages/RecipesPage";

function App() {
  return (
    <Routes>
      <Route path="/food" />
      <Route path="/saved" />
      <Route path="/" element={<RecipesPage />} />
    </Routes>
  );
}

export default App;
