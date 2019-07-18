import React, {Component} from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {

    // Destructuring todo object to get its fields
    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' 
                 onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo : PropTypes.object.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired,
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
}

export default TodoItem


// Canviar todo-list/package.json, les versions de react-scripts
// Video: minut 32:20