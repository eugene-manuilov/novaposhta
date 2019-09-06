import Address from './models/Address';
import Common from './models/Common';
import Counterparty from './models/Counterparty';
import InternetDocument from './models/InternetDocument';

class NovaPoshta {

	constructor(options = {}) {
		const self = this;

		self.apiKey = options.apiKey || '';
		self.endpoint = options.endpoint || 'https://api.novaposhta.ua/v2.0/json/';
		self.logger = options.logger || false;

		self.address = new Address(self);
		self.common = new Common(self);
		self.counterparty = new Counterparty(self);
		self.document = new InternetDocument(self);
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

}

NovaPoshta.version = '0.3.0';

export default NovaPoshta;
