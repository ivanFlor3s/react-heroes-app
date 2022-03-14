import React from 'react';
import ReactDOM from 'react-dom';
import DcScreen from './DcScreen';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DcScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});