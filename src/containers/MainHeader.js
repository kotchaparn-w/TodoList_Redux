import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

export const MainHeader = ()=> {
    return(
        <Segment clearing>
            <Header as='h2' floated='left'>
            To do List Redux no server
            </Header>
            <Header as='h2' color='green'floated='right'>
            Done Lists
            </Header>
        </Segment>
    )
}