import { useEffect, useState } from "react";
import Layout from "../../layout";
import { deleteAdv, getAdv } from "../service";
import { Button, Photo } from "../../common";

function AdvertPage({ match }) {
  const [singleAdv, setSingleAdv] = useState();

  useEffect(() => {
    getAdv(match.params.advId).then((singleAdv) => setSingleAdv(singleAdv));
  }, [match.params.advId]);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteAdv(singleAdv.id);
    } catch (error) {
      console.error(error);
    }
  };

  const trySingleAdv = singleAdv !== undefined;

  const photo = trySingleAdv ? { photo: singleAdv.photo } : {};

  return trySingleAdv ? (
    <Layout title={"Products Details"}>
      <div className="detail-container">
        <div className="Photo-div">
          <Photo {...photo} />
        </div>
        <div className="text-div">
          <span className="name">Description: {singleAdv.name}</span>
          <br />
          <span className="price">Price: {singleAdv.price}€</span>
          <br />
          <span className="sale">Sale: {singleAdv.sale ? "Yes" : "No"}</span>
          <br />
          <span className="tags">Tags: {singleAdv.tags.join(", ")}</span>
        </div>
      </div>
      <br />
      <div className="delete-button">
        <Button onClick={handleDelete}>Delete Product</Button>
      </div>
    </Layout>
  ) : (
    <Layout title="Advert-title">
      <div className="advertPage">Loading adverts...</div>
    </Layout>
  );
}

export default AdvertPage;
