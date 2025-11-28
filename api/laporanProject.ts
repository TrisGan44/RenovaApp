import { apiClient } from './client';
import { LaporanProject, LaporanProjectPayload } from './types';

const BASE_PATH = '/api/laporan-project';

export const laporanProjectApi = {
  getAll: () => apiClient.get<LaporanProject[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<LaporanProject>(`${BASE_PATH}/${id}`),
  create: (payload: LaporanProjectPayload) =>
    apiClient.post<{ message: string; id_laporanProject: number }>(BASE_PATH, payload),
  update: (id: number | string, payload: LaporanProjectPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, payload),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
