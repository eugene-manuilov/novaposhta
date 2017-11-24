import NovaPoshta from '../index';

describe.skip('Counterparty', () => {
	const api = new NovaPoshta({ apiKey: '' });
	const { counterparty } = api;
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test('getCounterpartyAddresses', () => counterparty.getCounterpartyAddresses().then(checkSnapshot));
	test('getCounterpartyOptions', () => counterparty.getCounterpartyOptions().then(checkSnapshot));
	test('getCounterpartyContactPerson', () => counterparty.getCounterpartyContactPerson().then(checkSnapshot));
	test('getCounterparties', () => counterparty.getCounterparties().then(checkSnapshot));
	test.skip('saveCounterparty', () => counterparty.saveCounterparty().then(checkSnapshot));
	test.skip('updateCounterparty', () => counterparty.updateCounterparty().then(checkSnapshot));
	test.skip('deleteCounterparty', () => counterparty.deleteCounterparty().then(checkSnapshot));
	test.skip('saveContactPerson', () => counterparty.saveContactPerson().then(checkSnapshot));
	test.skip('updateContactPerson', () => counterparty.updateContactPerson().then(checkSnapshot));
	test.skip('deleteContactPerson', () => counterparty.deleteContactPerson().then(checkSnapshot));
});
