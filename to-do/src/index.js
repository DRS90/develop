import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './container/TodoApp.js';

ReactDOM.render(
    <TodoApp />, // Component to be rendered
    document.getElementById("root") // DOM element to render on
);
