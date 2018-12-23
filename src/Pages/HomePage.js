import React, { Component } from "react";
import StarStyles from "../Styles/Stars.css";
import Container from "../Styles/Container.css";
import $ from "jquery";
import Options from "./Options";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

let visVar = "visible";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      aboutHeight: 0,
      visibility: "visible",
      scrollPosY: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.scrollPosition();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.scrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.scrollPosition);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleClickAbout = () => {
    window.scrollTo({ top: this.state.height * 1.13, behavior: "smooth" });
  };

  handleClickExp = () => {
    window.scrollTo({ top: this.state.height * 2.26, behavior: "smooth" });
  };

  scrollPosition = () => {
    this.setState({ scrollPosY: window.scrollY });
  };

  getSize = container => {
    document.getElementById(container);
  };

  render() {
    return (
      <div
        id="background"
        className="no-cpu"
        // style={{ backgroundColor: "black", height: "5000px" }}
        //style={{ overflowX: "hidden" }}
      >
        <div className="stars" />
        <div className="twinkling">
          <Options
            width={this.state.width}
            height={this.state.height}
            aboutHeight={this.state.aboutHeight}
            handleClickAbout={this.handleClickAbout}
            handleClickExp={this.handleClickExp}
          />

          <Navbar
            style={{
              width: "100%",
              height: this.state.height / 12,
              backgroundColor: "black",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderBottom: "solid 2px white",
              marginTop: this.state.height / 4,
              zIndex: 10,
              position: "sticky",
              top: 0,
              visibility: visVar,
              //paddingRight: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            data-aos="fade"
            data-aos-easing="ease-in"
            data-aos-duration="100"
            data-aos-anchor-placement="top-center"
          >
            <div
              id="navbar"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                //alignItems: "center",
                //width: this.state.width / 6,
                //paddingTop: "1%",
                position: "sticky"
              }}
              className="smallerText"
            >
              <div
                className="navbarContainer"
                style={{
                  borderStyle:
                    this.state.scrollPosY > this.state.height * 1.05 &&
                    this.state.scrollPosY < this.state.height * 2
                      ? "solid"
                      : "hidden",
                  cursor: "pointer"
                }}
                onClick={() => this.handleClickAbout()}
              >
                <p>About</p>
              </div>
              <div
                className="navbarContainer"
                style={{
                  borderStyle:
                    this.state.scrollPosY > this.state.height * 2.1 &&
                    this.state.scrollPosY < this.state.height * 3.9
                      ? "solid"
                      : "hidden",
                  cursor: "pointer"
                }}
                onClick={() => this.handleClickExp()}
              >
                <p>Experience</p>
              </div>
              <div>
                <p style={{ paddingRight: 30 }}>Skills</p>
              </div>
              <div>
                <p>Projects</p>
              </div>
            </div>
          </Navbar>

          <div style={{ marginTop: this.state.height / 5 }} id="about">
            <About
              width={this.state.width}
              height={this.state.height}
              scrollPosY={this.state.scrollPosY}
            />
          </div>
          <div style={{ marginTop: this.state.height / 3 }}>
            <Experience width={this.state.width} height={this.state.height} />
          </div>
          <div style={{ marginTop: this.state.height / 3 }}>
            <Skills height={this.state.height} width={this.state.width} />
          </div>
        </div>
      </div>
    );
  }
}
