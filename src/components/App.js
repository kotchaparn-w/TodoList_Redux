import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from '../containers/Input_Bar'; 
import { Container } from 'semantic-ui-react';


class App extends Component {

  renderTodoLists() {
    return this.props.todoLists.map(todoList=>{
      const { id, note } = todoList;
        return(
          <p key={id}>
          {id} : {note}
          </p>
        )
      }
    )
  }

  render() {
    return (
      <div>
        <Container textAlign='center'>
          <h1>Todo Lists Redux Version</h1>
        </Container>
        <InputBar />
        {this.renderTodoLists()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todoLists: state.todoLists
  }
}

export default connect(mapStateToProps)(App);

