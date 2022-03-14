import React from 'react';
import ReactDOM from 'react-dom';
import SearchScreen from './SearchScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});