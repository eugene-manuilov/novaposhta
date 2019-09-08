import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

describe('InternetDocument model', () => {
	test.each(Schema.InternetDocument.map(item => typeof item === 'string' ? item : item.method))('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.internetDocument[fn]).toBe('function');
	});
});
