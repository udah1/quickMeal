import React, {Component} from 'react';
import {Provider} from 'react-redux'
import './assets/bootstrap/css/bootstrap.min.css';
import './App.scss';
import Main from './containers/Main/Main.view'
import rootReducer from './reducers'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Main/>
                </div>
            </Provider>
        );
    }
}


export default App;
