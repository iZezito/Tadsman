import { z } from 'zod';

export const formSchema = z.object({
  method: z.string().min(1, 'Method is required'),
  url: z.string().url('Invalid URL'),
  headers: z.array(
    z.object({
      key: z.union([z.string().min(1, 'Key is required'), z.number()]),
      value: z.union([z.string().min(1, 'Value is required'), z.number()]),
    })
  ).optional(),
  bodyType: z.enum(['none', 'json', 'formdata']),
  bodyContent: z.string().optional(),
  formData: z.array(
    z.object({
      key: z.union([z.string().min(1, 'Key is required'), z.number()]),
      value: z.union([z.string().min(1, 'Value is required'), z.number()]),
    })
  ).optional(),
  params: z.array(
    z.object({
      key: z.union([z.string().min(1, 'Key is required'), z.number()]),
      value: z.union([z.string().min(1, 'Value is required'), z.number()]),
    })
  ).optional(),
});

export type RequestFormValues = z.infer<typeof formSchema>;
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};