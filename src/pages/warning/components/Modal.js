import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader ,Button} from 'antd'
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
      visible: false,
      init:{}
    }
  }

componentWillReceiveProps(nextProps){
  const { init } = nextProps;
  console.log(init,'123123123123');
  this.setState({
    init
  })
}

  onFinish = (formData)=>{
    console.log(formData);
    const { onOk,onCancel } = this.props;
    onOk(formData);
    onCancel();
  }

  render() {
    const { visible, onCancel,onOk} = this.props
  
    return (
      <Modal visible = {visible} onCancel={onCancel} footer={[]} >
        <Form  name="control-ref" layout="horizontal" initialValues={this.state.init} onFinish={this.onFinish}>
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
          <FormItem name='Bodytemperature' rules={[{ required: true }]}
            label={t`Bodytemperature`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem >
          <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <Button type="primary" htmlType="submit" style={{marginRight:"50px"}}>submit</Button>
            <Button type="ghost" htmlType="submit" onClick={onCancel} >cancel</Button>
            </div>
          </FormItem>
          </Form>
      </Modal>
    )
  }
}


export default WarningModal 

