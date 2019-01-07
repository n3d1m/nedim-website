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
import mySQL from "../Images/mySQL.png";
import nodeJS from "../Images/nodejs.png";
import firebase from "../Images/firebase.png";
import expo from "../Images/expo.png";
import arduino from "../Images/arduino.png";
import matlab from "../Images/matlab.png";
import hexiwear from "../Images/hexiwear.png";
import python from "../Images/python.png";
import cSharp from "../Images/cSharp.png";
import cPlusPlus from "../Images/cPlusPlus.png";
import java from "../Images/Java.png";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height, width: props.width, height: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height !== this.state.height) {
      this.setState({ height: nextProps.height });
    }
    if (nextProps.width !== this.state.width) {
      this.setState({ width: nextProps.width });
    }
  }

  componentDidMount() {
    this.getSize();
    window.addEventListener("resize", this.getSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getSize);
  }

  getSize = () => {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  };

  render() {
    {
      AOS.init();
    }
    console.log(this.state.width);
    return (
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <center>
          <p className="text" style={{ paddingBottom: 100 }}>
            My Skills
          </p>
        </center>
        <div className="row">
          <div
            className="technical"
            style={{ width: "20vw" }}
            ref={divElement => (this.divElement = divElement)}
          >
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
                Backend Development
              </p>
            </center>
            <div className="row">
              <div className="col">
                <img
                  src={mySQL}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">mySQL</p>
                </center>
              </div>
              <div className="col">
                <img
                  src={nodeJS}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">Node.js</p>
                </center>
              </div>
              <div className="col">
                <img src={firebase} height="75vw" width="75vw" />
                <center>
                  <p className="figText">Firebase</p>
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
                Mobile App Development
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
                  <p className="figText">React Native</p>
                </center>
              </div>
              <div className="col">
                <img src={expo} height="75vw" width="75vw" />
                <center>
                  <p className="figText">Expo</p>
                </center>
              </div>
            </div>
          </div>

          <div
            className="technical"
            style={{
              width: "20vw",
              marginTop: this.state.width <= 664 ? 30 : null
            }}
          >
            <center>
              <p
                style={{ paddingBottom: 10, paddingTop: 5 }}
                className="boxText"
              >
                Wearables + Digital Signal Processing
              </p>
            </center>
            <div className="row">
              <div className="col">
                <img
                  src={arduino}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">Arduino</p>
                </center>
              </div>
              <div className="col">
                <img src={matlab} height="75vw" width="75vw" />
                <center>
                  <p className="figText">Matlab</p>
                </center>
              </div>
              <div className="col">
                <img
                  src={hexiwear}
                  height="75vw"
                  width="75vw"
                  style={{ backgroundColor: "white" }}
                />
                <center>
                  <p className="figText">Hexiwear</p>
                </center>
              </div>
            </div>
          </div>
          <div className="technical" style={{ width: "20vw", marginTop: 30 }}>
            <center>
              <p
                style={{ paddingBottom: 10, paddingTop: 5 }}
                className="boxText"
              >
                Additional Programming Languages
              </p>
            </center>
            <div className="row">
              <div className="col">
                <img
                  src={python}
                  height="75vw"
                  width="75vw"
                  //className="circle"
                />
                <center>
                  <p className="figText">Python</p>
                </center>
              </div>
              <div className="col">
                <img src={cSharp} height="75vw" width="75vw" />
                <center>
                  <p className="figText">C#</p>
                </center>
              </div>
              <div className="col">
                <img src={cPlusPlus} height="75vw" width="75vw" />
                <center>
                  <p className="figText">C++</p>
                </center>
              </div>
              <div className="col" style={{}}>
                <img src={java} height="75vw" width="75vw" />
                <center>
                  <p className="figText">Java</p>
                </center>
              </div>
            </div>
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
