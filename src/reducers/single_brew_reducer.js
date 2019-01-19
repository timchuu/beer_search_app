import {
    GET_SINGLE_BREW_SUCCESS,
    GET_SINGLE_BREW_PENDING,
    GET_SINGLE_BREW_ERROR,
    GET_SINGLE_BREW_CLEAR
} from '../actions/types';


const intialState ={
    singleBrew: [],
    isPending: false
}

export default function(state = intialState, action){

            switch(action.type){
                case  GET_SINGLE_BREW_SUCCESS:
                        return {...state , isPending: false, singleBrew: action.payload}
                        
                case  GET_SINGLE_BREW_PENDING:
                        return {...state, isPending:true}
                case  GET_SINGLE_BREW_ERROR:
                        return {...state, isPending:false, error:action.payload}
                case  GET_SINGLE_BREW_CLEAR:
                        return {...state, singleBrew: action.payload}
                        default:
                            return state
            }





}