import React from 'react'
import PropTypes from 'prop-types'
import { t } from '@lingui/macro'
import { Table, Modal, Avatar, Tag, Space, Switch, Popconfirm } from 'antd'
import axios from 'axios'

const { confirm } = Modal

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  //当组件输出到 DOM 后会执行 componentDidMount()

  componentDidMount() {
    this.getTableData()
  }

  cancel() {}
  async ok(values) {
    console.log(values)
    result = await axios.post('/api/feed/delete', { feed_id: values.id * 1 })
    this.getTableData()
  }
  onChange = async (checked) => {
    console.log(`switch to ${checked}`)
    const result = await axios.post('/api/feed/update', {
      close_status: checked ? 1 : 0,
    })
    this.getTableData()
  }
  async getTableData() {
    const res = await axios.post('/api/feed/list')
    this.setState({
      list: res.data.content.info_list,
    })
    console.log(res.data.content.info_list, '--')
  }
  render() {
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
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
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
          <Space size="middle">
            <a
              onClick={() => {
                onClick(2)
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
            <Switch checked={record.close_status} onChange={this.onChange} />
          </Space>
        ),
      },
    ]

    return (
      <>
        <Table columns={columns} dataSource={this.state.list} />
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
