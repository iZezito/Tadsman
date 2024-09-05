// import { ApiResponse } from '@/types';
// import {create} from 'zustand';

// type ResponseStore = {
//   loading: boolean;
//   response: ApiResponse<any> | null;
//   setResponse: (response: ApiResponse<any>) => void;
//   setLoading: (loading: boolean) => void;
// };

// export const useResponseStore = create<ResponseStore>((set) => ({
//   loading: false,
//   response: null,
//   setResponse: (response) => set({ response }),
//   setLoading: (loading) => set({ loading }),
// }));

// store.ts
import { create } from 'zustand';
import { ApiResponse, ApiResponseData } from '@/types';

type ResponseStore = {
  loading: boolean;
  response: ApiResponse<ApiResponseData> | null;
  setResponse: (response: ApiResponse<ApiResponseData>) => void;
  setLoading: (loading: boolean) => void;
};

export const useResponseStore = create<ResponseStore>((set) => ({
  loading: false,
  response: null,
  setResponse: (response) => set({ response }),
  setLoading: (loading) => set({ loading }),
}));
