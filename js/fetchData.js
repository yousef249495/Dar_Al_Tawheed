import { showLoader, hideLoader } from './loadingIcon.js';

export default async function fetchData(dataLocation) {
    try {
        showLoader();
        const response = await fetch(dataLocation);  // Corrected fetch syntax

        if (!response.ok) {
            throw new Error(`There is a problem. Status code: ${response.status}`);
        }

        const data = await response.json();  // Await the JSON parsing
        return data;
    } catch (error) {
        console.error(error);
        throw error;  // Re-throw the error to allow further handling
    } finally {
        hideLoader();
    }
}
