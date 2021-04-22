import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar,Tag, Space,Switch,Popconfirm } from 'antd'
import { Trans } from "@lingui/macro"

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
      //表格
      const bodyStyle = {
        bodyStyle: {
          height: 432,
          background: '#fff',
        },
      }
      const columns = [
        {
          title: <Trans>Number</Trans>,
          dataIndex: 'number',
          key: 'Number',
          render: (text,record) => <a>{record.name}</a>,
        },
        {
          title: <Trans>Animal</Trans>,
          dataIndex: 'animal',
          key: 'Animal',
        },
        {
          title: <Trans>Gender</Trans>,
          dataIndex: 'sex',
          key: 'sex',
        },
        {
          title: <Trans>Quantity</Trans>,
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: <Trans>Area</Trans>,
          dataIndex: 'area',
          key: 'area',
        },
        {
          title: <Trans>Density</Trans>,
          dataIndex: 'density',
          key: 'density',
        },
        {
          title: <Trans>Action</Trans>,
          key: 'action',
          render: (text, record) => (
            <Space size="middle" >
              <a onClick={()=>{onClick(2)}}>Update </a>
              <Popconfirm
                  title="确认删除吗？"
                  onConfirm={this.ok}
                  onCancel={this.cancel}
                  okText="是"
                  cancelText="否"
              >
                <a >Delete</a>
              </Popconfirm>
              
            </Space>
          ),
        },
      ];
      
      const data = [
        ,
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
