import React from "react";
import { List, Icon } from "semantic-ui-react";
import BrewLocations from "./BrewLocations";
import BrewInfo from "./BrewInfo";

const BrewListItem = props => {
  
  const arr = [];
  const singleBrewItem = props.results.singleBrew.data;
  arr[0] = singleBrewItem;
  console.log(arr)

  return (
    <div>
      {arr[0]
        ? arr.map((item, i) => (
            <List key={i}>
              <List.Item>
                <List.Icon name="map marker alternate" size="large" />
                <List.Content>
                  <List.Header as="a">Location</List.Header>
                  <List.Description>
                    {`${item.locations[i].streetAddress}
              ${item.locations[i].locality}, ${item.locations[i].region} ${
                      item.locations[i].postalCode
                    } ${item.locations[i].country.displayName}  `}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" size="large" />
                <List.Content>
                  <List.Header as="a">Phone Number</List.Header>
                  <List.Description>
                    {item.locations[i].phone
                      ? item.locations[i].phone
                      : "no info availiable"}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
         <List.Icon name='computer' size='large' />
         <List.Content>
           <List.Header as='a'>Website</List.Header>
           <List.Description><a href={item.locations[0].website}>{item.locations[0].website ? item.locations[0].website : 'no website available'}</a></List.Description>
         </List.Content>
       </List.Item>
       <List.Item>
         <List.Icon name='clock outline' size='large' />
         <List.Content>
           <List.Header as='a'>Open</List.Header>
           <List.Description>{item.locations[0].hoursOfOperationNotes? item.locations[0].hoursOfOperationNotes : 'no hours available'}</List.Description>
         </List.Content>
       </List.Item>
       <List.Item>
         <List.Icon name='building outline' size='large' />
         <List.Content>
           <List.Header as='a'>Number of locations</List.Header>
           <List.Description>{item.locations ? item.locations.length : 'no locations available'}</List.Description>
         </List.Content>
       </List.Item>
            </List>
          ))
        : null}
    </div>
  );
};

export default BrewListItem;
