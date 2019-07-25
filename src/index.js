import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faComments,
  faDatabase,
  faEnvelope,
  faShareAlt,
  faThumbsUp,
  faThumbsDown,
  faTimes,
  faUsers,
  faPhone,
  faPenNib
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faComments,
  faDatabase,
  faEnvelope,
  faShareAlt,
  faThumbsUp,
  faThumbsDown,
  faTimes,
  faUsers,
  faPhone,
  faPenNib
);

ReactDOM.render(<App />, document.getElementById('root'));
