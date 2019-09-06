import NovaPoshta from '../src/NovaPoshta';

describe('ContactPerson model', () => {
	test.each(NovaPoshta.getContactPersonMethods())('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.contactPerson[fn]).toBe('function');
	});
});
