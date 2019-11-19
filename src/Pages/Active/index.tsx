import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import Aria2, { Aria2Rpc } from "Aria2"
const Active: React.FC = () => {
  // const rs = FetchGet("http://www.baidu.com").then(rs => {
  //   console.log(rs)
  // });
  const [activeList, setActiveList] = useState<Array<any>>([])
  useEffect(() => {
    setInterval(() => {
      Aria2Rpc.tellActive().then(rs => {
        setActiveList(rs.result)
        console.log(activeList)
        console.log(rs.result)
      })
    }, 3000)
  }, [])
  return (
    <div>
      <table>
        {activeList.map(item => {
          return <tr key={item.gid}>
            <td>{item.gid}</td><td>{item.connections}</td><td>{item.completedLength}</td>
            <td>{item.downloadSpeed}</td><td>{item.numSeeders}</td><td>{item.seeder}</td>
            <td>{item.status}</td><td>{item.totalLength}</td><td>{item.uploadSpeed}</td>
          </tr>
        })}
      </table>
    </div>
  );
}

export default Active;