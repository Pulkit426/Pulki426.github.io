import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
function ProjectDetailsModal(props) {
  if (props.data) {
    const technologies = props.data.technologies;
    const images = props.data.images;
    var title = props.data.title;
    var description = props.data.description;
    var details = props.data.details
    var gitUrl = props.data.gitUrl;
    var liveUrl = props.data.liveUrl
    if (props.data.technologies) {
      var tech = technologies.map((icons, i) => {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <i className={icons.class} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      if (props.data.images) {
        var img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h1 style={{ padding: "5px 5px 0 5px" }}>
            {title}
          </h1>
          <h4>
          <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              > Github Repo</a>
          <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              > Deployed Live </a>

          </h4>
          <p className="modal-description">{description}</p>
          <p className="modal-description">{details}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;
