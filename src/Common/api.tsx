import axios from "axios";

export const getRecipeCategories = async () => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
