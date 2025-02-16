import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div id="main-footer">
      <div id="smaller-footer">
        <img id="image" src="mfb-img1.png" alt="s" />
        <div id="divz">
          <div id="headline">
            <div className="column">
                <h1>League</h1>
                <a href="/home"><p>Home</p></a>
                <a href="/table"><p>Table</p></a>
                <a href="/results"><p>Results</p></a>
                <a href="/clubs"><p>Clubs</p></a>
            </div>
            <div className="column">
              <h1>Stats</h1>
              <a href="/table"><p>Stats page</p></a>
              <a href="/clubs"><p>Teams</p></a>
              <a href="/table"><p>Table</p></a>
            </div>
            <div className="column">
              <h1>Contact</h1>
              <p>FaceBook manager Contact:
              </p>
              <p>League administrator contact:</p>
              <p>Page Creater Contact:</p>
            </div>
            <div className="column">
                <h1>Information </h1>
                <p>This Website was made to give information about the league and to inform players about time and location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
