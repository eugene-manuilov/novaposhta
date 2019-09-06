import Base from './Base';

class InternetDocument extends Base {

	_getModelName() {
		return 'InternetDocument';
	}

	getDocumentList(params = {}) {
		return this._request('getDocumentList', params);
	}

	getDocumentDeliveryDate(params = {}) {
		return this._request('getDocumentDeliveryDate', params);
	}

	getDocumentPrice(params = {}) {
		return this._request('getDocumentPrice', params);
	}

	updateInternetDocument(params = {}) {
		return this._request('update', params);
	}

	saveInternetDocument(params = {}) {
		return this._request('save', params);
	}

	deleteInternetDocument(params = {}) {
		return this._request('delete', params);
	}

	getStatusDocuments(params = {}) {
		return this._request('getStatusDocuments', params);
	}

	generateReport(params = {}) {
		return this._request('generateReport', params);
	}

}

export default InternetDocument;
