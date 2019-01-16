import React from 'react';
import { Form, Input, Popup } from 'semantic-ui-react'

const Search = (props) => {
    
        return (
            <Form onSubmit={props.onsubmit}>
                <Form.Field>
                    <label>User Input</label>
                    <Popup
                    trigger={<Input name={props.name} onChange={props.onchange} value={props.value} action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />}
                    header='Beer Search'
                    content='You may search by genre, header, year and actors'
                    on='focus'/>
                    
                </Form.Field>
            </Form>
        );
    
  }


  
export default Search;    