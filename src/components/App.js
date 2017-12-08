import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from '../containers/Input_Bar'; 
import { Card } from 'semantic-ui-react';
import Cards  from '../containers/Cards';
import { MainHeader } from '../containers/MainHeader';
// import todoLists from '../reducers/reducer_todoLists';


class App extends Component {

  renderTodoLists() {
    console.log("Todo Lists", this.props.todoLists);
    return (
      this.props.todoLists.map(todoList=>{
      return(<Cards key={todoList.id} todoList={todoList}/>)
      })
    )
  }


  render() {
    return (
      <div>
        <MainHeader />
        <InputBar />   
        <Card.Group>
          {this.renderTodoLists()}
        </Card.Group>
      </div>
    );
  }
}

function mapStateToProps({ todoLists }){
  return { todoLists }
}

export default connect(mapStateToProps)(App);

