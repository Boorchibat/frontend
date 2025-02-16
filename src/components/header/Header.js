import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <div>
        <div id="container-div">
          <div>
            <a href="/dc-hawks">
              <img
                style={{ marginLeft: "0" }}
                className="logo"
                src="hawks.jpeg"
                alt="hi"
              />
            </a>

            <a href="/red-hawks">
              <img className="logo" src="redhawks.png" alt="hi" />
            </a>

            <a href="/wolves">
              <img
                style={{ width: "100px" }}
                className="logo"
                src="wolves.jpeg"
                alt="hi"
              />
            </a>

            <a href="/dc-masters">
              <img
                style={{ marginRight: "30px" }}
                className="logo"
                src="masters.jpeg"
                alt="hi"
                href="/masters"
              />
            </a>

            <a href="/mcc">
              <img className="logo" src="MCC team badge.jpg" alt="hi" />
            </a>

            <a href="/jaguars">
              <img className="logo" src="jaguars.jpeg" alt="hi" />
            </a>
          </div>
          <div id="header-div">
            <div id="header-small">
              <img id="mfb-img" src="./mfb-img1.png" alt="img" />
              <h1
                style={{
                  marginLeft: "220px",
                  fontFamily: "serif",
                  marginTop: "25px",
                }}
              >
                DC Mongolian Soccer League
              </h1>
            </div>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <a className="href" href="/">
              Home
            </a>
            <a className="href" href="/results">
              Results
            </a>
            <a className="href" href="/table">
              Table
            </a>
            <a className="href" href="/clubs">
              Clubs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
