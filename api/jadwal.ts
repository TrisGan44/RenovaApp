import { apiClient } from './client';
import {
  Arsitek,
  JadwalArsitek,
  JadwalArsitekPayload,
  JadwalMandor,
  JadwalMandorPayload,
  Mandor,
} from './types';

const BASE_PATH = '/api/jadwal';

export const jadwalApi = {
  // Arsitek
  getArsitek: () => apiClient.get<JadwalArsitek[]>(`${BASE_PATH}/arsitek`),
  createArsitek: (payload: JadwalArsitekPayload) =>
    apiClient.post<{ message: string; id: number }>(`${BASE_PATH}/arsitek`, payload),
  updateArsitek: (id: number | string, payload: JadwalArsitekPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/arsitek/${id}`, payload),
  removeArsitek: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/arsitek/${id}`),

  // Mandor
  getMandor: () => apiClient.get<JadwalMandor[]>(`${BASE_PATH}/mandor`),
  createMandor: (payload: JadwalMandorPayload) =>
    apiClient.post<{ message: string; id: number }>(`${BASE_PATH}/mandor`, payload),
  updateMandor: (id: number | string, payload: JadwalMandorPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/mandor/${id}`, payload),
  removeMandor: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/mandor/${id}`),

  // Dropdown sources
  listArsitek: () =>
    apiClient.get<Pick<Arsitek, 'id_arsitek' | 'Nama_Lengkap' | 'status'>[]>(
      `${BASE_PATH}/list/arsitek`,
    ),
  listMandor: () =>
    apiClient.get<Pick<Mandor, 'id_mandor' | 'Nama_Lengkap' | 'status'>[]>(
      `${BASE_PATH}/list/mandor`,
    ),
};
