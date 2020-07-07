import React from 'react';
import { render } from 'react-dom';
import ResponseCheck from './ResponseCheck';
import { hot } from 'react-hot-loader/root';

const Hot = hot(ResponseCheck);

render(<Hot />, document.getElementById('root'));
