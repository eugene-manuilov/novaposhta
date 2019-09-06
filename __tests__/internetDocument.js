import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

describe('InternetDocument model', () => {
	test.each(Schema.InternetDocument)('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.internetDocument[typeof fn == 'string' ? fn : fn.method]).toBe('function');
	});
});
