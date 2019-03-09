import React from 'react';
import { Form, Input, Popup } from 'semantic-ui-react'

const Search = (props) => {
    const styles = {
        marginBottom: '60px'
    }
        return (
            <Form onSubmit={props.onsubmit} style={styles}>
                <Form.Field>
                    <Popup
                    trigger={<Input name={props.name} onChange={props.onchange} value={props.value} action={{ type: 'submit', content: 'Go' }} placeholder='Search...' />}
                    header='Beer Search'
                    content='Search by beer and brewery'
                    on='focus'/>
                    
                </Form.Field>
            </Form>
        );
    
  }


  
export default Search;    