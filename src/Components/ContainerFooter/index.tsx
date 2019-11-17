import React, { useEffect, useState } from 'react';
import Aria2, { Aria2Info } from "Aria2"
import { Container, Row, Col} from 'react-bootstrap'


const ContainerFooter: React.FC = () => {
  const [speedInfo, setSpeedInfo] = useState<any>({})
  useEffect(() => {
    // 获取速度
    const getSpeed = () => {
      setTimeout(getSpeed, 5000);
      Aria2Info.getSpeedInfo().then(rs => {
        setSpeedInfo(rs.result);
      })
    }
    getSpeed();
  }, [])

  return (
    <Container>
      <Row noGutters>
        <Col md={8} xs={8}><div>spann</div></Col>
        <Col md={2} xs={2}><div><span>下载速度{speedInfo.downloadSpeed || 0}</span></div></Col>
        <Col md={2} xs={2}><div><span>上传速度{speedInfo.uploadSpeed || 0}</span></div></Col>
      </Row>
      
      
    </Container>
  );
}

export default ContainerFooter;
