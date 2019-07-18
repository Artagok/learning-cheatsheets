import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Route} from 'react-router-dom'; // Routing module
import About from './components/pages/About';                     // localhost:3000/about
import axios from 'axios';     // http requests
                               //  * Fetch API - Regular JS
                               //  * axios - Library

class App extends Component {

  state = {
    todos: []
  }
  
  // Lifecycle Method
  // Run after mounting App Component
  componentDidMount() {
    // Query to a JSON file in a server, this returns a promise
    // .then(callback) to run something when the promise is fulfilled
    // In this case setState equal to the data we received from the query
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete 
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    /*
    const todosAux = this.state.todos;
    const newTodo = {
      id: todosAux.length > 0 ? todosAux[todosAux.length-1].id + 1 : 1,
      title, // ES6 title: title
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]}); */
    const newTodo = {
      title, 
      completed: false
    }
    axios.post('http://jsonplaceholder.typicode.com/todos', newTodo)
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
