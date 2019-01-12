import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react'
const src = 'https://via.placeholder.com/150';

//ADD SHADOW TO BOTTOM OF 

class Results extends Component {
    
    render() {
        
        
       
        return (
            <div style={{marginTop: '75px'}}>
    <Header as='h5' attached='top'>
    Beer name
    </Header>
    <Segment attached>
    <Image src={src} size='tiny' verticalAlign='middle' /> This Beer is light and crips.
    </Segment>
    
            </div>
        );
    }
}

export default Results;