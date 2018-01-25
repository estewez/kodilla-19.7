import React from 'react';
import './App.css';
import List from './CommentsListContainer.js';
import DevTools from './DevTools';

const App = () => {
    return (
        <div className="App">
            <List/>
            <DevTools />
        </div>
    );
};

export default App;
