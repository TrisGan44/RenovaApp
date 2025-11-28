import Constants from 'expo-constants';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestConfig = {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: unknown;
};

const envApiBase =
  (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.EXPO_PUBLIC_API_URL ||
  (Constants.expoConfig?.extra as { apiBaseUrl?: string } | undefined)?.apiBaseUrl;

const API_BASE_URL = (envApiBase || 'http://localhost:5000').replace(/\/$/, '');

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

async function request<T>(path: string, config: RequestConfig = {}): Promise<T> {
  const { method = 'GET', headers, body } = config;
  const finalHeaders: HeadersInit = { Accept: 'application/json', ...headers };
  const init: RequestInit = { method, headers: finalHeaders };

  if (body !== undefined) {
    if (body instanceof FormData) {
      init.body = body;
    } else {
      init.body = JSON.stringify(body);
      (finalHeaders as Record<string, string>)['Content-Type'] = 'application/json';
    }
  }

  const response = await fetch(`${API_BASE_URL}${path}`, init);
  const raw = await response.text();

  let data: unknown = raw;
  if (raw) {
    try {
      data = JSON.parse(raw);
    } catch {
      // Leave as raw string when JSON parsing fails
    }
  }

  if (!response.ok) {
    const message =
      typeof data === 'string'
        ? data
        : (data as { message?: string })?.message || 'Request failed';
    throw new ApiError(message, response.status, data);
  }

  return data as T;
}

export const apiClient = {
  get: <T>(path: string, config?: Omit<RequestConfig, 'method'>) =>
    request<T>(path, { ...config, method: 'GET' }),
  post: <T>(path: string, body?: unknown, config?: Omit<RequestConfig, 'method' | 'body'>) =>
    request<T>(path, { ...config, method: 'POST', body }),
  put: <T>(path: string, body?: unknown, config?: Omit<RequestConfig, 'method' | 'body'>) =>
    request<T>(path, { ...config, method: 'PUT', body }),
  delete: <T>(path: string, config?: Omit<RequestConfig, 'method'>) =>
    request<T>(path, { ...config, method: 'DELETE' }),
};

export const apiBaseUrl = API_BASE_URL;
