import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentLifeCycleExample from './ComponentLifeCycleExample';

ReactDOM.render(<ComponentLifeCycleExample />, document.getElementById('root'));

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);