import React, { useState, useMemo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import "./Header.styles.scss"

function Header(props) {
  const name = props.sharedData?.name ? props.sharedData.name : "";
  const [isChecked, setIsChecked] = useState(false);

  function onThemeSwitchChange(checked) {
    setIsChecked(checked);
    setTheme();
  }

  function setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  const HeaderTitleTypeAnimation = useMemo(() => {
    const titles = props.sharedData?.titles
      ? props.sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat()
      : [];
    return <Typical className="title-styles" steps={titles} loop={50} />;
  }, [props.sharedData?.titles]);

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block", padding: "30px"}}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">



        <div style={{marginLeft: "92rem"}} >
            <Switch
              checked={isChecked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
           </div>
          

          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">{HeaderTitleTypeAnimation}</div>

            <div className="icons">
          <a href="https://www.github.com/Pulkit426" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.twitter.com/Pulkit426" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/pulkit426" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:agrawalpulkit12@gmail.com">
            <i class="fab fa fa-envelope"></i>
          </a>
          <a href="https://drive.google.com/file/d/1YjR0klRe_Vv7YKNnep19_JiigInuazex/view?usp=sharing" target="_blank">
            <i class="fab fa fa-file-pdf"></i>
          </a>
        </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
