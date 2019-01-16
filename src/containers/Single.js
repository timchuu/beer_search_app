import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleBeer } from '../actions/singleActions';


class Single extends Component {

    componentDidMount(){
        this.props.loadBeerDetails(this.props.beerId);
        console.log(this.props)
    }
    render() {
       
        
        return (
            <div>
                HELLO FROM SINGLE ID
            </div>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Single);