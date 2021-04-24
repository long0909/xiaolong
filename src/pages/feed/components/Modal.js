import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader,TimePicker } from 'antd'
import { Trans } from "@lingui/macro"
import { t } from "@lingui/macro"
import moment from 'moment'
import axios from 'axios'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

class FeedModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }


  render() {
    const { visible, onCancel,onOk} = this.props
   // const showModal = () => {
     // this.setState(true);
    //};
  
    // const handleOk = () => {
    //     this.setState(false);
    // };
  
    const handleCancel = () => {
      this.setState({
        visible:false
      });
    };
    function onChange(time, timeString) {
      console.log(time, timeString);
    }
    return (
      <Modal visible = {visible} onOk={onOk} onCancel={onCancel}>
        <Form  name="control-ref" layout="horizontal">
          <FormItem name='Project' rules={[{ required: true }]}
            label={t`Project`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='Time' rules={[{ required: true }]}
            label={t`Time`} hasFeedback {...formItemLayout}>
            <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </FormItem>
          <FormItem name='Animal' rules={[{ required: true }]}
            label={t`Animal`} hasFeedback {...formItemLayout}>
             <Input />
          </FormItem>
          <FormItem name='Feed' rules={[{ required: true }]}
          label={t`Feed`} hasFeedback {...formItemLayout}>
            <InputNumber min={1} max={100}/>  kg
          </FormItem>
          </Form>
      </Modal>
    )
  }
}


export default FeedModal
