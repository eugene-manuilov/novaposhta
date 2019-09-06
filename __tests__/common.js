import NovaPoshta from '../src/NovaPoshta';

describe('Common model', () => {
	const api = new NovaPoshta();
	const { common } = api;
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test.each(NovaPoshta.getCommonMethods())('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.common[fn]).toBe('function');
	});

	test('getTimeIntervals', () => common.getTimeIntervals({ "RecipientCityRef": "8d5a980d-391c-11dd-90d9-001a92567626" }).then(checkSnapshot));
	test('getCargoTypes', () => common.getCargoTypes().then(checkSnapshot));
	test('getBackwardDeliveryCargoTypes', () => common.getBackwardDeliveryCargoTypes().then(checkSnapshot));
	test('getPalletsList', () => common.getPalletsList().then(checkSnapshot));
	test('getTypesOfPayers', () => common.getTypesOfPayers().then(checkSnapshot));
	test('getPackList', () => common.getPackList({ "Height": 2 }).then(checkSnapshot));
	test('getTiresWheelsList', () => common.getTiresWheelsList().then(checkSnapshot));
	test('getCargoDescriptionList', () => common.getCargoDescriptionList({ "FindByString": "абажур" }).then(checkSnapshot));
	test.skip('getMessageCodeText', () => common.getMessageCodeText().then(checkSnapshot));
	test('getServiceTypes', () => common.getServiceTypes().then(checkSnapshot));
	test('getTypesOfCounterparties', () => common.getTypesOfCounterparties().then(checkSnapshot));
	test('getPaymentForms', () => common.getPaymentForms().then(checkSnapshot));
	test('getOwnershipFormsList', () => common.getOwnershipFormsList().then(checkSnapshot));
});
