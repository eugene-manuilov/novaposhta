import Model from './Model';

class NovaPoshta {

	static getAddressMethods() {
		return [
			'delete',
			'getAreas',
			'getCities',
			'getSettlements',
			'getStreet',
			'getWarehouses',
			'getWarehouseTypes',
			'save',
			'searchSettlements',
			'searchSettlementStreets',
			'update',
		];
	}

	static getCommonMethods() {
		return [
			'getBackwardDeliveryCargoTypes',
			'getCargoDescriptionList',
			'getCargoTypes',
			'getMessageCodeText',
			'getOwnershipFormsList',
			'getPackList',
			'getPalletsList',
			'getPaymentForms',
			'getServiceTypes',
			'getTimeIntervals',
			'getTiresWheelsList',
			'getTypesOfCounterparties',
			'getTypesOfPayers',
			'getTypesOfPayersForRedelivery',
		];
	}

	static getCounterpartyMethods() {
		return [
			'delete',
			'getCounterpartyAddresses',
			'getCounterpartyOptions',
			'getCounterpartyContactPerson',
			'getCounterparties',
			'save',
			'update',
		];
	}

	static getContactPersonMethods() {
		return [
			'delete',
			'save',
			'update',
		];
	}

	static getInternetDocumentMethods() {
		return [
			'delete',
			'generateReport',
			'getDocumentDeliveryDate',
			'getDocumentList',
			'getDocumentPrice',
			'getStatusDocuments',
			'save',
			'update',
		];
	}

	constructor(options = {}) {
		const self = this;

		self.apiKey = options.apiKey || '';
		self.endpoint = options.endpoint || 'https://api.novaposhta.ua/v2.0/json/';
		self.logger = options.logger || false;

		self.address = new Model(self, 'Address', NovaPoshta.getAddressMethods());
		self.common = new Model(self, 'Common', NovaPoshta.getCommonMethods());
		self.counterparty = new Model(self, 'Counterparty', NovaPoshta.getCounterpartyMethods());
		self.contactPerson = new Model(self, 'ContactPerson', NovaPoshta.getContactPersonMethods());
		self.internetDocument = new Model(self, 'InternetDocument', NovaPoshta.getInternetDocumentMethods());
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

NovaPoshta.version = '1.0.0';

export default NovaPoshta;
