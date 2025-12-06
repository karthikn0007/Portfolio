import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiMysql, DiJavascript1, DiGit } from "react-icons/di";
import { SiSpringboot, SiHibernate, SiApachemaven } from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Spring Boot">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Hibernate">
        <SiHibernate />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>

      {/* REST API */}
      <Col xs={4} md={2} className="tech-icons" title="REST API">
        <TbApi />
      </Col>

      <Col xs={4} md={2} className="tech-icons"  title="Maven">
        <SiApachemaven />
      </Col>


      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
