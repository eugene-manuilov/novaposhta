import NovaPoshta from '../src/NovaPoshta';

describe('Counterparty model', () => {
	const api = new NovaPoshta({ apiKey: '' });
	const { counterparty } = api;
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test.skip('getCounterpartyAddresses', () => counterparty.getCounterpartyAddresses().then(checkSnapshot));
	test('getCounterpartyOptions', () => counterparty.getCounterpartyOptions().then(checkSnapshot));
	test.skip('getCounterpartyContactPersons', () => counterparty.getCounterpartyContactPersons().then(checkSnapshot));
	test.skip('getCounterparties', () => counterparty.getCounterparties().then(checkSnapshot));
	test.skip('save', () => counterparty.save().then(checkSnapshot));
	test.skip('update', () => counterparty.update().then(checkSnapshot));
	test.skip('delete', () => counterparty.delete().then(checkSnapshot));
});
