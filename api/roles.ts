import { apiClient } from './client';
import { Role } from './types';

const BASE_PATH = '/api/roles';

export const rolesApi = {
  getAll: () => apiClient.get<Role[]>(BASE_PATH),
};
