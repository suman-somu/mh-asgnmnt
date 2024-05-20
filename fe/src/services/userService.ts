// src/services/userService.ts
import axios from 'axios';
import { User } from '../types/User';

const API_URL = 'http://localhost:3000/users';

export const getUsers = (page: number, limit: number, search: string) => {
  return axios.get(`${API_URL}?page=${page}&limit=${limit}&search=${search}`);
};

export const getUserById = (id: string) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createUser = (user: User) => {
  return axios.post(API_URL, user);
};

export const updateUser = (id: string, user: User) => {
  return axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};
