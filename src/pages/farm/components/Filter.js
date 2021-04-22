import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Trans } from "@lingui/macro"
import { t } from "@lingui/macro"
import { Button, Row, Col, DatePicker, Form,  Select } from 'antd'

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
    super(props);
    this.state = { value: 'null' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    function onChange(value) {
      console.log(`selected ${value}`);
    }

    function onBlur() {
      console.log('blur');
    }

    function onFocus() {
      console.log('focus');
    }

    function onSearch(val) {
      console.log('search:', val);
    }
    const { onClick } = this.props
    return (
      <Form onSubmit={this.handleSubmit} >
        <Row gutter={24}>
        <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
          <Select 
            showSearch
            style={{ width: 200 }}
            placeholder={t`Select a animal`}
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          </Col>
          <Col ></Col>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
            <Button type="ghost" onClick={()=>{onClick(1)}}>
              <Trans>Create</Trans>
            </Button>
          </Col>
        </Row>
        
      </Form>
    )
  }
}

export default Filter
