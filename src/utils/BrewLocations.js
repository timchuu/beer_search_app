import React from "react";
import { List, Icon } from "semantic-ui-react";

const BrewLocations = props => {
  return (
    <div>
      {props.locations
        ? props.locations.locations.map((item, i) => (
            
              <List.Item>
                <List.Icon name="map marker alternate" size="large" />
                <List.Content>
                  <List.Header as="a">Location</List.Header>
                  <List.Description>
                    {`${item.streetAddress}
              ${item.locality}, ${item.region} ${item.postalCode} ${
                      item.country.displayName
                    }  `}
                  </List.Description>
                </List.Content>
              </List.Item>
            
          ))
        : null}
    </div>
  );
};

export default BrewLocations;
