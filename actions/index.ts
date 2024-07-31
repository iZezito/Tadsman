'use server';
import { ApiResponse, RequestFormValues } from '@/types';

// export const sendRequest = async (formData: RequestFormValues) => {
//   const { method, url, headers, bodyType, bodyContent, formData: formDataArray, params } = formData;

//   // Convert params to query string
//   const queryString = params?.length
//     ? '?' + new URLSearchParams(params.map(({ key, value }) => [String(key), String(value)])).toString()
//     : '';

//   // Construct headers object
//   const headersObj = headers?.reduce((acc, { key, value }) => {
//     acc[String(key)] = String(value);
//     return acc;
//   }, {} as Record<string, string>);

//   // Construct body
//   let body: BodyInit | null = null;
//   if (bodyType === 'json' && bodyContent) {
//     body = bodyContent;
//   } else if (bodyType === 'formdata' && formDataArray) {
//     body = new FormData();
//     formDataArray.forEach(({ key, value }) => {
//       (body as FormData).append(String(key), String(value));
//     });
//   }

//   try {
//     const response = await fetch(url + queryString, {
//       method,
//       headers: headersObj,
//       body: method !== 'get' && method !== 'head' ? body : null,
//     });

//     const responseData = await response.json();
//     if (!response.ok) {
//       throw new Error(responseData.message || 'Request failed');
//     }

//     return responseData;
//   } catch (error) {
//     console.error('Request error:', error);
//     throw error;
//   }
// };

// export default sendRequest;

export const sendRequest = async <T>(formData: RequestFormValues): Promise<ApiResponse<T>> => {
  const { method, url, headers, bodyType, bodyContent, formData: formDataArray, params } = formData;

  // Convert params to query string
  const queryString = params?.length
    ? '?' + new URLSearchParams(params.map(({ key, value }) => [String(key), String(value)])).toString()
    : '';

  // Construct headers object
  const headersObj = headers?.reduce((acc, { key, value }) => {
    acc[String(key)] = String(value);
    return acc;
  }, {} as Record<string, string>);

  // Construct body
  let body: BodyInit | null = null;
  if (bodyType === 'json' && bodyContent) {
    body = bodyContent;
  } else if (bodyType === 'formdata' && formDataArray) {
    body = new FormData();
    formDataArray.forEach(({ key, value }) => {
      (body as FormData).append(String(key), String(value));
    });
  }

  try {
    const response = await fetch(url + queryString, {
      method,
      headers: headersObj,
      body: method !== 'GET' && method !== 'HEAD' ? body : null, // Only include body for methods that allow it
    });

    const responseData = await response.json();
    if (!response.ok) {
      return { success: false, error: responseData.message || 'Request failed' };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error('Request error:', error);
    return { success: false, error: (error as Error).message || 'Request failed' };
  }
};