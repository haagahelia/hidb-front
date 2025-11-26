// Basic API CLIENT, no error handling(yet)

const API_URL = import.meta.env.VITE_BE_SERVER_BASE_URL;

export const api = {
    aircraft: {
        getAll: async () => {
            const response = await fetch(`${API_URL}/aircraft`);
            return response.json();
        },
        getById: async (id) => {
            const response = await fetch(`${API_URL}/aircraft/${id}`);
            return response.json();
        },
    },
    organizations: {
        getAll: async () => {
            const response = await fetch(`${API_URL}/organizations`);
            return response.json();
        },
        getById: async (id) => {
            const response = await fetch(`${API_URL}/organizations/${id}`);
            return response.json();
        },
    },
};
