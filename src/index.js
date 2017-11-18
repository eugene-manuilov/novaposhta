class NovaPoshta {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.endpoint = 'https://api.novaposhta.ua/v2.0/json/';
	}

	request(params) {
		const self = this;
		const args = {
			method: 'POST',
			body: JSON.stringify(Object.assign({}, params, { apiKey: self.apiKey })),
		};

		return new Promise((success, error) => {
			fetch(self.endpoint, args).catch(error).then((response) => {
				response.json().catch(error).then((json) => {
					success(json, response);
				});
			});
		});
	}

	getWarehouseTypes(params) {
		return this.request({
			modelName: 'Address',
			calledMethod: 'getWarehouseTypes',
			methodProperties: params,
		});
	}

	getWarehouses(params) {
		return this.request({
			modelName: 'Address',
			calledMethod: 'getWarehouses',
			methodProperties: params,
		});
	}
}

export default NovaPoshta;
