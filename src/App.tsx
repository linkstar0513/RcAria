import React from 'react';
import {FetchGet} from "./utils/Fetch"
import logo from './logo.svg';
import './App.css';

import Layout from './Layout'
import menus from './config/menus'

const App: React.FC = () => {
  const rs = FetchGet("http://www.baidu.com").then(rs => {
    console.log(rs)
  });

  return (
    <Layout menus={menus}>
      <div>layout</div>
    </Layout>
  );
}

export default App;
