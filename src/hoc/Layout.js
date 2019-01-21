import React, { Component } from 'react';
import NavHeader from '../components/HeaderFooter/NavHeader';
import NavFooter from '../components/HeaderFooter/Footer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            <NavHeader/>
           
                {this.props.children}
            
            
            </React.Fragment>
        );
    }
}

export default Layout;