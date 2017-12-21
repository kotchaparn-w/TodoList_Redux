import React, { Component } from 'react';
import { Card, Input } from 'semantic-ui-react';
import  CardBtns  from './Card_Btns';
import { connect } from 'react-redux';
import  { bindActionCreators } from "redux";
import { editTodoLists } from '../actions/edit_todoLists';
import { deleteTodoLists } from '../actions/delete_todoLists';
import { completeTodoLists } from '../actions/complete_todoLists';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false,
            term: ''
        };
        this.handleComplete = this.handleComplete.bind(this);
        this.handleEditClicked = this.handleEditClicked.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    // create function to handle edit btn being clicked then set this state
    handleEditClicked(bool){
        this.setState({edit : bool});

        // only when users click save and input is not empty
        if(this.state.edit === true && this.state.term !== ''){
            // passing input value and its id to action creator
            this.props.editTodoLists(this.props.id, this.state.term);
        }
    }

    handleComplete(){
        this.props.completeTodoLists(this.props.id);
    }

    handleDelete(){
        this.props.deleteTodoLists(this.props.id);
    }

    handleInputValue(value){

        this.setState({term: value});
    }

    render(){
        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.todoList.date || this.props.todoList.newDate}
                    </Card.Header>
                    <Card.Description>
                        {this.state.edit === true ? <Input focus placeholder={this.props.todoList.note} 
                        onChange={(e)=>this.handleInputValue(e.target.value)}
                        /> :this.props.todoList.note}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CardBtns 
                    edit={this.state.edit}
                    handleEdit={this.handleEditClicked}
                    handleDelete={this.handleDelete}
                    handleComplete={this.handleComplete}
                    />
                </Card.Content>
            </Card>
        )
    }
    
}


function mapDispatchtoProps(dispatch){
    return bindActionCreators({ editTodoLists, deleteTodoLists, completeTodoLists },dispatch)
}

// passing null as first agr because we do not need any data from redux state
export default connect(null, mapDispatchtoProps)(Cards);