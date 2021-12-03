import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    render(){
        const { collapsed } = this.state;
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <div className="logo" />
                <Menu.Item key="1" icon={<UserOutlined />} title="User">
                  Profil
                </Menu.Item>
                <SubMenu key="sub1" icon={<DesktopOutlined />} title="Projekty">
                <Menu.Item key="3">Lista projektów</Menu.Item>
                  <Menu.Item key="4">Nowy projekt</Menu.Item>
                  <Menu.Item key="5">Moje projekty</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Layout>
        );
    }}

export default Navbar;