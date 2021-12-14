import { useEffect, useState } from "react";
import DefaultLayout from "../Components/DefaultLayout";
import RecipeCard from "../Components/RecipeCard";

const SavedRecipePage = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes") as string)
      : [];

    setSavedRecipes(savedRecipes);
  }, []);
  return (
    <DefaultLayout>
      {savedRecipes.map((mealId, index) => {
        return <RecipeCard mealId={mealId} key={index} />;
      })}
    </DefaultLayout>
  );
};

export default SavedRecipePage;
