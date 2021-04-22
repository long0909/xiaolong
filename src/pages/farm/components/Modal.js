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

class FeedModal extends React.Component {
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
          <FormItem name='Animal' rules={[{ required: true }]}
            label={t`Quantity`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='isMale' rules={[{ required: true }]}
            label={t`Gender`} hasFeedback {...formItemLayout}>
            <Radio.Group>
              <Radio value>
                <Trans>Male</Trans>
              </Radio>
              <Radio value={false}>
                <Trans>Female</Trans>
              </Radio>
            </Radio.Group>
          </FormItem>
          <FormItem name='Quantity' rules={[{ required: true }]}
            label={t`Quantity`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='Area' rules={[{ required: true }]}
            label={t`Area`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='Density' rules={[{ required: true }]}
            label={t`Density`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          </Form>
      </Modal>
    )
  }
}


export default FeedModal
