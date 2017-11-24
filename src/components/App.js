import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  render() {
    console.log(this.props.todoLists)
    return (
      <div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    todoLists: state.todoLists
  }
}

export default connect(mapStateToProps)(App);

