import React from 'react';
import { List, Icon} from 'semantic-ui-react';


const BrewInfo = (props) => {
    
 
   
    return (
        <div>
         
     
       <List.Item>
         <List.Icon name='marker' />
         <List.Content>
           <List.Header as='a'>Sapporo Haru</List.Header>
           <List.Description>Greenpoint's best choice for quick and delicious sushi.</List.Description>
         </List.Content>
       </List.Item>
       <List.Item>
         <List.Icon name='marker' />
         <List.Content>
           <List.Header as='a'>Enid's</List.Header>
           <List.Description>At night a bar, during the day a delicious brunch spot.</List.Description>
         </List.Content>
        
       </List.Item>
     
       
        </div>
    );
};

export default BrewInfo;