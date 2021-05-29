import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  // 對接收的props進行：類型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {keyCode,target} = event
    if (keyCode !== 13) return
    if (target.value.trim() === "") {
      alert('輸入的值不得為空')
      return
    }
    const todoObj = {id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value=""
  }

  render() {
    return (
      // 將App裡的<div className='todo-header'>...</div>剪到這裡
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按下Enter鍵確認" />
      </div>
    )
  }
}
