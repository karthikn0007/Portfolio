import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/codeprofile.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/fitnessclub.png";
import chatify from "../../Assets/Projects/tasktracker.png";
// import suicide from "../../Assets/Projects/suicide.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Flow – Smart Productivity Task Tracker"
              description="Developed a secure web app for managing personal tasks with user authentication and real-time UI updates."
              ghLink="https://github.com/karthikn0007/Task_Tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fitness Club"
              description="Developed a management system for a fitness club to handle members, trainers, plans, and packages efficiently."
              ghLink="https://github.com/karthikn0007/FitnessClub_Management_System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Code Profile Analyzer"
              description="A React Web Application for all kind of industry to get the job applicant details are gathered and visualized using web Scrapping and Web ABI. This Project has main motto to gather the Code Profile of the candidates from Code Platform Contribution."
              ghLink="https://github.com/karthikn0007/Code-Profile-Analyzer"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
