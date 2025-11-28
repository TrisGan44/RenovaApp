import { apiClient } from './client';
import { Project, ProjectDetailResponse, ProjectPayload } from './types';

const BASE_PATH = '/api/projects';

export const projectsApi = {
  getAll: () => apiClient.get<Project[]>(BASE_PATH),
  getById: (id: number | string) =>
    apiClient.get<ProjectDetailResponse>(`${BASE_PATH}/${id}`),
  create: (payload: ProjectPayload) =>
    apiClient.post<{ message: string; id_proyek: number }>(BASE_PATH, payload),
  update: (id: number | string, payload: ProjectPayload) =>
    apiClient.put<{ message: string }>(`${BASE_PATH}/${id}`, payload),
  remove: (id: number | string) =>
    apiClient.delete<{ message: string }>(`${BASE_PATH}/${id}`),
};
