import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Styles/Container.css";
import skillsContainer from "../Styles/skillsContainer.css";

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
        <div
          className="technical"
          style={{
            width: this.state.width / 2.25
          }}
        >
          <center>
            <p
              style={{
                fontFamily: "Avenir Next",
                fontSize: 24,
                color: "white",
                paddingTop: 10,
                paddingBottom: 20
              }}
            >
              Technical Skills
            </p>
          </center>

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
        </div>
        <div className="soft" style={{ width: this.state.width / 2.25 }}>
          World
        </div>
      </div>
    );
  }
}
