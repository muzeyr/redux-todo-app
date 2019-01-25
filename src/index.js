import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers/reducers';

let store = createStore(todoApp);

/*
Provider store'a diğer componentler tarafından erişilmesini sağlar.
*/
ReactDOM.render(<Provider store={store}>
    <App/> </Provider>, document.getElementById('root'));
