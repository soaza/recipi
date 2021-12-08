import axios from "axios";

export const getAllRecipeCategories = async () => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByCategories = async (category: string) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMealById = async (id: string) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
