import React, { Component } from 'react';
import { Header, Container, Segment, GridColumn, Card, Image, GridRow, Grid  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import InlineLoader from '../utils/InlineLoader';



class BreweryRandom extends Component {
    render() {
    
        const { ranBrew, isLoading } = this.props
        
        return (
            
               <React.Fragment>
                 
                
                   
                    <Container style={{marginTop:'30px'}}>
                    <Header as='h2' dividing style={{color:'white'}}>
                    Featured Breweries
                    </Header>
                    <Grid columns={3} padded='horizontally' stackable>
               
                
                    
                   
                   
                {
                    
                    ranBrew.data ?
                   
                        ranBrew.data.map((item, i) =>(
                            <GridColumn key={item.id} computer={5}  tablet={5} mobile={16}>
                            <Link to={`/brewery/${item.id}`} >
                            <Card  color='yellow' centered  raised>
                                <Image centered src={item.images.medium} />
                                    <Card.Content>
                                    <Card.Header>{!item.name || !item.name.length  > 20 ?  `${item.name}`: `${item.name.substring(0, 25)}...`}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>{!item.description || !item.description.length  > 50 ?  `${item.description}`: `${item.description.substring(0, 100)}...`}</Card.Description>
                                    </Card.Content>
                                </Card>
                                </Link>
                                </GridColumn>

                        )):null
                        

                }
               
                
                
                {isLoading ? <Segment textAlign='center'><InlineLoader>Preparing Files</InlineLoader></Segment> : null}
                </Grid>
                </Container>
               
                </React.Fragment>
            
        );
    }
}

export default BreweryRandom;