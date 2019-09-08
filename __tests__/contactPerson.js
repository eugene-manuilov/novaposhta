import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

describe('ContactPerson model', () => {
	test.each(Schema.ContactPerson.map(item => typeof item === 'string' ? item : item.method))('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.contactPerson[fn]).toBe('function');
	});
});
