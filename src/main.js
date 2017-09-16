import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Page),
    document.getElementById('mount')
  );
}); 

