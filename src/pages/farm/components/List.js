import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar, Tag, Space, Switch, Popconfirm } from 'antd'
import { Trans } from '@lingui/macro'
import axios from 'axios'

const { confirm } = Modal

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // list:[],
    }
  }
  //当组件输出到 DOM 后会执行 componentDidMount()

  cancel() {}
  async ok(values) {
    console.log(values)
    const result = await axios.post('/api/farm/delete', { farm_id: values.id * 1 })
    this.props.getTableData()
  }

  render() {
    //开关
    const { record, edit } = this.props
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
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: <Trans>Animal</Trans>,
        dataIndex: 'animal',
        key: 'animal',
      },
      {
        title: <Trans>Gender</Trans>,
        dataIndex: 'gender',
        key: 'gender',
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
          <Space size="middle">
            <a
              onClick={() => {
          
                edit(record)
              }}
            >
              Update{' '}
            </a>
            <Popconfirm
              title="确认删除吗？"
              onConfirm={(e) => {
                this.ok(record)
              }}
              onCancel={this.cancel}
              okText="是"
              cancelText="否"
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ),
      },
    ]

    return (
      <>
        <Table columns={columns} dataSource={this.props.list} />
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
