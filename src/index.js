//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import  Reducers from './reducers';




//STORE
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore); 




ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

,document.getElementById('root'));



