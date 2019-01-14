import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleBeer } from '../actions/singleActions';


class Single extends Component {

    componentWillMount(){
        this.props.loadBeerDetails(this.props.beerId);
    }
    render() {
        console.log(this.props)
        
        return (
            <div>
                HELLO FROM SINGLE ID
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        result: state.singleReducer,
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