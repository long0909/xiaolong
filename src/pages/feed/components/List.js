import React from 'react'
import PropTypes from 'prop-types'
import { t } from "@lingui/macro"
import { Table, Modal, Avatar,Tag, Space,Switch,Popconfirm } from 'antd'


const { confirm } = Modal
var ok = ()=>{
  const { dispatch } = this.props;
  }
  
  var cancel = ()=>{
    
  }
class List extends React.Component{
 
    render(){
    //开关
    const { onClick } = this.props
    function onChange(checked) {
      console.log(`switch to ${checked}`);
    }
      //表格
      const bodyStyle = {
        bodyStyle: {
          height: 432,
          background: '#fff',
        },
      }
      const columns = [
        {
          title: 'Project',
          dataIndex: 'project',
          key: 'project',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Time',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: 'Animal',
          dataIndex: 'animal',
          key: 'animal',
        },
        {
          title: 'Feed',
          dataIndex: 'feed',
          key: 'feed',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle" >
              <a onClick={onClick}>Update </a>
              <Popconfirm
                  title="确认删除吗？"
                  onConfirm={this.ok}
                  onCancel={this.cancel}
                  okText="是"
                  cancelText="否"
              >
              <a >Delete</a>
              </Popconfirm>
              <Switch defaultChecked onChange={onChange} />
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ];
    return (
      <>
      <Table columns={columns} dataSource={data} />
      </>
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
