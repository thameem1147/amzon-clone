import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Stateprovider';
import reducer, {initialstate} from "./reducer";

ReactDOM.render(
  <React.StrictMode>
  <StateProvider reducer={reducer} initialstate={initialstate}>
  <App />
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

