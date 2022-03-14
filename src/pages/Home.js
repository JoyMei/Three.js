import React, { Component } from "react";
import "./Home.scss";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const CardList = [
  {
    title: "Glassmorphism List Hover Effects",

  },
  {
    title: "Mediapipe FaceMesh Landmarks",

  },
];
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="menu">
          <div className="card-list">
            {CardList.map((item, index) => (
              <Link key={index} to={item.url}>
                <Card item={item} />
              </Link>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    );
  }
}
