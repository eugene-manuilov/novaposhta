import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

describe('ContactPerson model', () => {
	test.each(Schema.ContactPerson)('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.contactPerson[typeof fn == 'string' ? fn : fn.method]).toBe('function');
	});
});
