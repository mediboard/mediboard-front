import { API_BASE_URL } from '../constants/apiconstants';

const axios = require('axios');

class DrugHttpClient {
	async getTopDrugs() {
		axios.get(API_BASE_URL+'/drugs/top').then((response) => {
			if (response.status !== 200) {
				throw new Error("Failled to collect drugs, status: " + response.status);
			}
			return response.data;
		});
	}

	async getEffects(drug) {
		console.log( process.env.REACT_APP_BACKEND_URI);
		axios.get(API_BASE_URL+'/drugs/'+drug+'/effects').then((response) => {
			if (response.status !== 200) {
				throw new Error("Failed to collect effects, status: " + response.status);
			}
			return response.data;
		});
	}
}

export default DrugHttpClient;
