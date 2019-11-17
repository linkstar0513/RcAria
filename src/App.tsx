import React,{ useEffect, useState } from 'react';
import {FetchGet} from "./utils/Fetch"
import Aria2 from "Aria2"
import ContainerFooter from "Components/ContainerFooter"
import { Container, Row, Col} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';


import Layout from './Layout'
import menus from './config/menus'

const App: React.FC = () => {
  // const rs = FetchGet("http://www.baidu.com").then(rs => {
  //   console.log(rs)
  // });
  const [speedInfo, setSpeedInfo] = useState<any>({})

  return (
    <Layout menus={menus}>
      <div>layout</div>
      <ContainerFooter />
    </Layout>
  );
}

export default App;
