import React, { Component } from "react";
import { Header, Container, Segment, GridColumn, Card, Image, GridRow, Grid  }  from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import InlineLoader from "../utils/InlineLoader";
import SlickArrow from "../utils/SlickArrow";

class BeerRandom extends Component {
  //TO DOS CONNECT TO REDUX
  // SHORTEN DESCRIPTION
  //LINK TO API AND PUSH TO SINGLE URL

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SlickArrow />,
      prevArrow: <SlickArrow />,
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
        }
      ]
    };
    const { ranBeer, isLoading } = this.props;

    return (
      <React.Fragment>
        <Header as='h2' dividing style={{color:'white'}}>
          Discover Beers
        </Header>

        <Container>
        <Grid columns={3} padded='horizontally'>
            {ranBeer.data
              ? ranBeer.data.map((item, i) => (
                <GridColumn key={item.id}>
                  <Link to={`/beer/${item.id}`} key={item.id}>
                    <Card   color="yellow" centered raised>
                      <Image centered src={item.labels.icon} />
                      <Card.Content>
                        <Card.Header>
                          {!item.name || !item.name.length > 20
                            ? `${item.name}`
                            : `${item.name.substring(0, 25)}...`}
                        </Card.Header>
                        <Card.Meta>
                          <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                          {!item.description || !item.description.length > 50
                            ? `${item.description}`
                            : `${item.description.substring(0, 100)}...`}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                  </GridColumn>
                ))
              : null}
         

          {isLoading ? (
            <Segment textAlign="center">
              <InlineLoader>Preparing Files</InlineLoader>
            </Segment>
          ) : null}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default BeerRandom;
