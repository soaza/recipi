import { Layout, Menu } from "antd";

import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;

interface IProps {
  children?: any;
}

const DefaultLayout: React.FC<IProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            onClick={() => handleNavigation("/recipes")}
            key="1"
            icon={<SearchOutlined />}
          >
            View Recipes
          </Menu.Item>
          <Menu.Item
            onClick={() => handleNavigation("/saved")}
            key="2"
            icon={<HeartOutlined />}
          >
            My Recipes
          </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ margin: "16px 16px" }}>
        <div style={{ backgroundColor: "#fff", padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
