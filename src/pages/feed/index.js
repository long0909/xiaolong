import React, { PureComponent } from 'react'
import List from './components/List'
import Filter from './components/Filter'
import Modal from './components/Modal'
import axios from 'axios'

// @connect(({ farm, loading }) => ({ farm, loading }))
class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.state = {
      visible: false
    }
  }
  showModal() {
    this.setState({ visible: true })
  }
  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state
    return(
    <div>
      <Filter onClick={this.showModal}/>
      <List onClick={this.showModal}  />
      <Modal visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}/>

      </div>) 
  }
}


export default Feed
