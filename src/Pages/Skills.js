import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Styles/Container.css";
import skillsContainer from "../Styles/skillsContainer.css";

import ReactJS from "../Images/reactJS.png";
import javascript from "../Images/javascript.png";
import css from "../Images/css.png";
import html from "../Images/html.png";
import jquery from "../Images/jquery.png";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height, width: props.width };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height !== this.state.height) {
      this.setState({ height: nextProps.height });
    }
    if (nextProps.width !== this.state.width) {
      this.setState({ width: nextProps.width });
    }
  }

  render() {
    {
      AOS.init();
    }
    return (
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <center>
          <p className="text" style={{ paddingBottom: 100 }}>
            My Skills
          </p>
        </center>
        <div className="row">
          <div className="technical" style={{ width: "20vw" }}>
            <center>
              <p
                style={{ paddingBottom: 10, paddingTop: 5 }}
                className="boxText"
              >
                Web Development
              </p>
            </center>
            <div className="row">
              <div className="col">
                <img
                  src={ReactJS}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">ReactJS</p>
                </center>
              </div>
              <div className="col">
                <img
                  src={javascript}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">Javascript</p>
                </center>
              </div>
              <div className="col">
                <img src={css} height="75vw" width="75vw" />
                <center>
                  <p className="figText">CSS</p>
                </center>
              </div>
              <div className="col">
                <img src={html} height="75vw" width="75vw" />
                <center>
                  <p className="figText">HTML</p>
                </center>
              </div>
              <div className="col">
                <img src={jquery} height="75vw" width="75vw" />
                <center>
                  <p className="figText">jQuery</p>
                </center>
              </div>
            </div>
          </div>

          <div className="technical" style={{ width: "20vw" }}>
            <center>
              <p
                style={{ paddingBottom: 10, paddingTop: 5 }}
                className="boxText"
              >
                Web Development
              </p>

              <img
                src={ReactJS}
                height="75vw"
                width="75vw"
                className="circle"
              />
              <p className="figText">ReactJS</p>
            </center>
          </div>
        </div>

        {/* <center>
          <p className="text" style={{ paddingBottom: 100 }}>
            My Skills
          </p>
        </center>
        <div
          className="technical"
          style={{
            width: this.state.width / 2.25
          }}
        >
          <div
            style={{
              //float: "left",
              color: "white",
              fontFamily: "Avenir Next",
              fontSize: 18
            }}
            className="row"
          >
            <div>
              <p>Web Development</p>
              <div
                style={{
                  fontSize: 15,
                  paddingLeft: "40%",
                  paddingTop: 5,
                  marginBottom: 30,
                  //margin: "0 auto",
                  textAlign: "left"
                }}
              >
                <ul>
                  <li>ReactJS</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>jQuery</li>
                </ul>
              </div>
            </div>
            <div>
              <p>Backend Development</p>
              <div
                style={{
                  fontSize: 15,
                  paddingLeft: "40%",
                  paddingTop: 5,
                  textAlign: "left"
                }}
              >
                <ul>
                  <li>mySQL</li>
                  <li>Node.js</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
            <div>
              <p>Mobile App Development</p>
              <div
                style={{
                  fontSize: 15,
                  paddingLeft: "40%",
                  paddingTop: 5,
                  textAlign: "left"
                }}
              >
                <ul>
                  <li>React Native</li>
                  <li>Expo</li>
                </ul>
              </div>
            </div>
            <div>
              <p style={{ width: this.state.width / 7, textAlign: "center" }}>
                Wearables + Digital Signal Processing
              </p>
              <div
                style={{
                  fontSize: 15,
                  paddingLeft: "40%",
                  paddingTop: 5,
                  textAlign: "left"
                }}
              >
                <ul>
                  <li>Arduino</li>
                  <li>Matlab</li>
                  <li>Hexiwear</li>
                </ul>
              </div>
            </div>
            <div>
              <p
                style={{
                  width: this.state.width / 7,
                  textAlign: "center"
                }}
              >
                Additional Programming Languages
              </p>
              <div
                style={{
                  fontSize: 15,
                  paddingLeft: "40%",
                  paddingTop: 5,
                  textAlign: "left",
                  marginBottom: 50
                }}
              >
                <ul>
                  <li>Python</li>
                  <li>C#</li>
                  <li>C++</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="soft" style={{ width: this.state.width / 2.25 }}>
          World
        </div> */}
      </div>
    );
  }
}
