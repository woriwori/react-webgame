import React from 'react';
import { render } from 'react-dom';
import RSC from './RSC';
import { hot } from 'react-hot-loader/root';

const Hot = hot(RSC);

render(<Hot />, document.getElementById('root'));
