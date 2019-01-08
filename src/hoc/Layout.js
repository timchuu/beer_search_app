import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
class Layout extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

export default Layout;