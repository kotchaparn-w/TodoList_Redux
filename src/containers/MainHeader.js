import React, { Component }from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';

export default class MainHeader extends Component {

    render(){
        return(
            <Segment clearing>
                <Header as='h2' floated='left'>
                To do List Redux no server
                </Header>
                <Header as='h2' color='green'floated='right'>
                    {this.props.page === "main" ? 
                        <Button 
                        positive
                        onClick={()=>this.props.changePage("completedLists")}
                        >
                        Completed Lists
                        </Button> 
                        : 
                        <Button 
                        negative
                        onClick={()=>this.props.changePage("main")}
                        >
                        Back
                        </Button>
                    }
                </Header>
            </Segment>
        )
    } 
}