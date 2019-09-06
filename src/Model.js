class Model {

	constructor(api, model, methods) {
		const self = this;

		self.api = api;

		methods.forEach((method) => {
			const schema = typeof method === 'string' ? { method } : method;
			if (schema.alias) {
				self[schema.method] = self[schema.alias];
			} else {
				const params = [self, schema.model || model, schema.method];
				self[schema.method] = schema.deprecated
					? self._requestDeprecated.bind(...params)
					: self._request.bind(...params);
			}
		});
	}

	_requestDeprecated(modelName, calledMethod, methodProperties = {}) {
		this.api.log(`${modelName}::${calledMethod} is deprecated, it will be removed in a next version`, {}, 'warn');
		this._request(modelName, calledMethod, methodProperties);
	}

	_request(modelName, calledMethod, methodProperties = {}) {
		return this.api._request({
			modelName,
			calledMethod,
			methodProperties,
		});
	}

}

export default Model;
