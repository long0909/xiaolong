import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import { Trans } from "@lingui/macro"
import { t } from "@lingui/macro"

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

class WarningModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }


  render() {
    const { visible, onCancel,onOk} = this.props
  
    return (
      <Modal visible = {visible} onOk={onOk} onCancel={onCancel}>
        <Form  name="control-ref" layout="horizontal">
          <FormItem name='CO2' rules={[{ required: true }]}
            label={t`CO2`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='Temperature' rules={[{ required: true }]}
            label={t`Temperature`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='Humidity' rules={[{ required: true }]}
            label={t`Humidity`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='body temperature' rules={[{ required: true }]}
            label={t`body temperature`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          </Form>
      </Modal>
    )
  }
}


export default WarningModal 

