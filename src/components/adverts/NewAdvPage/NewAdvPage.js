import { useState } from "react";
import { Button } from "../../common";
import Layout from "../../layout";
import { createNewAdv } from "../service";

function NewAdvPage() {
  const [adv, setAdv] = useState({
    name: "",
    price: "",
    sale: "",
    tags: [],
    photo: "",
  });

  const handleChange = (event) => {
    let value;
    if (event.target.name === "photo") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }

    setAdv({
      ...adv,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createNewAdv(adv);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="New Ad">
      <div className="newAdvPage">
        <form onSubmit={handleSubmit}>
          <input
            required
            className="newAdv-name"
            placeholder="Name"
            name="name"
            type="text"
            value={adv.name}
            onChange={handleChange}
          />
          <br />
          <select
            className="sale"
            name="sale"
            value={adv.sale}
            onChange={handleChange}
            required
          >
            <option name="sale" value={true}>
              To Sell
            </option>
            <option name="sale" value={false}>
              To Buy
            </option>
          </select>
          <br />
          <input
            name="price"
            placeholder="Price"
            required
            className="newAdv-price"
            type="number"
            value={adv.price}
            onChange={handleChange}
          />

          <div className="tags-select">
            <label htmlFor="tags"> Choose tags </label>
            <select
              name="tags"
              id="tags"
              size="4"
              value={[adv.tags]}
              onChange={handleChange}
              multiple={true}
              required
            >
              <option name="lifestyle" value="lifestyle">
                lifestyle
              </option>
              <option name="mobile" value="mobile">
                mobile
              </option>
              <option name="motor" value="motor">
                motor
              </option>
              <option name="work" value="work">
                work
              </option>
            </select>
          </div>
          <br />
          <div>
            <label className="photo-label" htmlFor="photo">
              Upload a photo of your product
            </label>
            <input
              className="photo-input"
              name="photo"
              type="file"
              onChange={handleChange}
            />
          </div>
          <br />
          <Button
            className="submit-button"
            type="submit"
            disabled={!adv.name || !adv.sale || !adv.price || !adv.tags}
          >
            Create a new Ad
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default NewAdvPage;