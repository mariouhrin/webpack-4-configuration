import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './main.scss';

const App = () => <div>Hello World!</div>;

ReactDOM.render(<App />, document.getElementById('app'));

export default hot(module)(App);
