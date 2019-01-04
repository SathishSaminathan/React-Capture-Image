import React from "react";

const PhotoWidget = props => (
  <div className="output_image_area">
    <img id="photo" alt="Your photo" className="image_style" />
    {/* <a
      id="saveButton"
      className="button save_button"
      onClick={props.handleSaveClick}
      download="sample.png"
    >
      Save Photo
    </a> */}
  </div>
);

export default PhotoWidget;
