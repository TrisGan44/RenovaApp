import { LoginPayload, Mandor, MandorLoginResponse, MandorRegistrationPayload } from './types';
import { apiClient } from './client';

const BASE_PATH = '/api/mandor';

export const mandorApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<MandorLoginResponse>(`${BASE_PATH}/login`, payload),
  register: (payload: MandorRegistrationPayload) =>
    apiClient.post<{ message: string; id_user: number; id_mandor: number }>(
      `${BASE_PATH}/register`,
      payload,
    ),
  getAll: () => apiClient.get<Mandor[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<Mandor>(`${BASE_PATH}/${id}`),
  updateStatus: (id: number | string, status: string) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, { status }),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
