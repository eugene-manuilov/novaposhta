import Model from './Model';
import Schema from './Schema';

export default (() => {
	const privateProps = new WeakMap();

	class NovaPoshta {

		constructor(options = {}) {
			const self = this;

			self.apiKey = options.apiKey || '';
			self.endpoint = options.endpoint || 'https://api.novaposhta.ua/v2.0/json/';
			self.logger = options.logger || false;

			const models = {};
			Object.keys(Schema).forEach((model) => {
				const key = model.toLowerCase().substring(0, 1) + model.substring(1);
				models[key] = new Model(self, model, Schema[model]);
			});

			privateProps.set(self, models);
		}

		log(message, params = {}, type = 'info') {
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

		get address() {
			return privateProps.get(this).address;
		}

		get common() {
			return privateProps.get(this).common;
		}

		get counterparty() {
			return privateProps.get(this).counterparty;
		}

		get contactPerson() {
			return privateProps.get(this).contactPerson;
		}

		get internetDocument() {
			return privateProps.get(this).internetDocument;
		}

	}

	NovaPoshta.version = '1.0.0';

	return NovaPoshta;
})();
