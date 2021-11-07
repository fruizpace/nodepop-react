import React from "react";
import T from "prop-types";
import { Photo } from "../../common";

const Advert = ({ content, updatedAt, name, sale, price, tags, ...props }) => {
  return (
    <article>
      <div className="photo-container">
        <Photo className="ad-photo" {...props} />
      </div>
      <div>
        <span className="ad-name">{name}</span>
        <br />
        <span className="ad-price">{price}€</span>
        <br />
        <span className="ad-tags">{tags}</span>
        <br />
        <span className="ad-sale">{sale ? "To sell" : "To buy"}</span>
        <br />
      </div>
    </article>
  );
};

export const advertType = {
  name: T.string.isRequired,
  price: T.number.isRequired,
  tags: T.array.isRequired,
  sale: T.bool.isRequired,
};

Advert.propTypes = advertType;

export default Advert;
