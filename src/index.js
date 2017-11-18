class NovaPoshta {

	constructor(options = {}) {
		this.apiKey = options.apiKey || '';
		this.endpoint = options.endpoint || 'https://api.novaposhta.ua/v2.0/json/';
		this.logger = options.logger || false;
	}

	_log(message, params = {}, type = 'info') {
		if (this.logger) {
			this.logger.log(type, message, params);
		}
	}

	_request(params) {
		const self = this;
		const args = {
			method: 'POST',
			body: JSON.stringify(Object.assign({}, params, { apiKey: self.apiKey })),
		};

		return new Promise((resolve, reject) => {
			const fetchPromise = fetch(self.endpoint, args);

			const onSuccess = (json, data) => {
				self._log(`NovaPoshta::${params.calledMethod} request executed`, { params, response: json }, 'info');
				resolve(json, data);
			};

			const onError = (error, data) => {
				self._log(`NovaPoshta::${params.calledMethod} request failed: ${error}`, params, 'error');
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

	_requestAddress(method, params = {}) {
		return this._request({
			modelName: 'Address',
			calledMethod: method,
			methodProperties: params,
		});
	}

	searchSettlements(params = {}) {
		return this._requestAddress('searchSettlements', params);
	}

	searchSettlementStreets(params = {}) {
		return this._requestAddress('searchSettlementStreets', params);
	}

	updateAddress(params = {}) {
		return this._requestAddress('update', params);
	}

	saveAddress(params = {}) {
		return this._requestAddress('save', params);
	}

	getAreas(params = {}) {
		return this._requestAddress('getAreas', params);
	}

	getCities(params = {}) {
		return this._requestAddress('getCities', params);
	}

	getSettlements(params = {}) {
		return this._request({
			modelName: 'AddressGeneral',
			calledMethod: 'getSettlements',
			methodProperties: params,
		});
	}

	getWarehouses(params = {}) {
		return this._requestAddress('getWarehouses', params);
	}

	getWarehouseTypes(params = {}) {
		return this._requestAddress('getWarehouseTypes', params);
	}

	getStreet(params = {}) {
		return this._requestAddress('getStreet', params);
	}

	deleteAddress(params = {}) {
		return this._requestAddress('delete', params);
	}

}

export default NovaPoshta;
