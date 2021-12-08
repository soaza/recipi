import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getAllRecipeCategories } from "../Common/api";
import { IRecipeCategory } from "../Common/types.d";
import DefaultLayout from "../Components/DefaultLayout";
import RecipeCategoryCard from "../Components/RecipeCategoryCard";

const RecipesPage = () => {
  const [categories, setCategories] = useState<IRecipeCategory[]>();

  useEffect(() => {
    const loadRecipes = async () => {
      const res = await getAllRecipeCategories();

      setCategories(res.categories);
    };

    loadRecipes();
  }, []);

  return (
    <DefaultLayout>
      <Row gutter={[10, 10]}>
        {categories &&
          categories.map((category, index) => {
            return (
              <Col key={index}>
                <RecipeCategoryCard category={category} />
              </Col>
            );
          })}
      </Row>
    </DefaultLayout>
  );
};

export default RecipesPage;
