import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavHeader from '../components/HeaderFooter/NavHeader';
import NavFooter from '../components/HeaderFooter/Footer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            <NavHeader/>
            <Container>
                {this.props.children}
            </Container>
            <NavFooter/>
            </React.Fragment>
        );
    }
}

export default Layout;