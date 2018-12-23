import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import Container from "../Styles/Container.css";
import imageOne from "../Images/nedimOne.jpg";
import imageTwo from "../Images/nedimTwo.jpg";
import imageThree from "../Images/nedimThree.jpg";

var count = 0;

var imageArray = [imageOne, imageTwo, imageThree];

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      imageHeight: 0,
      extraHeight: 0,
      currentImage: imageArray[0],
      slideShowImage: imageArray[count],
      scrollPosY: props.scrollPosY
    };
    setInterval(() => {
      count = count + 1;
      if (count > imageArray.length - 1) {
        count = 0;
      }
      this.setState({ currentImage: imageArray[count] });
      //console.log(count);
    }, 8000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height !== this.state.height) {
      this.setState({ height: nextProps.height });
    }
    if (nextProps.width !== this.state.width) {
      this.setState({ width: nextProps.width });
    }
    if (nextProps.scrollPosY !== this.state.scrollPosY) {
      this.setState({ scrollPosY: nextProps.scrollPosY });
    }
  }

  componentWillMount() {
    var about = document.getElementById("about");
    var height = $(about).height();
    this.setState({ imageHeight: height });
  }

  imageSliderClick = number => {
    this.setState({
      currentImage: imageArray[number]
    });
    count = number;
  };

  render() {
    {
      AOS.init();
    }

    return (
      <center>
        <div>
          <div className="animationContainer">
            <p
              className="text"
              style={{ paddingBottom: "3%" }}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-anchor-placement="top-center"
              data-aos-offset="-100"
            >
              About
            </p>
            <p>" "</p>
            <p
              className="text"
              style={{ paddingBottom: "3%" }}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-anchor-placement="top-center"
              data-aos-offset="-100"
            >
              Myself
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="container"
          >
            <div>
              <img
                src={this.state.currentImage}
                className="imageContainer"
                height={this.state.height / 1.5}
                width={this.state.width / 2.5}
                //style={{ marginTop: "5%" }}
              />
              <div className="animationContainer" id="bubbles">
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.currentImage === imageArray[0]
                        ? "white"
                        : "grey",
                    cursor: "pointer"
                  }}
                  onClick={() => this.imageSliderClick(0)}
                />
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.currentImage === imageArray[1]
                        ? "white"
                        : "grey",
                    marginRight: 10,
                    marginLeft: 10,
                    cursor: "pointer"
                  }}
                  onClick={() => this.imageSliderClick(1)}
                />
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: "100%",
                    backgroundColor:
                      this.state.currentImage === imageArray[2]
                        ? "white"
                        : "grey",
                    cursor: "pointer"
                  }}
                  onClick={() => this.imageSliderClick(2)}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                className="imageContainer"
                style={{
                  height: "20vw",
                  width: "30vw",
                  padding: "40px",
                  //paddingTop: "20px"
                  //marginTop: "5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                id="about"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "even"
                  }}
                >
                  <p className="aboutText">
                    I am a third year Biomedical Engineering student at the
                    University of Waterloo. I have many interests which include
                    software development, wearable technologies, biomedical
                    devices, mobile/web app development and artificial
                    intelligence. On top of this I am a member of the varsity
                    basketball team at Waterloo
                  </p>
                  <p>""</p>
                  <p className="aboutText">
                    In my free time you can find me playing basketball, gaming
                    or working on a side project I might have going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    );
  }
}
