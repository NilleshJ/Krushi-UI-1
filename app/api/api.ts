/**Test */
// export const url = 'https://devanalyticsapi.orthoai.in/api';

/**Live */
export const url = 'https://devanalyticsapi.orthoai.in/api';

export const _getHeaders = (inputHeaders?: { [key: string]: string }) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('OD_T');

    let headers = inputHeaders || {};
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    const headersWithAuth = token
        ? { ...headers, Authorization: `Bearer ${token}` }
        : headers;
    return headersWithAuth;
};