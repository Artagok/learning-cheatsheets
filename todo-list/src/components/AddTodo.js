import React, {Component} from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {
  
  // When we have an input field in the component
  // we usually want to manage it in the state 
  state = {
    title: ''
  }

  // We dont have to ComponentDrill up to App.js because 
  // we have state object here
  onChange = (e) => this.setState({title: e.target.value})

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '20px 50px'}}>
        <input 
          type='text' 
          name='title'
          style={{flex: '10', padding: '0 0.5rem'}}
          placeholder='Add anything!'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Add'
          className='btn'
          style={{flex: '1'}}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo : PropTypes.func.isRequired,
}

export default AddTodo;
