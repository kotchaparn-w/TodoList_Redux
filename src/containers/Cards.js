import React, { Component } from 'react';
import { Card, Input } from 'semantic-ui-react';
import  CardBtns  from './Card_Btns';


class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit : false
        };
        this.handleEditClicked = this.handleEditClicked.bind(this);
    }
    
    // create function to handle edit btn being clicked then set this state
    handleEditClicked(bool){
        this.setState({edit : bool});
    }
    render(){
        console.log(this.props);
        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.todoList.date}
                    </Card.Header>
                    <Card.Description>
                        {this.state.edit === true ? <Input focus placeholder='Type Here...' /> :this.props.todoList.note}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <CardBtns 
                    edit={this.state.edit}
                    handleEdit={this.handleEditClicked}/>
                </Card.Content>
            </Card>
        )
    }
    
}

export default Cards;