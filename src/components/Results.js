import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react'
const src = 'https://via.placeholder.com/150';

//ADD SHADOW TO BOTTOM OF 

class Results extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div style={{marginTop: '75px'}}>
    <Header as='h5' attached='top'>
     BUD LITE
    </Header>
    <Segment attached>
    <Image src={src} size='tiny' verticalAlign='middle' /> This Beer is light and crips.
    </Segment>
    
            </div>
        );
    }
}

export default Results;