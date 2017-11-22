import Base from './Base';

class Common extends Base {

	_getModelName() {
		return 'Common';
	}

	getTimeIntervals(params = {}) {
		return this._request('getTimeIntervals', params);
	}

	getCargoTypes(params = {}) {
		return this._request('getCargoTypes', params);
	}

	getBackwardDeliveryCargoTypes(params = {}) {
		return this._request('getBackwardDeliveryCargoTypes', params);
	}

	getPalletsList(params = {}) {
		return this._request('getPalletsList', params);
	}

	getTypesOfPayers(params = {}) {
		return this._request('getTypesOfPayers', params);
	}

	getTypesOfPayersForRedelivery(params = {}) {
		return this._request('getTypesOfPayersForRedelivery', params);
	}

	getPackList(params = {}) {
		return this._request('getPackList', params);
	}

	getTiresWheelsList(params = {}) {
		return this._request('getTiresWheelsList', params);
	}

	getCargoDescriptionList(params = {}) {
		return this._request('getCargoDescriptionList', params);
	}

	getMessageCodeText(params = {}) {
		return this._request('searchSettlements', params);
	}

	getServiceTypes(params = {}) {
		return this._request('getServiceTypes', params);
	}

	getTypesOfCounterparties(params = {}) {
		return this._request('getTypesOfCounterparties', params);
	}

	getPaymentForms(params = {}) {
		return this._request('getPaymentForms', params);
	}

	getOwnershipFormsList(params = {}) {
		return this._request('getOwnershipFormsList', params);
	}

}

export default Common;
