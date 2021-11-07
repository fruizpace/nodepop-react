import client from "../../api/client";

const advertsBaseURL = "/api/v1/adverts";

export const getLatestAdverts = (name, price, tags, sale) => {
  let filters = "";
  if (name) {
    filters += `name=${name}`;
  }
  const url = `${advertsBaseURL}?${filters}`;
  return client.get(url);
};

export const createNewAdv = async (adv) => {
  const newAdv = new FormData();
  newAdv.append("name", adv.name);
  newAdv.append("sale", adv.sale);
  newAdv.append("price", adv.price);
  newAdv.append("tags", [adv.tags]);
  newAdv.append("photo", adv.photo);

  const url = `${advertsBaseURL}`;
  try {
    await client.post(url, newAdv);
  } catch (error) {
    console.log(error);
  }
};

export const getAdv = (advId) => {
  const url = `${advertsBaseURL}/${advId}`;
  return client.get(url);
};

export const deleteAdv = (advId) => {
  const url = `${advertsBaseURL}/${advId}`;
  return client.delete(url, advId);
};
