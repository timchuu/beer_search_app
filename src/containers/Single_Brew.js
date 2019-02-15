import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleBrew, getSingleBrewClear } from '../actions/singleBrewActions';
import { Container, Grid, Icon,  Header, Image, GridRow, Segment, GridColumn, Button, Divider, List, Loader, Dimmer, Label } from 'semantic-ui-react';
import Layout from '../hoc/Layout';
import BrewList from '../utils/BrewListItem';
import BrewMapContainer from './brew_map_container'

class SingleBrew extends Component {

   
    componentDidMount(){
        
        this.props.loadBrewDetails(this.props.brewId)
        
    }

   
    render() {
        
        const { results } = this.props;
       console.log(results)
        return (
            
            <React.Fragment>
             
            <Container fluid>
            { !results.isPending ? 
            <Layout>
            
           
            <Container fluid>
            <div  style={{background: `url('/images/brewery.jpg')  no-repeat  `, border: 'black 1px solid', height: '350px', width:'100%', backgroundSize: 'cover' , backgroundPosition: 'center'}}>
            <Divider  section clearing hidden/>
            </div>
            <Divider  section  />
            <Button labelPosition='left' icon='left chevron' content='Back' style={{marginLeft:'10px'}} onClick={this.props.history.goBack}/>
            </Container>
            
            <Container style={{ marginTop: '2em' }}>
            <Grid columns={2} celled='internally' stackable>
            <GridRow >
            <GridColumn width={6} floated='left'>
            <Segment  floated='left' inverted color='yellow' tertiary  size='large' >
            <Image src={results.singleBrew.data ? results.singleBrew.data.images.squareMedium : null } size='small'  verticalAlign='middle' floated='left'  rounded centered/>
            </Segment>
            </GridColumn>
            
            <GridColumn floated='right' verticalAlign='middle'>
            <Header as='h2' textAlign="left">{results.singleBrew.data ? results.singleBrew.data.name : null }</Header>
            <BrewList {...this.props}/>
                   
    </GridColumn>
    </GridRow>
    <GridRow verticalAlign='middle' >
    <Header as='h2'  style={{marginTop:'30px'}} >
      Description  <Label>Established: {results.singleBrew.data && results.singleBrew.data.established ? results.singleBrew.data.established : 'year not available'}</Label>
    </Header>
    <Segment basic style={{backgroundColor:'#eee', marginBottom: '30px'}}>
      {results.singleBrew.data && results.singleBrew.data.description ? results.singleBrew.data.description : 'no description available'}
    </Segment>
    </GridRow>
    <GridRow>
               
        <BrewMapContainer mapData={this.props.results} />
       
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
        results: state.singleBrewReducer,
        brewId:  ownProps.match.params.brewid
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadBrewDetails: (brewId) => {
            dispatch(getSingleBrew(brewId))
        },
        loadBrewDetailsClear: () =>{
            dispatch(getSingleBrewClear())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SingleBrew);