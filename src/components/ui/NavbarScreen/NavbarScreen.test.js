import React from 'react';
import ReactDOM from 'react-dom';
import NavbarScreen from './NavbarScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});