import { apiClient } from './client';
import { Janji, JanjiPayload, UpdateJanjiStatusPayload } from './types';

const BASE_PATH = '/api/janji';

export const janjiApi = {
  create: (payload: JanjiPayload) =>
    apiClient.post<{ message: string; id_janji: number }>(`${BASE_PATH}/buat`, payload),
  getAll: () => apiClient.get<Janji[]>(`${BASE_PATH}/all`),
  getByUser: (id_user: number | string) =>
    apiClient.get<Janji[]>(`${BASE_PATH}/user/${id_user}`),
  updateStatus: (id_janji: number | string, payload: UpdateJanjiStatusPayload) =>
    apiClient.put<{ message: string; id_janji: number; status: string }>(
      `${BASE_PATH}/${id_janji}/status`,
      payload,
    ),
  remove: (id_janji: number | string) =>
    apiClient.delete<{ message: string; id_janji?: number }>(`${BASE_PATH}/${id_janji}`),
};
