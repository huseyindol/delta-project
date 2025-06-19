import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios, { AxiosError } from 'axios';

// API Base URL - environment variable veya config'den alınabilir
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// Axios instance oluştur
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 saniye timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Tüm isteklere müdahale edebilir
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Request log
    // console.log(
    //   '🚀 Request başlatıldı:',
    //   config.method?.toUpperCase(),
    //   config.url
    // );

    return config;
  },
  (error: AxiosError) => {
    console.error('❌ Request hatası:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor - Tüm cevaplara müdahale edebilir
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Başarılı response log
    // console.log('✅ Response alındı:', response.status, response.config.url);
    return response;
  },
  (error: AxiosError) => {
    // Hata durumlarını handle edebilirsiniz
    console.error('❌ Response hatası:', error.response?.status, error.message);

    // 401 Unauthorized durumunda logout işlemi yapabilirsiniz
    if (error.response?.status === 401) {
      console.error('Kullanıcı girişi yapılmamış');
    }

    // 403 Forbidden
    if (error.response?.status === 403) {
      console.error('Erişim yetkisi yok');
    }

    // 500 Server Error
    if (error.response?.status === 500) {
      console.error('Sunucu hatası oluştu');
    }

    return Promise.reject(error);
  }
);

// HTTP Methods
export const HttpApi = {
  // GET method
  get: async <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response = await axiosInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw handleError(error as AxiosError);
    }
  },

  // POST method
  post: async <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response = await axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw handleError(error as AxiosError);
    }
  },

  // PUT method
  put: async <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response = await axiosInstance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw handleError(error as AxiosError);
    }
  },

  // DELETE method
  delete: async <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response = await axiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      throw handleError(error as AxiosError);
    }
  },

  // PATCH method (bonus)
  patch: async <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response = await axiosInstance.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw handleError(error as AxiosError);
    }
  },
};

// Error handling fonksiyonu
const handleError = (error: AxiosError) => {
  const errorMessage =
    error.response?.data || error.message || 'Bilinmeyen bir hata oluştu';

  // Custom error object
  return {
    message: errorMessage,
    status: error.response?.status,
    statusText: error.response?.statusText,
    data: error.response?.data,
  };
};

// Interceptor'ları özelleştirmek için yardımcı fonksiyonlar
export const addRequestInterceptor = (
  onFulfilled?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig,
  onRejected?: (error: AxiosError) => AxiosError
) => {
  return axiosInstance.interceptors.request.use(onFulfilled, onRejected);
};

export const addResponseInterceptor = (
  onFulfilled?: (response: AxiosResponse) => AxiosResponse,
  onRejected?: (error: AxiosError) => AxiosError
) => {
  return axiosInstance.interceptors.response.use(onFulfilled, onRejected);
};

// Interceptor kaldırma fonksiyonları
export const removeRequestInterceptor = (interceptorId: number) => {
  axiosInstance.interceptors.request.eject(interceptorId);
};

export const removeResponseInterceptor = (interceptorId: number) => {
  axiosInstance.interceptors.response.eject(interceptorId);
};

// Axios instance'ını export et (direkt kullanım için)
export { axiosInstance };

// Default export
export default HttpApi;
