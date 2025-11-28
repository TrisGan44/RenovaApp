import { apiClient } from './client';
import {
  CreateUserPayload,
  LoginPayload,
  UpdateUserPayload,
  User,
  UserLoginResponse,
} from './types';

const BASE_PATH = '/api/users';

export const usersApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<UserLoginResponse>(`${BASE_PATH}/login`, payload),
  getAll: () => apiClient.get<User[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<User>(`${BASE_PATH}/${id}`),
  create: (payload: CreateUserPayload) =>
    apiClient.post<{ message: string; id_user: number }>(BASE_PATH, payload),
  update: (id: number | string, payload: UpdateUserPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, payload),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
