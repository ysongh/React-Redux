import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const person = reducer;

const store = createStore(person);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();