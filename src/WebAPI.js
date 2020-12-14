import { getAuthToken } from './utils';
const BASE_URL = 'https://ancient-sea-54746.herokuapp.com';

export const addProducts = ({ img, productName, description, price, type }) => {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('productName', productName);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('type', type);

  return fetch(`${BASE_URL}/products`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};

export const getProducts = (type) => {
  return fetch(`${BASE_URL}/products/${type}`, {
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
  editId,
}) => {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('productName', productName);
  formData.append('description', description);
  formData.append('price', price);
  if (!img) {
    return fetch(`${BASE_URL}/products/${editId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        productName,
        description,
        price,
      }),
    }).then((res) => res.json());
  }

  return fetch(`${BASE_URL}/products/reupload/${editId}`, {
    method: 'PUT',
    body: formData,
  }).then((res) => res.json());
};

export const addReserve = ({
  date,
  entryTime,
  name,
  phone,
  amount,
  username,
}) => {
  return fetch(`${BASE_URL}/reserve`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ date, entryTime, name, phone, amount, username }),
  }).then((res) => res.json());
};

export const getReserve = (date) => {
  return fetch(`${BASE_URL}/reserve/${date}`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const getUserReserve = (username) => {
  return fetch(`${BASE_URL}/reserve/user/${username}`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const deleteReserve = (id) => {
  return fetch(`${BASE_URL}/reserve/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export const signUp = ({ userName, phone, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ userName, phone, password }),
  }).then((res) => res.json());
};

export const test = () => {
  return fetch(`${BASE_URL}/test`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};
