import React, { Component } from "react";
import StarStyles from "../Styles/Stars.css";
import Container from "../Styles/Container.css";
import $ from "jquery";

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      aboutHeight: props.aboutHeight
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height !== this.state.height) {
      this.setState({ height: nextProps.height });
    }
    if (nextProps.width !== this.state.width) {
      this.setState({ width: nextProps.width });
    }
    if (nextProps.aboutHeight !== this.state.aboutHeight) {
      this.setState({ aboutHeight: nextProps.aboutHeight });
    }
  }

  render() {
    return (
      <center>
        <div
          style={{
            paddingTop: this.state.height / 7,
            paddingBottom: this.state.height / 8
          }}
        >
          <p className="text">Hi, I'm Nedim.</p>
          <p className="text">Welcome to my Website.</p>
        </div>
        <div className="container smallText">
          <div>
            <p
              style={{ cursor: "pointer", width: 100 }}
              onClick={() => this.props.handleClickAbout()}
            >
              About
            </p>
            <div
              className="homeOptions"
              style={{
                height: this.state.height / 3.5,
                width: this.state.width / 6,
                marginTop: 40
              }}
              onClick={() => this.props.handleClickAbout()}
            >
              <p className="innerText">
                Learn more about myself and my interests
              </p>
            </div>
          </div>
          <div>
            <p
              style={{
                cursor: "pointer",
                width: 150
              }}
              onClick={() => this.props.handleClickExp()}
            >
              Experience
            </p>
            <div
              className="homeOptions"
              style={{
                height: this.state.height / 3.5,
                width: this.state.width / 6,
                marginTop: 40
              }}
              onClick={() => this.props.handleClickExp()}
            >
              <p className="innerText">
                Find out about my different job experiences
              </p>
            </div>
          </div>
          <div>
            <p style={{ paddingBottom: 40 }}>Skills</p>
            <div
              className="homeOptions"
              style={{
                height: this.state.height / 3.5,
                width: this.state.width / 6
              }}
            >
              <p className="innerText">See what I bring to the table</p>
            </div>
          </div>
          <div>
            <p style={{ paddingBottom: 40 }}>Projects</p>
            <div
              className="homeOptions"
              style={{
                height: this.state.height / 3.5,
                width: this.state.width / 6
              }}
            >
              <p className="innerText">
                View the different projects I've been working on
              </p>
            </div>
          </div>
        </div>
      </center>
    );
  }
}
