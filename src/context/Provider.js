import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import initalState from './store';
import reducer from './redurcer';

const JobProvider = ({children}) => {
  
  const store = createStore(reducer, initalState);
  return <Provider store={store}>{children}</Provider>;
};

export default JobProvider;
