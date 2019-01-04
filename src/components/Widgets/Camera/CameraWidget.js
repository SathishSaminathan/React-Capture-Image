import React from "react";

const CameraWidget = (props) => (
  <div className="camera" >
    <video id="video" />
    <a id="startButton" className="button take_photo_button" onClick={props.handleStartClick} >
      <span>TAKE PHOTO</span>
    </a>
  </div>
);

export default CameraWidget;