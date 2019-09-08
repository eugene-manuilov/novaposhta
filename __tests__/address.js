import NovaPoshta from '../src/NovaPoshta';

describe('Address model', () => {
	const api = new NovaPoshta();
	const { address } = api;
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test('searchSettlements', () => address.searchSettlements({ CityName: '01001' }).then(checkSnapshot));
	test.skip('searchSettlementStreets', () => address.searchSettlementStreets().then(checkSnapshot));
	test.skip('update', () => {});
	test.skip('save', () => {});
	test('getAreas', () => address.getAreas({ Limit: 1 }).then(checkSnapshot));
	test('getCities', () => address.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then(checkSnapshot));
	test('getSettlements', () => address.getSettlements({ Ref: "0e451e40-4b3a-11e4-ab6d-005056801329" }).then(checkSnapshot));
	test('getWarehouses', () => address.getWarehouses({ CityRef: "20982d74-9b6c-11e2-a57a-d4ae527baec3" }).then(checkSnapshot));
	test('getWarehouseTypes', () => address.getWarehouseTypes().then(checkSnapshot));
	test('getStreet', () => address.getStreet({ CityRef: "20982d74-9b6c-11e2-a57a-d4ae527baec3", Limit: 1 }).then(checkSnapshot));
	test.skip('delete', () => {});
});
