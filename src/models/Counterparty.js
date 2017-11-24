import Base from './Base';

class Counterparty extends Base {

	_getModelName() {
		return 'Counterparty';
	}

	getCounterpartyAddresses(params = {}) {
		return this._request('getCounterpartyAddresses', params);
	}

	getCounterpartyOptions(params = {}) {
		return this._request('getCounterpartyOptions', params);
	}

	getCounterpartyContactPerson(params = {}) {
		return this._request('getCounterpartyContactPerson', params);
	}

	getCounterparties(params = {}) {
		return this._request('getCounterparties', params);
	}

	saveCounterparty(params = {}) {
		return this._request('save', params);
	}

	updateCounterparty(params = {}) {
		return this._request('update', params);
	}

	deleteCounterparty(params = {}) {
		return this._request('delete', params);
	}

	saveContactPerson(params = {}) {
		return this.api._request({
			modelName: 'ContactPerson',
			calledMethod: 'save',
			methodProperties: params,
		});
	}

	updateContactPerson(params = {}) {
		return this.api._request({
			modelName: 'ContactPerson',
			calledMethod: 'update',
			methodProperties: params,
		});
	}

	deleteContactPerson(params = {}) {
		return this.api._request({
			modelName: 'ContactPerson',
			calledMethod: 'delete',
			methodProperties: params,
		});
	}

}

export default Counterparty;
