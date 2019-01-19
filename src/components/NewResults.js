import React from 'react'

function NewResults() {
    return (
        <div>
            import React from 'react';
import { Button, Icon, Image, Item, Label, Loader, Dimmer } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const src = 'https://via.placeholder.com/150?text=No+Image+Available';

//ADD SHADOW TO BOTTOM OF 

const  Results = (props) => {
    
    
      const info = props.location.state.beers.beers.data
     console.log(props)   
        return (
    <Item.Group divided>
    {!props.location.state.beers.isPending && info ?  info.map((item,i) =>(
      <Item key={i}>
      <Item.Image src={item.labels ? item.labels.medium : item.images ? item.images.medium : src} centered />
      <Item.Content>
        <Link to={item.type === 'beer' ? `/beer/${item.id}` : item.type === 'brewery' ? `/brewery/${item.id}` : '/'}><Item.Header>{item.name}</Item.Header></Link>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>paragraph</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
      
    )): <Dimmer active><Loader indeterminate inline="centered" content='Loading...' size='massive'/></Dimmer>}
    
  </Item.Group>
        );
    
}

export default Results;
        </div>
    )
}

export default NewResults
