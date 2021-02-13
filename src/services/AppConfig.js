class AppConfig {
	constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
	}

	get api_url() {
		return this.API_URL;
	}
}

export default new AppConfig();
