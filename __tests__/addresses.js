import NovaPoshta from '../lib/index';

describe('Address', () => {
	const api = new NovaPoshta();
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test('searchSettlements', () => api.searchSettlements({ CityName: '01001' }).then(checkSnapshot));
	test.skip('searchSettlementStreets', () => api.searchSettlementStreets().then(checkSnapshot));
	test.skip('updateAddress', () => {});
	test.skip('saveAddress', () => {});
	test('getAreas', () => api.getAreas({ Limit: 1 }).then(checkSnapshot));
	test('getCities', () => api.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then(checkSnapshot));
	test('getSettlements', () => api.getSettlements({ Ref: "0e451e40-4b3a-11e4-ab6d-005056801329" }).then(checkSnapshot));
	test('getWarehouses', () => api.getWarehouses({ CityRef: "20982d74-9b6c-11e2-a57a-d4ae527baec3" }).then(checkSnapshot));
	test('getWarehouseTypes', () => api.getWarehouseTypes().then(checkSnapshot));
	test('getStreet', () => api.getStreet({ CityRef: "20982d74-9b6c-11e2-a57a-d4ae527baec3", Limit: 1 }).then(checkSnapshot));
	test.skip('deleteAddress', () => {});
});
