import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleBeer, getSingleBeerClear } from '../actions/singleActions';
import Layout from '../hoc/Layout';
import { Container, Grid, Icon,  Header, Image, GridRow, Segment, GridColumn, Divider, Loader, Dimmer, Button } from 'semantic-ui-react';
import BeerList from '../utils/BeerListItem';
const src = 'https://via.placeholder.com/150?text=No+Image+Available';


class Single extends Component {

    componentDidMount(){
        this.props.loadBeerDetails(this.props.beerId);
        
    }

  


    render() {
       
        console.log(this.props)
        const { results } = this.props
        return (
             
            <React.Fragment>
             
            <Container fluid>
            { !results.isPending ? 
            <Layout>
            
           
            <Container fluid>
            <div  style={{background: `url('/images/beers.jpg')  no-repeat  `, border: 'black 1px solid', height: '350px', width:'100%', backgroundSize: 'cover' , backgroundPosition: 'center'}}>
            <Divider  section clearing hidden/>
            </div>
            <Divider  section  />
            <Button labelPosition='left' icon='left chevron' content='Back' onClick={this.props.history.goBack}/>
            </Container>
            
            <Container style={{ marginTop: '2em' }}>
            <Grid columns={2} celled='internally'>
            <GridRow >
            <GridColumn width={6} floated='left'>
            <Segment  floated='left' inverted color='yellow' tertiary  size='large' >
            <Image src={results.singleBeer.data &&  results.singleBeer.data.labels ? results.singleBeer.data.labels.medium   : src } size='medium'  verticalAlign='middle' floated='left'  rounded centered/>
            </Segment>
            </GridColumn>
            
            <GridColumn floated='right' verticalAlign='middle'>
            <Header as='h2' textAlign="left">{results.singleBeer.data ? results.singleBeer.data.name : null }</Header>
            <BeerList {...this.props}/>
                   
    </GridColumn>
    </GridRow>
            
            
           
            
            
            
             
           
            
    
    </Grid>
    </Container>
      
    </Layout>
    : <Dimmer active><Loader indeterminate inline="centered" content='Loading...' size='massive'/></Dimmer>} 
    </Container>
    
    </React.Fragment>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        results: state.singleReducer,
        beerId: ownProps.match.params.id 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBeerDetails: (beerId) => {
            dispatch(getSingleBeer(beerId))
        },
        loadBeerDetailsClear: () => {
            dispatch(getSingleBeerClear())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Single);