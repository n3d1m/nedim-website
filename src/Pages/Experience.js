import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Styles/Container.css";
import JobCard from "../Styles/JobCard.css";
import wsib from "../Images/wsib.png";
import grandRiver from "../Images/grandRiverFoods.png";

export default class Experience extends React.Component {
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
      <div style={{ overflowX: "hidden" }}>
        <center>
          <div
            className="text"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-anchor-placement="top-center"
            data-aos-offset="-100"
          >
            My Job Experiences
          </div>
        </center>

        <center>
          <div style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
            <div
              style={{
                marginTop: 100,
                height: "100%",
                width: "100%",
                overflow: "auto",
                paddingRight: "20px"
              }}
            >
              <div
                className="main"
                style={{
                  height: "16vw",
                  width: "45vw",
                  marginRight: this.state.width / 2,
                  marginLeft: "-1vw",
                  marginBottom: 100
                }}
                data-aos="slide-right"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="500"
                data-aos-anchor-placement="top-center"
                data-aos-offset="-150"
              >
                <div
                  className="picture"
                  style={{
                    width: "16vw",
                    height: "16vw"
                  }}
                >
                  <img
                    src={wsib}
                    height={this.state.width / 7}
                    width={this.state.width / 15}
                    style={{
                      borderStyle: "solid",
                      borderRadius: "10%",
                      marginTop: "8%"
                    }}
                  />
                </div>
                <div className="secondRow">
                  <div
                    className="title verticalAlign"
                    style={{
                      width: this.state.width / 3,
                      height: this.state.height / 10
                      //verticalAlign: "middle"
                    }}
                  >
                    <center>
                      <div>
                        <p>WSIB Innovation Lab - Designer/Developer</p>
                        <p>September 2018 - December 2018</p>
                      </div>
                    </center>
                  </div>

                  <div
                    style={{
                      color: "white",
                      //marginTop: 10,
                      textAlign: "left",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingBottom: 10,
                      fontFamily: "Avenir Next",
                      fontSize: "0.9vw",
                      position: "relative",
                      marginTop: "1vw"
                      // display: "flex",
                      // flexDirection: "column",
                      // justifyContent: "center",
                      // alignItems: "center",
                    }}
                  >
                    <p>
                      Responsible for the continued frontend and backend
                      development of WSIB’s web portal prototype
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Used ReactJS to code the frontend components while using a
                      mySQL database to read and write data to the frontend
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Created a prototype mobile app as part of an independent
                      research project for the lab
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      The app included several different pages (including a
                      login page) which were connected to a Firebase database
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="main"
                style={{
                  height: "16vw",
                  width: "45vw",
                  marginLeft: this.state.width / 2,
                  marginRight: "-1vw",
                  marginBottom: 100
                }}
                data-aos="slide-left"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="500"
                data-aos-anchor-placement="top-center"
                data-aos-offset="-150"
              >
                <div
                  className="picture"
                  style={{
                    width: "16vw",
                    height: "16vw"
                  }}
                >
                  <img
                    src={wsib}
                    height={this.state.width / 7}
                    width={this.state.width / 15}
                    style={{
                      borderStyle: "solid",
                      borderRadius: "10%",
                      marginTop: "8%"
                    }}
                  />
                </div>
                <div
                  className="secondRow"
                  style={{ width: this.state.width / 3 }}
                >
                  <div
                    className="title verticalAlign"
                    style={{
                      width: this.state.width / 3,
                      height: this.state.height / 10
                      //verticalAlign: "middle"
                    }}
                  >
                    <center>
                      <div>
                        <p>WSIB Innovation Lab - Designer/Developer</p>
                        <p>January 2018 - April 2018</p>
                      </div>
                    </center>
                  </div>

                  <div
                    style={{
                      color: "white",
                      marginTop: "1vw",
                      textAlign: "left",
                      paddingLeft: 10,
                      fontFamily: "Avenir Next",
                      fontSize: "0.9vw",
                      paddingRight: 10,
                      paddingBottom: 10,
                      position: "relative"
                      //width: this.state.width / 3
                    }}
                  >
                    <p>
                      Responsible for the frontend development of WSIB’s web
                      portal prototype
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Used tools such as Sketch to create and design the
                      different portal pages before they were coded
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Used ReactJS to code and build the different webpages
                      while using Javascript + CSS to create the different
                      interactive components within them
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Conducted user interviews in order to receive feedback on
                      the prototype that the lab was working on
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="main"
                style={{
                  height: "16vw",
                  width: "45vw",
                  marginRight: this.state.width / 2,
                  marginLeft: "-1vw",
                  marginBottom: 100
                }}
                data-aos="slide-right"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="500"
                data-aos-anchor-placement="top-center"
                data-aos-offset="-150"
              >
                <div
                  className="picture"
                  style={{
                    width: "16vw",
                    height: "16vw"
                  }}
                >
                  <img
                    src={grandRiver}
                    height={this.state.width / 7}
                    width={this.state.width / 12}
                    style={{
                      borderStyle: "solid",
                      borderRadius: "10%",
                      marginTop: "7%"
                    }}
                  />
                </div>
                <div
                  className="secondRow"
                  style={{ width: this.state.width / 3 }}
                >
                  <div
                    className="title verticalAlign"
                    style={{
                      width: this.state.width / 3,
                      height: this.state.height / 10
                      //verticalAlign: "middle"
                    }}
                  >
                    <center>
                      <div>
                        <p>Grand River Foods - Co-Op Student</p>
                        <p>May 2017 - August 2017</p>
                      </div>
                    </center>
                  </div>

                  <div
                    style={{
                      color: "white",
                      paddingTop: "2vw",
                      textAlign: "left",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingBottom: 10,
                      fontFamily: "Avenir Next",
                      fontSize: "0.9vw"
                    }}
                  >
                    <p>
                      Worked on a production line in a fast-paced team
                      environment with strict deadlines
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Inspected products for any defects and flaws for quality
                      assurance purposes
                    </p>
                    <p style={{ color: "black", fontSize: 6 }}>""</p>
                    <p>
                      Documented areas of product loss on the production line
                      and producted a technical report which outlined different
                      methods and strategies on how to reduce loses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
