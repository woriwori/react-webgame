import React from 'react';
import { render } from 'react-dom';
import WordRelay from './WordRelay';
import { hot } from 'react-hot-loader/root';

const Hot = hot(WordRelay);

render(<Hot />, document.getElementById('root'));
