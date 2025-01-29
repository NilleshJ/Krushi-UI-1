import axios from "axios";
import { _getHeaders, url } from "./api";
import { encryptData } from "@/types/webCrypto";

export const login = async (data: any) => {
    const config = {
        headers: _getHeaders(),
    };
    try {
        const response = await axios.post(`${url}/admin/login`, data, config);
        if (response.status === 200) {
            const encryptedAdmin :any= encryptData(response?.data?.admin);
            localStorage.setItem("OD_T", response?.data?.token);
            localStorage.setItem("OD_U", encryptedAdmin);
      return response;
            // localStorage.setItem('OD_T', response?.data?.token);
            // localStorage.setItem('OD_U', JSON.stringify(response?.data?.admin));
            // return response;
        }
    } catch (error: any) {
        return error?.response;
    }
};

export const createViewer = async (data: any) => {
    const config = {
        headers: _getHeaders(),
    };
    try {
        const response = await axios.post(`${url}/admin/viewer`, data, config);
        if (response.status === 200 || response.status === 201) {
            return response;
        }
    } catch (error: any) {
        return error?.response;
    }
};

export const updateViewer = async (
    id: string,
    data: any
) => {
    const config = {
        headers: _getHeaders(),
    };
    try {
        const response = await axios.put(`${url}/admin/updateAdmin/${id}`, data, config);
        if (response.status === 200 || response.status === 201) {
            return response;
        }
    } catch (error: any) {
        return error?.response;
    }
};

export const getViewers = async (data: any) => {
    const config = {
        headers: _getHeaders(),
    };

    try {
        const response = await axios.post(`${url}/admin/admins`, data, config);
        if (response?.status === 200) return response;
    } catch (error: any) {
        return error?.response;
    }
};

export const deleteViewer = async (selectedDataId: string) => {
    const config = {
        headers: _getHeaders(),
    };
    try {
        const response = await axios.delete(`${url}/admin/deleteViewer/${selectedDataId}`, config); // Assuming this is the correct endpoint for deletion

        if (response?.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to delete viewer');
        }
    } catch (error: any) {
        console.error('Error deleting viewer:', error);
        throw error;
    }
};

export const getViewerById = async (id: any) => {
    const config = {
        headers: _getHeaders(),
    };

    try {
        const response = await axios.get(`${url}/admin/getById/${id}`, config);
        if (response?.status === 200) return response;
    } catch (error: any) {
        return error?.response;
    }
};
