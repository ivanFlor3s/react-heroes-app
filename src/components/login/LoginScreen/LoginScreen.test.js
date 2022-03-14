import React from 'react';
import ReactDOM from 'react-dom';
import LoginScreen from './LoginScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});