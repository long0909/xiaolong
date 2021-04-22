import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Row, Col,Button} from 'antd'
import { Page, } from 'components'
import { Table, Tag, Space } from 'antd';
import {NumberCard} from './components'
import styles from './index.less'
import Modal from './components/Modal'


@connect(({ app, warning, loading }) => ({
warning, 
loading,
}))
class Warning extends React.Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.state = {
      visible: false
    }
  }
  showModal() {
    this.setState({ visible: true })
  }
  handleOk = () => {
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
        render: text => <a>{text}</a>,
      },
      {
        title: 'Temperature',
        dataIndex: 'temperature',
        key: 'temperature',
      },
      {
        title: 'Humidity',
        dataIndex: 'humidity',
        key: 'humidity',
      },
      {
        title: 'Body temperature',
        dataIndex: 'bodytemperature',
        key: 'body temperature',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={this.showModal}>Update</a>
          </Space>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        CO2: 100,
        temperature: '10000',
        humidity: '100',
        bodytemperature: '100',
        address: 'New York No. 1 Lake Park',
      },
    ];
    const { warning, loading } = this.props
    const {
      numbers,
    } = warning
    const arr = [data[0].CO2,data[0].temperature,data[0].humidity,data[0].bodytemperature];
    const numberCards = numbers.map((item, key) => (
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
        <Modal visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}/>
        <Table columns={columns} dataSource={data} onClick={this.showModal} pagination={false}/>
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
