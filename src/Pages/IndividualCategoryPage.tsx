import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getRecipesByCategories } from "../Common/api";
import { IMeal } from "../Common/types.d";
import DefaultLayout from "../Components/DefaultLayout";
import MealCard from "../Components/MealCard";

const IndividualCategoryPage = () => {
  const category = new URL(window.location.href).searchParams.get(
    "category"
  ) as string;

  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    const fetchRecipesByCategory = async () => {
      const res = await getRecipesByCategories(category);
      setMeals(res.meals);
    };

    fetchRecipesByCategory();
  }, [category]);

  return (
    <DefaultLayout>
      <Row gutter={[20, 20]}>
        {meals.map((meal, index) => {
          return (
            <Col key={index}>
              <MealCard meal={meal} />
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
};

export default IndividualCategoryPage;
