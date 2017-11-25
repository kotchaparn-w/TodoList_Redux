import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from "redux";
import { addTodoLists } from '../actions/add_todoLists';
import { Input, Grid, Button } from 'semantic-ui-react'

class InputBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    // handle value from input form then set to this component's state
    handleValue(value){
        this.setState({term : value});
    }

    // when user click then trigger redux action and pass state term as an argument
    handleOnClick(){
        this.props.addTodoLists(this.state.term);
    }

    render(){
        return(
            <Grid centered columns={2}>
                <Grid.Column>
                    <Input fluid type='text' placeholder='Todos...' 
                    value={this.state.term}
                    onChange={(e)=>this.handleValue(e.target.value)}
                        action={
                        <Button type='submit'
                        onClick={()=>this.handleOnClick()}
                        >
                        Add
                        </Button>
                    }/>
                </Grid.Column>
            </Grid>
        )
    }
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({ addTodoLists },dispatch)
}

export default connect(null, mapDispatchtoProps)(InputBar);