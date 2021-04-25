import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader,TimePicker ,Button} from 'antd'
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
    this.formRef = React.createRef();
    this.state = {
      visible: false
    }
  }
  componentDidUpdate(prevProps) {
    // 典型用法（不要忘记比较 props）：

    const {current} = this.props
    // console.log(prevProps,this.props.visible !== prevProps.visible,prevProps.type,this.props.type)
    console.log(!prevProps.visible,this.props.visible,this.props.type)
    if (!prevProps.visible&&this.props.visible&&this.props.type==2) {
      setTimeout(()=>{
        this.formRef.current&&this.formRef.current.setFieldsValue({...current,time:moment(current.time, 'HH:mm:ss')});
      })

    }
  }
  onFinish = (formData)=>{
    formData.time = moment(formData.time).format("HH:mm:ss");
    const { onOk,onCancel } = this.props;
    onOk(formData);
    onCancel();
  }
  handleCancel = () => {
    this.setState({
      visible:false
    });
  };
  onChange=(time, timeString)=> {
    console.log(time, timeString);
  }
  render() {
    const { onCancel,visible,type,current} = this.props
    return (
      <Modal visible = {visible} onCancel={onCancel} footer={ [] } >
        <Form  ref={this.formRef} name="control-ref" layout="horizontal" onFinish={this.onFinish}
        destroyOnClose >
          <FormItem name='project' rules={[{ required: true }]}
            label={t`Project`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='time' rules={[{ required: true }]}
            label={t`Time`} hasFeedback {...formItemLayout}>
            <TimePicker onChange={this.onChange} initialValues={moment('00:00:00', 'HH:mm:ss')} />
          </FormItem>
          <FormItem name='animal' rules={[{ required: true }]}
            label={t`Animal`} hasFeedback {...formItemLayout}>
             <Input />
          </FormItem>
          <FormItem name='feed' rules={[{ required: true }]}
          label={t`Feed`} hasFeedback {...formItemLayout}>
            <InputNumber min={1} max={100} />
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


export default FeedModal
