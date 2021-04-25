import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Row, Col,Button} from 'antd'
import { Page, } from 'components'
import { Table, Tag, Space } from 'antd';
import {NumberCard} from './components'
import styles from './index.less'
import Modal from './components/Modal'
import axios from 'axios'
const  Color  =   {
  green: '#64ea91',
  blue: '#8fc9fb',
  purple: '#d897eb',
  red: '#f69899',
  yellow: '#f8c82e',
  peach: '#f797d6',
  borderBase: '#e5e5e5',
  borderSplit: '#f4f4f4',
  grass: '#d6fbb5',
  sky: '#c1e0fc',
}
@connect(({ app, warning, loading }) => ({
warning, 
loading,
}))
class Warning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      list:[],
      iist2:[],
      init:{}
    }
  }
  componentDidMount(){
    this.getTableData();
    this.getTableData2();
  }
  getTableData = async(warn_1)=>{
    console.log(warn_1, '-cvvv---')
    const res = await axios.post('/api/warning/get',{table:"warn_1"});
    this.setState({
      list:[res.data.content.warning_info]
    })
    console.log(res.data.content.warning_info,'warn');
  }
  getTableData2 = async()=>{
    const res = await axios.post('/api/warning/get',{table:"warn_2"});
    console.log(res,"^^^^^^^^^^^^^^^^");
    const obj = res.data.content.warning_info
    this.setState({
      list2:    [
        {
          icon: 'pay-circle-o',
          color: Color.green,
          title: 'CO2',
          number: obj.CO2,
        },
        {
          icon: 'team',
          color: Color.blue,
          title: 'Temperature',
          number: obj.Temperature,
        },
        {
          icon: 'message',
          color: Color.purple,
          title: 'Humidity',
          number: obj.Humidity,
        },
    
        {
          icon: 'shopping-cart',
          color: Color.red,
          title: 'Body temperature',
          number: obj.Bodytemperature,
        },
    
      ]
    })

  }

  showModal = (type,data)=>{
    if(type==2)
    this.setState({ 
      visible: true,
      init:data
    })
  }
  // handleOk = async (data) => {
  //   console.log(data, 111111)

  //   if(this.state.type==2){
  //     this.submitEdit(data)
  //     return;
  //   }
  // }
  // submitEdit = async(data) => {
  //   console.log(data)
  // await axios.post('/api/warning/update', {
  //    info:{
  //    C02:data.CO2,
  //    Temperature:data.Temperature,
  //    Humidity:data.Humidity,
  //    Bodytemperature:data.Bodytemperature,
  //   }, 
  //   table:"warn_1")
  //   this.getTableData()
  //   this.setState({visible: false})
  // }
  handleOk = async (data) => {
    await axios.post("/api/warning/update",
    {
         CO2:data.CO2,
         Temperature:data.Temperature,
         Humidity:data.Humidity,
         Bodytemperature:data.Bodytemperature,
         table:"warn_1"})
    this.getTableData()
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const bodyStyle = {
      bodyStyle: {
        height: 432,
        background: '#fff',
      },
    }
    
    const columns = [
      {
        title: 'CO2',
        dataIndex: 'CO2',
        key: 'CO2',
      },
      {
        title: 'Temperature',
        dataIndex: 'Temperature',
        key: 'Temperature',
      },
      {
        title: 'Humidity',
        dataIndex: 'Humidity',
        key: 'Humidity',
      },
      {
        title: 'Body temperature',
        dataIndex: 'Bodytemperature',
        key: 'Bodytemperature',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={()=>{this.showModal(2,record)}}>Update</a>
          </Space>
        ),
      },
    ];
    
    const { warning, loading } = this.props
    const {
      numbers,
    } = warning
    const {list} = this.state;
    const arr = list.length>0&&[list[0].CO2,list[0].Temperature,list[0].Humidity,list[0].Bodytemperature];
    const numberCards = (this.state.list2||[]).map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard dbData = {arr[key]} item={{...item}} />
      </Col>
    ))
    const { visible } = this.state
    return (
      <Page
        className={styles.warning}
      >  
        <h2>设置阈值 </h2>
        <Modal visible={visible} onOk={this.handleOk} init={this.state.init} onCancel={this.handleCancel}/>
        <Table columns={columns} dataSource={this.state.list} onClick={this.showModal} pagination={false} />
        <br/><br/>
        <h2>实时监控</h2>
        <Row gutter={24}>
          {numberCards}       
        </Row>
      </Page>
    )
  }
}

Warning.propTypes = {
  warning: PropTypes.object,
  loading: PropTypes.object,
}

export default Warning
