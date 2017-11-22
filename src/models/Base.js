class Base {

	constructor(api) {
		this.api = api;
	}

	_getModelName() {
		throw new Error('Must be implemented in a child class.');
	}

	_request(method, params = {}) {
		return this.api._request({
			modelName: this._getModelName(),
			calledMethod: method,
			methodProperties: params,
		});
	}

}

export default Base;
