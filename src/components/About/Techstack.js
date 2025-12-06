import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiMysql, DiJavascript1, DiGit } from "react-icons/di";
import { SiSpringboot, SiHibernate, SiApachemaven } from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* REST API */}
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
