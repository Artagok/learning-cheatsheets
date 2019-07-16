import React, {Component} from 'react'

class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

export default TodoItem


// Canviar todo-list/package.json, les versions de react-scripts
// Video: minut 32:20