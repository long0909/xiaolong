import React, { PureComponent } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
  ExportOutlined
} from '@ant-design/icons';
import style from './index.less'
import { Form, Input, InputNumber, Button ,message} from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Register extends PureComponent {
  state = {
    collapsed: false,
    list:[],
  };
  changePage = () => {
		let { history } = this.props
		history.push({pathname: '/login'})
	}
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleOk = async values => {
    try {
      let result = await axios.post('/api/user/register',values)   
      this.setState({
        list: result
      })
      message.info('Register success');
      this.changePage();
    } catch (error) {
      message.info('Register loser');
    }

    
  }
  render() {
    const { collapsed } = this.state;
    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
    };
    
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    return(<Layout style={{ minHeight: '100vh' }}>    
    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          智能养殖系统
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">register</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout className={style["site-layout"]}>
      <Header className={style["site-layout-background"]} style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>register</Breadcrumb.Item>
        </Breadcrumb>
        <div className={style["site-layout-background"]} style={{ padding: 24, minHeight: 360,  }}>
        <Link to="/login" style={{color:'#1890ff'}}>
          <div>返回上一级</div>
          </Link>
        <Form onFinish={this.handleOk} {...layout} name="nest-messages"  validateMessages={validateMessages} style={{ textAlign: 'center' }}>
      <Form.Item name={['username']} label="Username" rules={[{ required: true }]} >
        <Input />
      </Form.Item>
      <Form.Item name={['password']} label="Password" rules={[{ required: true }]} >
        <Input />
      </Form.Item>
      <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber style={{width:'100%'}} />
      </Form.Item>
      <Form.Item name={['phone']} label="Phone">
        <Input />
      </Form.Item>
      <Form.Item name={['introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>龙丽莎@2021 长沙理工大学城南学院毕设</Footer>
    </Layout>
  </Layout>);
  }
}

export default Register;
