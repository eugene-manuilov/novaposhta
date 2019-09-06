import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

describe('Counterparty model', () => {
	const api = new NovaPoshta({ apiKey: '' });
	const { counterparty } = api;
	const checkSnapshot = json => expect(JSON.stringify(json)).toMatchSnapshot();

	test.each(Schema.Counterparty)('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.counterparty[typeof fn == 'string' ? fn : fn.method]).toBe('function');
	});

	test.skip('getCounterpartyAddresses', () => counterparty.getCounterpartyAddresses().then(checkSnapshot));
	test('getCounterpartyOptions', () => counterparty.getCounterpartyOptions().then(checkSnapshot));
	test.skip('getCounterpartyContactPerson', () => counterparty.getCounterpartyContactPerson().then(checkSnapshot));
	test.skip('getCounterparties', () => counterparty.getCounterparties().then(checkSnapshot));
	test.skip('save', () => counterparty.save().then(checkSnapshot));
	test.skip('update', () => counterparty.update().then(checkSnapshot));
	test.skip('delete', () => counterparty.delete().then(checkSnapshot));
});
