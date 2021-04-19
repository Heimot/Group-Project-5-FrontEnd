import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import benq from "../img/benq.png";
import amd from "../img/amd.png";
import asus from "../img/asus1.png";
import intel from "../img/intel1.png";
import kingston from "../img/kingston.png";
import msi from "../img/msi.png";
import samsung from "../img/samsung.png";
import dell from "../img/dell.png";

import "./producers.css";

function Producers(){
    return(
<Container className="mar">
  <Row>
    <Col xs={6} md={3}>
        <a href="https://www.benq.eu/en-fi/index.html">
      <Image src={benq} />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.amd.com/en">
      <Image src={amd}  />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.samsung.com/fi/">
      <Image src={samsung}  />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.intel.com/content/www/us/en/homepage.html">
      <Image src={intel}  />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.kingston.com/finland/en">
      <Image src={kingston} />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.msi.com/index.php">
      <Image src={msi}  />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.asus.com/fi/">
      <Image src={asus}  />
      </a>
    </Col>
    <Col xs={6} md={3}>
        <a href="https://www.dell.fi/">
      <Image src={dell}  />
      </a>
    </Col>
    </Row>
</Container>
)
}

export default Producers;