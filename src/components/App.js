import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from '../containers/Input_Bar'; 
import { Container, Card } from 'semantic-ui-react';
import { Cards } from '../containers/Cards';


class App extends Component {

  renderTodoLists(todoLists) {
    return(
      <Cards key={todoLists.id} todoLists={todoLists}/>
    )
  }


  render() {
    return (
      <div>
        <Container textAlign='center'>
          <h1>Todo Lists Redux Version</h1>
        </Container>
        <InputBar />
        <Card.Group> 
          {this.props.todoLists.map(this.renderTodoLists)}
        </Card.Group>
      </div>
    );
  }
}

function mapStateToProps({ todoLists }){
  return { todoLists }
}

export default connect(mapStateToProps)(App);

