import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getAllRecipeCategories } from "../Common/api";
import { IRecipeCategory } from "../Common/types.d";
import DefaultLayout from "../Components/DefaultLayout";
import Loader from "../Components/Loader";
import RecipeCategoryCard from "../Components/RecipeCategoryCard";

const RecipesPage = () => {
  const [categories, setCategories] = useState<IRecipeCategory[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      const res = await getAllRecipeCategories();

      setCategories(res.categories);
      setLoading(false);
    };

    loadRecipes();
  }, []);

  return (
    <DefaultLayout>
      {loading && <Loader />}

      {!loading && categories && (
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
      )}
    </DefaultLayout>
  );
};

export default RecipesPage;
