import { useEffect, useState } from "react";
import { getMealById } from "../Common/api";
import { IMeal } from "../Common/types.d";
import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";

interface IProps {
  meal: IMeal;
}

const { Paragraph } = Typography;

const MealCard: React.FC<IProps> = (props) => {
  const { meal } = props;

  const [mealData, setMealData] = useState<IMeal>();

  useEffect(() => {
    const fetchMealData = async () => {
      const res = await getMealById(meal.idMeal);
      setMealData(res.meals[0]);
    };

    fetchMealData();
  }, [meal]);

  return (
    <Card
      hoverable
      style={{ width: 350, minHeight: 350 }}
      cover={<img alt={meal.idMeal} src={meal.strMealThumb} />}
    >
      <Meta
        title={meal.strMeal}
        description={
          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: true,
            }}
          ></Paragraph>
        }
      />
    </Card>
  );

  return <div />;
};

export default MealCard;
