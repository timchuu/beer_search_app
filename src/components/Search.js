import React, { Component } from 'react';
import {Form, Input} from 'semantic-ui-react'

class Search extends Component {
    //submit form/ prevent form from submiting
    //get values of form
    //redirect to correct URL
    render() {
        return (
            <Form onSubmit={this.props.onsubmit}>
                <Form.Field>
                    <label>User Input</label>
                    <Input  name={this.props.name} onChange={this.props.onchange} value={this.props.value} action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
                </Form.Field>
            </Form>
        );
    }
}

export default Search;