import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karthi Keyan </span>
            from <span className="purple"> Tenkasi, India.</span>
            <br />
            I Completed My B.E at PSR Engineering College.
            <br />
            As a Back-end developer, I have hands-on experience in Java, MySQL, Spring Boot, JPA, and RESTful API development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be Your Self, No one is Perfect"{" "}
          </p>
          <footer className="blockquote-footer">Taylor Swift</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
