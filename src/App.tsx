import { Route, Routes } from "react-router";
import "./App.css";
import IndividualCategoryPage from "./Pages/IndividualCategoryPage";
import RecipePage from "./Pages/RecipePage";
import RecipesPage from "./Pages/RecipesPage";
import SavedRecipePage from "./Pages/SavedRecipePage";

function App() {
  return (
    <Routes>
      {/* Static routes */}
      <Route path="/saved" element={<SavedRecipePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      {/* Dynamic routes */}
      <Route path="/categories" element={<IndividualCategoryPage />} />
      <Route path="/recipe" element={<RecipePage />} />
      <Route path="/" element={<RecipesPage />} />
    </Routes>
  );
}

export default App;
