// import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import  Counter  from './components/Counter';

import './custom.css'


import React, { useState } from 'react';

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
       <Layout>
         <Route exact path='/' component={Home} />
         <Route path='/counter' component={Counter} />
         <Route path='/fetch-data' component={FetchData} />
       </Layout>
    </div>
  );
}
