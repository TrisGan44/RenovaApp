import { apiClient } from './client';
import {
  Admin,
  AdminLoginResponse,
  AdminRegistrationPayload,
  LoginPayload,
} from './types';

const BASE_PATH = '/api/admins';

export const adminsApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<AdminLoginResponse>(`${BASE_PATH}/login`, payload),
  getAll: () => apiClient.get<Admin[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<Admin>(`${BASE_PATH}/${id}`),
  register: (payload: AdminRegistrationPayload) =>
    apiClient.post<{ message: string; id_user: number; id_admin: number }>(BASE_PATH, payload),
  updateStatus: (id: number | string, status: string) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, { status }),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
