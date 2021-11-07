import { useEffect, useState } from "react";
import { getLatestAdverts } from "../service";
import { Link } from "react-router-dom";

import Layout from "../../layout";
import Advert from "./Advert";

function AdvertsPage(history, ...props) {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => {
      setAds(adverts);
    });
  }, []);
  return (
    <Layout title="Adverts list" {...props}>
      <div className="advertsPage">
        <ul>
          {ads.length > 0 ? (
            ads.map((adv) => (
              <li className="Advert-div" key={adv.id}>
                <Link to={`/ads/${adv.id}`}>
                  <Advert {...adv} />
                </Link>
              </li>
            ))
          ) : (
            <div>
              <h2>No products to show</h2>
              <Link to={`adv/new`}>
                <h2 className="link">Create a new Ad</h2>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;