import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import InlineLoader from '../utils/InlineLoader';
import Slider from 'react-slick';
import SlickArrow from '../utils/SlickArrow';


class BreweryRandom extends Component {
    render() {
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
        const { ranBrew, isLoading } = this.props
        console.log(this.props)
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
                            <Link to={`/brewery/${item.id}`} key={item.id}>
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


                        )):null
                        

                }
                </Slider>
                
                
                {isLoading ? <Segment textAlign='center'><InlineLoader>Preparing Files</InlineLoader></Segment> : null}
               
                </Container>
                </React.Fragment>
            
        );
    }
}

export default BreweryRandom;