import Model from './Model';
import Schema from './Schema';
import ERRORS from './Errors';

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
				body: JSON.stringify({ ...params, apiKey: self.apiKey }),
			};

			return new Promise((resolve, reject) => {
				const onError = (errors, data) => {
					self.log(`NovaPoshta::${params.calledMethod} request failed`, { params, errors }, 'error');
					reject(errors, data);
				};

				fetch(self.endpoint, args)
					.then((response) => {
						if (response.ok) {
							response
								.json()
								.then((json) => {
									if (json.success) {
										self.log(`NovaPoshta::${params.calledMethod} request executed`, { params, response: json }, 'info');
										resolve(json, response);
									} else {
										const errors = [];
										json.errors.forEach((message, i) => {
											const code = json.errorCodes[i];
											errors.push({
												code,
												message,
												en: ERRORS[code] || '',
												ru: ERRORS[code] || '',
												uk: ERRORS[code] || '',
											});
										});

										onError(errors, json);
									}
								})
								.catch((error) => {
									onError([{ message: error.toString() }], null);
								});
						} else {
							onError([{ message: response.statusText }], null);
						}
					})
					.catch((error) => {
						onError([{ message: error.toString() }], null);
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

		get scanSheet() {
			return privateProps.get(this).scanSheet;
		}

		get additionalService() {
			return privateProps.get(this).additionalService;
		}

		get additionalServiceGeneral() {
			return privateProps.get(this).additionalServiceGeneral;
		}

	}

	NovaPoshta.version = '1.1.0';

	return NovaPoshta;
})();
