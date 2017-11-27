import React from 'react';
import { Button, Card, Popup } from 'semantic-ui-react';


export const Cards = (props)=>{
    
    return(
        <Card>
            <Card.Content>
                <Card.Header>
                    {props.todoList.date}
                </Card.Header>
                <Card.Description>
                    {props.todoList.note}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui three buttons'>
                <Popup
                    trigger={<Button basic icon='checkmark' color='green'></Button>}
                    content='Done'
                    inverted
                    position='bottom left'
                />
                <Popup
                    trigger={<Button basic icon='write' color='yellow'></Button>}
                    content="Edit"
                    inverted
                    position="bottom center"
                /> 
                <Popup
                    trigger={<Button color='red' icon="close"></Button>}
                    content="Delete"
                    inverted
                    position="bottom center"
                /> 
                </div>
            </Card.Content>
        </Card>
    )
}