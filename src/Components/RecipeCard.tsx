import { Col, Divider, Row } from "antd";
import { useEffect, useState } from "react";
import { getMealById } from "../Common/api";
import { IMeal } from "../Common/types.d";

interface IProps {
  mealId: string;
}
const RecipeCard: React.FC<IProps> = (props) => {
  const { mealId } = props;

  const [mealData, setMealData] = useState<IMeal>();

  useEffect(() => {
    const fetchMealData = async () => {
      const res = await getMealById(mealId);

      setMealData(res.meals[0]);
    };

    fetchMealData();
  }, [mealId]);

  return (
    <div style={{ marginTop: 10 }}>
      {mealData && (
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
          </Col>
        </Row>
      )}

      <Divider />
    </div>
  );
};

export default RecipeCard;
