import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home/Home';


const routes = (
    <div>
      <Route exact path='/' component={Home} />
    </div>
);

export default routes;
