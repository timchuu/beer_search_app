import React from 'react'
import { List, Icon} from 'semantic-ui-react';

const BeerListItem = (props) => {
    
    const arr = [];
  const singleBeerItem = props.results.singleBeer.data;
  arr[0] = singleBeerItem;
  console.log(arr[0]);
  return (
    <div>
      {arr[0]
        ? arr.map((item, i) => (
            <List key={i}>
              <List.Item>
                <List.Icon name="map marker alternate" size="large" />
                <List.Content>
                  <List.Header as="a">Info</List.Header>
                  <List.Description>
                    {`${!item[i] ? 'no data' : item[i].abv}
              ${!item[i] ? 'no data':item[i].ibu} `}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" size="large" />
                <List.Content>
                  <List.Header as="a">Description</List.Header>
                  <List.Description>
                    {!item[i]
                      ? 'no data'
                      :  item[i].description}
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          ))
        : null}
    </div>
  )
}

export default BeerListItem

