import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getMealById } from "../Common/api";
import { IMeal } from "../Common/types.d";
import DefaultLayout from "../Components/DefaultLayout";
import Loader from "../Components/Loader";

const RecipePage = () => {
  const mealId = new URL(window.location.href).searchParams.get(
    "mealId"
  ) as string;

  const [mealData, setMealData] = useState<IMeal>();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchMealData = async () => {
      setLoading(true);
      const res = await getMealById(mealId);

      setMealData(res.meals[0]);
      setLoading(false);
    };

    fetchMealData();
  }, [mealId]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes") as string)
      : [];

    if (savedRecipes.includes(mealId)) {
      setSaved(true);
    }
  }, [mealId]);

  const saveRecipe = () => {
    const savedRecipes = localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes") as string)
      : [];

    if (!savedRecipes.includes(mealId)) {
      savedRecipes.push(mealId);
      localStorage.setItem("recipes", JSON.stringify(savedRecipes));
      setSaved(true);
    }
  };

  return (
    <DefaultLayout>
      {loading && <Loader />}
      {!loading && mealData && (
        <Row justify="space-between">
          <Col span={10}>
            <img
              alt={mealData.idMeal}
              width="100%"
              src={mealData.strMealThumb}
            />
          </Col>
          <Col span={12}>
            <h1>{mealData.strMeal}</h1>
            <b> Instructions:</b>

            <p style={{ color: "gray" }}>{mealData.strInstructions}</p>

            <div style={{ marginBottom: 10 }}>
              <b>Ingredients:</b>
              {[...Array(10)].map((x, i) => {
                if ((mealData as any)[`strMeasure${i}`]) {
                  return (
                    <div key={i}>
                      ({(mealData as any)[`strMeasure${i}`]})
                      {(mealData as any)[`strIngredient${i}`]}
                    </div>
                  );
                } else {
                  return <div key={i} />;
                }
              })}
            </div>

            <p>
              <i>
                See more: <a href={mealData.strSource}> {mealData.strSource}</a>
              </i>
            </p>

            <Button disabled={saved} onClick={saveRecipe} type="primary">
              <HeartOutlined />
              {saved ? "Saved" : "Save"}
            </Button>
          </Col>
        </Row>
      )}
    </DefaultLayout>
  );
};

export default RecipePage;
