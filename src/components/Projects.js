import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Application",
      description: "FullStack Web Development (MERN)",
      imgUrl: projImg1,
      link: "https://e-com-client-mx7f.onrender.com/",
    },
    {
      title: "Movie-DB",
      description: "ReactJS | REST API",
      imgUrl: projImg2,
      link: "https://curious-clafoutis-716847.netlify.app/",
    },
    {
      title: "Personal Portfolio",
      description: "ReactJS | CSS Animations",
      imgUrl: projImg3,
      link: "https://vishal-portfolio-hsbr.onrender.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                I have hands-on experience in developing fullstack web
                applications. Although I am currently adept in the MERN stack, I
                am always keen to learn and implement other technologies
                according to the project requirement. I am well versed in
                developing REST API as well.
              </p>
              {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className="animate__animated animate__slideInUp"
                >
                  <Tab.Pane eventKey="first"> */}
              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>
              {/* </Tab.Pane> */}
              {/* <Tab.Pane eventKey="section">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
