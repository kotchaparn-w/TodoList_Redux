import React, { Component } from 'react';
import { Popup, Button } from 'semantic-ui-react';

class CardBtns extends Component {
    constructor(props){
        super(props)
        this.renderBtns = this.renderBtns.bind(this);
        this.checkCompleted = this.checkCompleted.bind(this);
    }
    // create a function that will check if this.props.completed is true or false
    checkCompleted(TorF){
        if(this.props.completed === TorF) {
            return true
        } else {
            return false
        }
    }
  
    renderBtns(){
        if(this.props.edit === false){
            return(
                <div className='ui three buttons'>
                <Popup
                    trigger={<Button disabled={this.checkCompleted(true)} basic={this.checkCompleted(false)} icon='checkmark' color='green'
                    onClick={()=>this.props.handleComplete()}
                    ></Button>}
                    content='Complete'
                    inverted
                    position='bottom left'
                />
                <Popup
                    trigger={<Button basic icon='write' color='yellow'
                    onClick={()=>this.props.handleEdit(true)}
                    ></Button>}
                    content="Edit"
                    inverted
                    position="bottom center"
                /> 
                <Popup
                    trigger={<Button color='red' icon="close"
                    onClick={()=>this.props.handleDelete()}></Button>}
                    content="Delete"
                    inverted
                    position="bottom center"
                /> 
                </div>
            )
    
        } if(this.props.edit === true) {
            return(
                <div className='ui three buttons'>
                <Popup
                    trigger={<Button basic icon='save' color='green'
                    onClick={()=>this.props.handleEdit(false)}></Button>}
                    content='Save'
                    inverted
                    position='bottom left'
                />
                <Popup
                    trigger={<Button color='red' icon="close"
                    onClick={()=>this.props.handleDelete()}></Button>}
                    content="Delete"
                    inverted
                    position="bottom center"
                /> 
                </div>
            )
        }
    }

    render(){
        return(
            <div>
            {this.renderBtns()}
            </div>
        )
    }
    
}

export default CardBtns;