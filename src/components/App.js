import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from '../containers/Input_Bar'; 
import { Card } from 'semantic-ui-react';
import Cards  from '../containers/Cards';
import { MainHeader } from '../containers/MainHeader';
import todoLists from '../reducers/reducer_todoLists';
// import todoLists from '../reducers/reducer_todoLists';


class App extends Component {


  renderTodoLists() {
    console.log("props", this.props.todoLists)
    return (
      // create array with state obj to use .map in react
      Object.keys(this.props.todoLists).map(id=>{
        // passing each obj and id through Card component
      return(<Cards key={id} id={id} todoList={this.props.todoLists[id]}/>)
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

