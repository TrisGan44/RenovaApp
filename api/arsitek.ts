import { apiClient } from './client';
import {
  Arsitek,
  ArsitekLoginResponse,
  ArsitekRegistrationPayload,
  LoginPayload,
} from './types';

const BASE_PATH = '/api/arsitek';

export const arsitekApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<ArsitekLoginResponse>(`${BASE_PATH}/login`, payload),
  register: (payload: ArsitekRegistrationPayload) =>
    apiClient.post<{ message: string; id_user: number; id_arsitek: number }>(
      `${BASE_PATH}/register`,
      payload,
    ),
  getAll: () => apiClient.get<Arsitek[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<Arsitek>(`${BASE_PATH}/${id}`),
  updateStatus: (id: number | string, status: string) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, { status }),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
