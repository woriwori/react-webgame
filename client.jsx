import React from 'react';
import { render } from 'react-dom';
import NumberBaseball from './NumberBaseball';
import { hot } from 'react-hot-loader/root';

const Hot = hot(NumberBaseball);

render(<Hot />, document.getElementById('root'));
