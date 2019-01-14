import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import SlickArrow from '../utils/SlickArrow';


class BreweryRandom extends Component {
    render() {
        console.log(this.props)
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed:500,
            nextArrow: <SlickArrow/>,
            prevArrow: <SlickArrow/>,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                      
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                      
                    }
                  },
            ]

        }
        const { ranBrew } = this.props
        
        return (
            
               <React.Fragment>
               
                <Header as='h3' dividing>
                Discover Breweries
                    </Header>
                    <Container>
                    
               
                
                    
                   
                    <Slider {...settings}>
                {
                    
                    ranBrew.data ?
                   
                        ranBrew.data.map((item, i) =>(
                           
                            <Card key={item.id} centered href='#' raised>
                                <Image centered src={item.images.medium} />
                                    <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>{item.description}</Card.Description>
                                    </Card.Content>
                                </Card>
                               


                        )):null
                        

                }
                </Slider>
                
                
                
               
                </Container>
                </React.Fragment>
            
        );
    }
}

export default BreweryRandom;