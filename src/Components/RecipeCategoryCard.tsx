import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import { IRecipeCategory } from "../Common/types.d";
import { Link, useNavigate } from "react-router-dom";

const { Paragraph } = Typography;

interface IProps {
  category: IRecipeCategory;
}

const RecipeCategoryCard: React.FC<IProps> = (props) => {
  const { category } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/categories?category=${category.strCategory}`);
  };

  return (
    <Card
      onClick={handleNavigate}
      hoverable
      style={{ width: 240, minHeight: 350 }}
      cover={<img alt={category.idCategory} src={category.strCategoryThumb} />}
    >
      <Meta
        title={category.strCategory}
        description={
          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: true,
            }}
          >
            {category.strCategoryDescription}
          </Paragraph>
        }
      />
    </Card>
  );
};

export default RecipeCategoryCard;
