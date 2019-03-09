import React, { Component } from 'react'
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



export default class NavHeader extends Component {
  

  

  render() {
    

    return (
      <Menu size='large' fluid>
        <Menu.Item>
        <img src='/images/logo.png' alt='main_logo' />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
        /> 
        
      </Menu>
    )
  }
}