import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import Clock from './components/Clock/Clock';

const store = createStore(reducers, {});

render(<Provider store={store}><Clock /></Provider>, document.getElementById('root'));