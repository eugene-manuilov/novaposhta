import NovaPoshta from '../lib/index';

test('getWarehouseTypes', () => {
	const api = new NovaPoshta();

	return api.getWarehouseTypes().then(json => {
		expect(typeof json).toBe('object');

		expect(json.success).toBeTruthy();
		expect(json.data.length).toBeGreaterThan(0);
		expect(json.errors).toHaveLength(0);
		expect(json.warnings).toHaveLength(0);
		expect(json.info).toHaveLength(0);
		expect(json.messageCodes).toHaveLength(0);
		expect(json.errorCodes).toHaveLength(0);
		expect(json.warningCodes).toHaveLength(0);
		expect(json.infoCodes).toHaveLength(0);
	});
});
