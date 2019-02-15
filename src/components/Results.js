import React from 'react';
import { Button, Icon, Image, Item, Label, Loader, Dimmer } from 'semantic-ui-react';
import NoResults from './NoResults'
import { Link } from 'react-router-dom';
const src = 'https://via.placeholder.com/150?text=No+Image+Available';

//ADD SHADOW TO BOTTOM OF 

const  Results = (props) => {
    
    
      const info = props.beers.beers.data

      const showResult = (info =>{
        
          return(
          <Item.Group divided>
    {info ?  info.map((item,i) =>(
      <Item key={i}>
      <Item.Image src={item.labels ? item.labels.medium : item.images ? item.images.medium : src} centered />
      <Item.Content>
        <Link to={item.type === 'beer' ? `/beer/${item.id}` : item.type === 'brewery' ? `/brewery/${item.id}` : '/'}><Item.Header>{item.name}</Item.Header></Link>
        <Item.Meta>
          <span className='cinema'>{!item.style || !item.type   === 'beer' ? `Established: ${item.established}` : `${item.style.category.name}` } </span>
        </Item.Meta>
        <Item.Description>paragraph</Item.Description>
        <Item.Extra>
          <Label>{item.type === 'beer' ? 'Beer' : item.type === 'brewery' ? 'Brewery': 'B/W'}</Label>
          {item.available ?
          <Label icon='calendar alternate outline' content={item.available && item.type === 'beer' ? `Available: ${item.available.name}` : ''}/> : ''}
        </Item.Extra>
      </Item.Content>
    </Item>
      
    )): <NoResults/>}
    </Item.Group>)
        }
        
      )
      
    console.log(info)
        return (
      
    
          <div>
            {showResult(info)}
          </div>
  

        )
    
}

export default Results;