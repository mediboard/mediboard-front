import { API_BASE_URL } from '../constants/apiconstants';

const axios = require('axios');

class DrugHttpClient {
	async getTopDrugs() {
		const response = await axios.get(API_BASE_URL+'/drugs/top')
		if (response.status !== 200) {
			throw new Error("Failled to collect drugs, status: " + response.status);
		}

		const data = await response.data;
		return data;
	}

	async getEffects(drug) {
		const response = await axios.get(API_BASE_URL+'/drugs/'+drug+'/effects');
		if (response.status !== 200) {
			throw new Error("Failed to collect effects, status: " + response.status);
		}

		const data = await response.data;
		return data;
	}
}

export default DrugHttpClient;
