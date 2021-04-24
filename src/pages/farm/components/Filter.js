import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Trans } from '@lingui/macro'
import { t } from '@lingui/macro'
import { Button, Row, Col, DatePicker, Form, Select } from 'antd'
import axios from 'axios'

const { Option } = Select

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: [],
    }
  }
  componentWillMount() {
    this.getOptionList()
  }
  async getOptionList() {
    const res = await axios.post('/api/farm/list')
    console.log(res)

    this.setState({
      select: res.data.content.info_list,
    })
    console.log(res.data.content.info_list, 'select')
  }



  onBlur() {
    console.log('blur')
  }

  onFocus() {
    console.log('focus')
  }

  onSearch(val) {
    console.log('search:', val)
  }

  render() {
    const { onClick ,onChange} = this.props
    const { select } = this.state
    console.log(select)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder={t`Select a animal`}
              optionFilterProp="children"
              onChange={onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              // value={this.state.select}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key={'all'} value={''}>all</Option>
              {select.map(item=>{
                return  <Option key={item.id} value={item.animal}>{item.animal}</Option>

              })}
            </Select>
          </Col>
          <Col></Col>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            <Button
              type="ghost"
              onClick={() => {
                onClick(1)
              }}
            >
              <Trans>Create</Trans>
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Filter
