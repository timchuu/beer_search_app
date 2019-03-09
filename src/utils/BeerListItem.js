import React from 'react'
import { List, Icon} from 'semantic-ui-react';

const BeerListItem = (props) => {
    
    const arr = [];
  const singleBeerItem = props.results.singleBeer.data;
  arr[0] = singleBeerItem;
  console.log(arr)
  return (
    <div>
      {arr[0]
        ? arr.map((item, i) => (
            <List key={i}>
              <List.Item>
                <List.Icon name="beer" size="large" />
                <List.Content>
                  <List.Header as="a">Style</List.Header>
                  <List.Description>
                    {`${!item ? 'no data' : item.style.name} `}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="percent" size="large" />
                <List.Content>
                  <List.Header as="a">Alcohol Content</List.Header>
                  <List.Description>
                    {!item
                      ? 'no data'
                      :  `abv: ${item.abv} ibu: ${item.ibu}`}
                  </List.Description>
                </List.Content>
              </List.Item>
              {item.foodPairings ?
              <List.Item>
                <List.Icon name="food" size="large" />
                <List.Content>
                
                  <List.Header as="a">Food Pairings</List.Header>
                  <List.Description>
                    {!item 
                      ? 'no data'
                      :  `This beer goes well with: ${item.foodPairings}`}
                  </List.Description>
                </List.Content>
              </List.Item> : null} 
            </List>
          ))
        : null}
    </div>
  )
}

export default BeerListItem

