import Base from './Base';

class Address extends Base {

	_getModelName() {
		return 'Address';
	}

	searchSettlements(params = {}) {
		return this._request('searchSettlements', params);
	}

	searchSettlementStreets(params = {}) {
		return this._request('searchSettlementStreets', params);
	}

	update(params = {}) {
		return this._request('update', params);
	}

	save(params = {}) {
		return this._request('save', params);
	}

	getAreas(params = {}) {
		return this._request('getAreas', params);
	}

	getCities(params = {}) {
		return this._request('getCities', params);
	}

	getSettlements(params = {}) {
		return this._request('getSettlements', params);
	}

	getWarehouses(params = {}) {
		return this._request('getWarehouses', params);
	}

	getWarehouseTypes(params = {}) {
		return this._request('getWarehouseTypes', params);
	}

	getStreet(params = {}) {
		return this._request('getStreet', params);
	}

	delete(params = {}) {
		return this._request('delete', params);
	}

}

export default Address;
