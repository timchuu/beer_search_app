import {
    GET_SINGLE_BEER_SUCCESS,
    GET_SINGLE_BEER_PENDING,
    GET_SINGLE_BEER_ERROR
} from '../actions/types';



const intialState ={
    results: [],
    isPending: false
}


export default function(state = intialState, action){


            switch(action.type){
               case GET_SINGLE_BEER_SUCCESS : 
                        return {...state, isPending:false, results: action.payload}
               case GET_SINGLE_BEER_PENDING : 
                        return {...state, isPending:true} 
               case GET_SINGLE_BEER_ERROR : 
                        return {...state, isPending:false, error: action.payload}
                    default: 
                        return state
            }


}