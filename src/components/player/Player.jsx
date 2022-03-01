import React from "react";
import ReactPlayer from "react-player";
import "./player.css";

const Player = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=OPVc9w2v9gk"
      className="react-player"
      width="100%"
      height="100%"
    />
  </div>
);

export default Player;