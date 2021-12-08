import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getMealById } from "../Common/api";
import { IMeal } from "../Common/types.d";
import DefaultLayout from "../Components/DefaultLayout";

const RecipePage = () => {
  const mealId = new URL(window.location.href).searchParams.get(
    "mealId"
  ) as string;

  const [mealData, setMealData] = useState<IMeal>();
  console.log(mealData);

  useEffect(() => {
    const fetchMealData = async () => {
      const res = await getMealById(mealId);
      setMealData(res.meals[0]);
    };

    fetchMealData();
  }, [mealId]);

  return (
    <DefaultLayout>
      {mealData && (
        <Row justify="space-between">
          <Col span={10}>
            <img width="100%" src={mealData.strMealThumb} />
          </Col>
          <Col span={12}>
            <h1>{mealData.strMeal}</h1>
            <b> Instructions:</b>

            <p style={{ color: "gray" }}>{mealData.strInstructions}</p>

            <p>
              <b>Ingredients:</b>
              {[...Array(10)].map((x, i) => {
                if ((mealData as any)[`strMeasure${i}`]) {
                  return (
                    <div>
                      ({(mealData as any)[`strMeasure${i}`]})
                      {(mealData as any)[`strIngredient${i}`]}
                    </div>
                  );
                }
              })}
            </p>

            <p>
              <i>
                See more: <a href={mealData.strSource}> {mealData.strSource}</a>
              </i>
            </p>
          </Col>
        </Row>
      )}
    </DefaultLayout>
  );
};

export default RecipePage;
