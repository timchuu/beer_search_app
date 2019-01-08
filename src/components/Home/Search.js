import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react'

class Search extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onsubmit}>
                <Form.Field>
                    <label>User Input</label>
                        <input />
                </Form.Field>
                <Button>SUBMIT</Button>
            </Form>
        );
    }
}

export default Search;