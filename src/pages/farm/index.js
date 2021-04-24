import React, { PureComponent } from 'react'
import List from './components/List'
import Filter from './components/Filter'
import Modal from './components/Modal'
import axios from 'axios'

class Farm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      type: 1,
      list: [],
      current:{}
    }
  }

  componentDidMount() {
    this.getTableData()
  }

   getTableData = async (v)=> {
    console.log(v, '-cvvv---')

    // const res = await axios.post('/api/farm/list');
    const res = await axios.post('/api/farm/list', { animal: v })
    console.log(res.data.content.info_list, '----')

    this.setState({
      list: res.data.content.info_list,
    })
  }
  showModal = (type, data) => {
    this.setState({ visible: true, type })
  }
  edit = async(data) => {
   
      this.setState({ visible: true, type:2,current:data })
    }
  submitEdit = async(data) => {
    console.log(data)
  const result = await axios.post('/api/farm/update', {
      animal: data.animal,
      gender: data.gender,
      quantity: data.quantity,
      area: data.area,
      density: data.density,
      id: this.state.current.id
    })
    this.getTableData()
    this.setState({ visible: false, type:1,current:{} })
  }
  submitAdd=async(data)=>{ 
    const result = await axios.post('/api/farm/add', {
      animal: data.animal,
      gender: data.gender,
      quantity: data.quantity,
      area: data.area,
      density: data.density,
    })
    this.getTableData()
  }
  handleOk = async (data) => {
    console.log(data, 111111)

    if(this.state.type==2){
      this.submitEdit(data)
      return;
    }
    this.submitAdd(data)

  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible, list ,type,current} = this.state
    return (
      <div>
        <Filter onClick={this.showModal} onChange={this.getTableData} />
        <List
         edit={this.edit}
        getTableData = {this.getTableData} list={list} />
        <Modal
          visible={visible}
          onOk={this.handleOk}
          type={type}
          current={current}
          onCancel={this.handleCancel}
        />
      </div>
    )
  }
}

export default Farm
