import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiEclipseide
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="IntelliJ IDEA">
        <SiIntellijidea />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Eclipse IDE">
        <SiEclipseide />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
