import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

	state = {
		todos: [
			{id:'001',name:'看電視',done:true},
			{id:'002',name:'寫字',done:false},
			{id:'003',name:'洗碗',done:true}
		]
	}

	addTodo = (todoObj) => {
		const {todos} = this.state
		const newTodo = [todoObj, ...todos]
		this.setState({todos: newTodo})
	}

	updateTodo = (id,done) => {
		const {todos} = this.state
		const newTodo = todos.map( todoObj => {
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos: newTodo})
	}

	deleteTodo = (id) => {
		const {todos} = this.state
		const newTodo = todos.filter( todoObj => {
			return todoObj.id !== id
		})
		this.setState({todos: newTodo})
	}

	checkAllTodo = (done) => {
    const { todos } = this.state

    const newTodos = todos.map( todoObj => {
       return {...todoObj, done }
    })

    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const { todos } = this.state

    const newTodos = todos.filter( todoObj => {
       return !todoObj.done
    })

    this.setState({todos:newTodos})
  }

	render() {
		const { todos } = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List 
						todos={todos} 
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}
					/>
					<Footer 
						todos={todos}
						checkAllTodo={this.checkAllTodo}
						clearAllDone={this.clearAllDone} />
				</div>
			</div>
  	)
	}
}