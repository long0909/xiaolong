import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader, Button } from 'antd'
import { Trans } from "@lingui/macro"
import { t } from "@lingui/macro"
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

class FeedModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  formRef = React.createRef();

  // componentDidMount(){
  //   const {current,type} = this.props;
  //   console.log(current,type)
  //   if(type==2){
  //     this.formRef.current.setFieldsValue(current);
  //   }
  // }

  componentDidUpdate(prevProps) {
    // 典型用法（不要忘记比较 props）：

    const {current} = this.props
    // console.log(prevProps,this.props.visible !== prevProps.visible,prevProps.type,this.props.type)
    console.log(!prevProps.visible,this.props.visible,this.props.type)
    if (!prevProps.visible&&this.props.visible&&this.props.type==2) {
      setTimeout(()=>{
    console.log(this.formRef.current)
    console.log(current)
        this.formRef.current&&this.formRef.current.setFieldsValue({...current,gender:current.gender!=="False"});
      })

    }
  }

onFinish = (formData)=>{
  console.log(formData);
  const { onOk,onCancel } = this.props;
  onOk(formData);
  onCancel();
}
  render() {
    const { visible,type} = this.props
    const { current,onCancel } = this.props;
    return (
      <Modal visible = {visible} footer={ [] } onCancel={onCancel} destroyOnClose>{type}
        <Form ref={this.formRef}  name="control-ref" onFinish={this.onFinish} layout="horizontal" >
          <FormItem name='animal' rules={[{ required: true }]}
            label={t`Quantity`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='gender' rules={[{ required: true }]}
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
          <FormItem name='quantity' rules={[{ required: true }]}
            label={t`Quantity`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='area' rules={[{ required: true }]}
            label={t`Area`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='density' rules={[{ required: true }]}
            label={t`Density`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem >
            <Button type="primary" htmlType="submit" >submit</Button>
            <Button type="ghost" htmlType="submit" onClick={onCancel} >cancel</Button>
          </FormItem>
          </Form>
      </Modal>
    )
  }
}


export default FeedModal
