import { Route, Routes } from "react-router";
import "./App.css";
import IndividualCategoryPage from "./Pages/IndividualCategoryPage";
import RecipesPage from "./Pages/RecipesPage";

function App() {
  return (
    <Routes>
      <Route path="/saved" />
      <Route path="/categories" element={<IndividualCategoryPage />} />
      <Route path="/" element={<RecipesPage />} />
    </Routes>
  );
}

export default App;
