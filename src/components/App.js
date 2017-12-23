import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from '../containers/Input_Bar'; 
import { Card } from 'semantic-ui-react';
import Cards  from '../containers/Cards';
import  MainHeader  from '../containers/MainHeader';
import _ from 'lodash';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      page : "main"
    }
    this.changePage = this.changePage.bind(this);
  }

  renderTodoLists() {
    const todoLists = this.props.todoLists;
    console.log("redux state", todoLists);
    const createCards = function(TorF){
      return(
        // create an array with Object.keys that completed keys equal true or false
        Object.keys(_.pickBy(todoLists, _.matchesProperty('completed', TorF))).map(id=>{
        // passing each obj and id through Card component
        console.log(id);
        return(<Cards key={id} id={id} todoList={todoLists[id]}/>)
        })
      )
    }
    if(this.state.page === "main"){
      // return uncompleted lists
      return createCards(false);
    } else {
      // return completed lists
      return createCards(true);
    }
  }
  changePage(term){
    this.setState({page: term});
  }

  render() {
    return (
      <div>
        <MainHeader changePage={this.changePage}page={this.state.page}/>
        {this.state.page === "main" ? <InputBar /> : ""}   
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

