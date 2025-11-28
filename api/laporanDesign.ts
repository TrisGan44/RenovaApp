import { apiClient } from './client';
import { LaporanDesign, LaporanDesignPayload } from './types';

const BASE_PATH = '/api/laporan-design';

export const laporanDesignApi = {
  getAll: () => apiClient.get<LaporanDesign[]>(BASE_PATH),
  getById: (id: number | string) => apiClient.get<LaporanDesign>(`${BASE_PATH}/${id}`),
  create: (payload: LaporanDesignPayload) =>
    apiClient.post<{ message: string; id_design: number }>(BASE_PATH, payload),
  update: (id: number | string, payload: LaporanDesignPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, payload),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
