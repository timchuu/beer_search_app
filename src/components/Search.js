import React from 'react';
import {Form, Input} from 'semantic-ui-react'

const Search = (props) => {
    
        return (
            <Form onSubmit={props.onsubmit}>
                <Form.Field>
                    <label>User Input</label>
                    <Input  name={props.name} onChange={props.onchange} value={props.value} action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
                </Form.Field>
            </Form>
        );
    
}

export default Search;