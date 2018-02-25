// entry point for all container and components.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// injectTapEventPlugin needed for smooth touch input for material UI elements on mobile
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <App />,
  document.getElementById('react-container')
);
