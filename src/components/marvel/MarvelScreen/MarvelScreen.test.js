import React from 'react';
import ReactDOM from 'react-dom';
import MarvelScreen from './MarvelScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarvelScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});