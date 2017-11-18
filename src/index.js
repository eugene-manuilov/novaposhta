class NovaPoshta {

	constructor(options = {}) {
		this.apiKey = options.apiKey || '';
		this.endpoint = options.endpoint || 'https://api.novaposhta.ua/v2.0/json/';
		this.logger = options.logger || false;
	}

	log(message, params = {}, type = 'info') {
		if (this.logger) {
			this.logger.log(type, message, params);
		}
	}

	request(params) {
		const self = this;
		const args = {
			method: 'POST',
			body: JSON.stringify(Object.assign({}, params, { apiKey: self.apiKey })),
		};

		return new Promise((resolve, reject) => {
			const fetchPromise = fetch(self.endpoint, args);

			const onSuccess = (json, data) => {
				self.log(`NovaPoshta::${params.calledMethod} request executed`, { params, response: json }, 'info');
				resolve(json, data);
			};

			const onError = (error, data) => {
				self.log(`NovaPoshta::${params.calledMethod} request failed: ${error}`, params, 'error');
				reject(error, data);
			};

			fetchPromise.catch(error => onError(error, null));
			fetchPromise.then((response) => {
				if (response.ok) {
					const jsonPromise = response.json();

					jsonPromise.catch(error => onError(error, null));
					jsonPromise.then((json) => {
						if (json.success) {
							onSuccess(json, response);
						} else {
							const error = json.errors[0] || 'Unexpected error';
							onError(error, json);
						}
					});
				} else {
					onError(response.statusText, null);
				}
			});
		});
	}

	getWarehouseTypes(params = {}) {
		return this.request({
			modelName: 'Address',
			calledMethod: 'getWarehouseTypes',
			methodProperties: params,
		});
	}

	getWarehouses(params = {}) {
		return this.request({
			modelName: 'Address',
			calledMethod: 'getWarehouses',
			methodProperties: params,
		});
	}

}

export default NovaPoshta;
