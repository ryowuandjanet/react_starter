import React,{ Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成數
    const doneCount =  todos.reduce((pre,todo)=> pre+(todo.done ? 1 : 0),0)
    console.log('%%',doneCount)
    // 總數
    const total =todos.length

    return (
      // 將App裡的<div className='todo-footer'>...</div>剪到這裡
      <div className="todo-footer">
        <label>
          <input 
            type="checkbox" 
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false } />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handClearAllDone} className="btn btn-danger">清除已完成任務</button>
      </div>
    )
  }
}
