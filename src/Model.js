class Model {

	constructor(api, name, methods) {
		const self = this;

		self.api = api;
		self.name = name;

		methods.forEach((method) => {
			self[method] = self._request.bind(self, method);
		});
	}

	_request(calledMethod, methodProperties = {}) {
		return this.api._request({
			modelName: this.name,
			calledMethod,
			methodProperties,
		});
	}

}

export default Model;
