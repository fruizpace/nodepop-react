import React from "react";
import defaultPhoto from "../../assets/no_image.png";

const Photo = ({ photo }) => {
  return photo === null ? (
    <img className="photo" src={defaultPhoto} alt="" height="100" width="100" />
  ) : (
    <div>
      <img
        className="photo"
        src={process.env.REACT_APP_API_BASE_URL + photo}
        alt=""
        height="100"
        width="100"
      />
    </div>
  );
};

export default Photo;
