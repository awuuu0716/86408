const BASE_URL = 'http://localhost:4000';

export const addProducts = ({ img, productName, description, price }) => {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('productName', productName);
  formData.append('description', description);
  formData.append('price', price);

  return fetch(`${BASE_URL}/products`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const deleteProduct = (id) => {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export const editProduct = ({
  img,
  productName,
  description,
  price,
  preImgUrl,
  id,
}) => {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('productName', productName);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('preImgUrl', preImgUrl);

  return fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    body: formData,
  }).then((res) => res.json());
};

export const addReserve = ({ date, entryTime, name, phone, amount }) => {
  console.log('api', { date, entryTime, name, phone, amount });
  return fetch(`${BASE_URL}/reserve`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ date, entryTime, name, phone, amount }),
  }).then((res) => res.json());
};

export const getReserve = (date) => {

  return fetch(`${BASE_URL}/reserve/${date}`, {
    method: 'GET',
  }).then((res) => res.json());
};