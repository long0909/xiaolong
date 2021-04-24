import React, { PureComponent } from 'react'
import List from './components/List'
import Filter from './components/Filter'
import Modal from './components/Modal'
import axios from 'axios'

class Feed extends React.Component {
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
  getTableData = async ()=> {
    
    const res = await axios.post('/api/feed/list');
    console.log(res.data.content.info_list, '----')
    this.setState({
      list: res.data.content.info_list,
    })
  }
  showModal = (type, data) => {
    this.setState({ visible: true ,type})
  }
  edit = async(data) => {
   
      this.setState({ visible: true, type:2,current:data })
    }
  submitEdit = async(data) => {
    console.log(data)
  const result = await axios.post('/api/feed/update', {
      project: data.project,
      time: data.time,
      animal: data.animal,
      feed: data.feed,
      id: this.state.current.id
    })
    this.getTableData()
    this.setState({ visible: false, type:1,current:{} })
  }
  submitAdd=async(data)=>{ 
    const result = await axios.post('/api/feed/add', {
      project: data.project,
      time: data.time,
      animal: data.animal,
      feed: data.feed
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
    const { visible, list ,type,current } = this.state
    return(
    <div>
      <Filter onClick={this.showModal} onChange={this.getTableData}/>
      <List
      edit={this.edit}
      getTableData = {this.getTableData} list={list} />
      <Modal
       visible={visible} 
       onOk={this.handleOk}
       type={type}
         current={current}
        onCancel={this.handleCancel}/>
	   </div>) 
  }
}


export default Feed
