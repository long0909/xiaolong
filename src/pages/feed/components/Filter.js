import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Trans } from "@lingui/macro"
import { Button, Row, Col, Form, Input } from 'antd'
import { Select } from 'antd';

const { Option } = Select
const { Search } = Input

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
  constructor(props){
    super(props);
    this.state={value:'null'};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
  }

  render() {
    const { onClick} = this.props
    return (
      <Form onSubmit={this.handleSubmit}> 
        <Row gutter={24}>
         <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
             <Button type="ghost" onClick={onClick}>
                <Trans>Create</Trans>
              </Button>
      </Col>
        </Row>
      </Form>
    )
  }
}

export default Filter
