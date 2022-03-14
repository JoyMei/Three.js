import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Project.scss";

function ProjectMenu() {
  return (
    <div className="project">
      <div className="theme">Three.js Project</div>
      <div className="card-list">
        {projectList.map((item, index) => (
          <Link key={index} to={item.url}>
            <Card key={index} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const projectList = [
  {
    title: "Threejs journey",
    url: "/project/threejs-journey",
    img: "../assets/project-img/threejs-journey.png",
  },
  {
    title: "shoe-color",
    url: "/project/shoe-color",
    img: "../assets/project-img/shoe-color.png",
  },
  {
    title: "yellow-ball ",
    url: "/project/yellow-ball",
    img: "../assets/project-img/yellow-ball.png",
  },
];

export default ProjectMenu;
