import AppConfig from '../AppConfig';

const axios = require('axios');

class DrugHttpClient {
	async getTopDrugs() {
		const response = await axios.get(AppConfig.api_url+'/drugs/top')
		if (response.status !== 200) {
			throw new Error("Failled to collect drugs, status: " + response.status);
		}

		const data = await response.data;
		return data;
	}

	async getEffects(drug) {
		const response = await axios.get(AppConfig.api_url+'/drugs/'+drug+'/effects');
		if (response.status !== 200) {
			throw new Error("Failed to collect effects, status: " + response.status);
		}

		const data = await response.data;
		return data;
	}
}

export default new DrugHttpClient();
