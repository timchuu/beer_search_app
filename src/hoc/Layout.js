import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import NavHeader from '../components/HeaderFooter/NavHeader';


class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            <NavHeader/>
            <Container>
                {this.props.children}
            </Container>
            </React.Fragment>
        );
    }
}

export default Layout;