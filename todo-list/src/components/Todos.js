import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id}todo={todo} /> //When mapping we need an id
    ));
  }
}

export default Todos;
