import { Layout, Menu } from "antd";

import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;

interface IProps {
  children?: any;
}

const DefaultLayout: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Link to="/recipes">
            <Menu.Item key="1" icon={<SearchOutlined />}>
              View Recipes
            </Menu.Item>
          </Link>
          <Menu.Item key="2" icon={<HeartOutlined />}>
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
