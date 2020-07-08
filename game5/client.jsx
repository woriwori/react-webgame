import React from 'react';
import { render } from 'react-dom';
import RSP from './RSP';
import { hot } from 'react-hot-loader/root';

const Hot = hot(RSP);

render(<Hot />, document.getElementById('root'));
