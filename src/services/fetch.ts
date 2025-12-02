import {AircraftInterface} from "@/interfaces/interfaces";
import {OrganizationInterface} from "@/interfaces/interfaces";

const API_BASE = import.meta.env.VITE_API_BASE || 'https://hidb-back-sdp-2-aviation-museum.2.rahtiapp.fi';

export async function fetchAllAirCrafts() {
    try {
        const response = await fetch(`${API_BASE}/api/aircraft`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const allAirCrafts: AircraftInterface[] = data.data;

        return allAirCrafts;
    } catch (error) {
        console.error("There was a problem:", error);
        throw error;
    }
}

export async function fetchAircraftById(id: number) {
    try {
        const response = await fetch(`${API_BASE}/api/aircraft/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const singleAircraft: AircraftInterface = data.data;
        console.log(singleAircraft);

        return singleAircraft;
    } catch (error) {
        console.error("There was a problem:", error);
        throw error;
    }
}

export async function fetchAllOrganizations() {
    try {
        const response = await fetch(`${API_BASE}/api/organization`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const allOrganizations: OrganizationInterface[] = data.data;

        return allOrganizations;
    } catch (error) {
        console.error("There was a problem:", error);
        throw error;
    }
}

export async function fetchOrganizationById(id: number) {
    try {
        const response = await fetch(`${API_BASE}/api/organization/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const singleOrganization: OrganizationInterface = data.data;
        console.log(singleOrganization);

        return singleOrganization;
    } catch (error) {
        console.error("There was a problem:", error);
        throw error;
    }
}
