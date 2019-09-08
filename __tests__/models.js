import NovaPoshta from '../src/NovaPoshta';
import Schema from '../src/Schema';

const models = Object.keys(Schema);
const lcfirst = item => item.toLowerCase().substring(0, 1) + item.substring(1);

describe('NovaPoshta', () => {
	test.each(models.map(lcfirst))('has %s model getter', (model) => {
		const np = new NovaPoshta();
		expect(typeof np[model]).toBe('object');
	});
});

Object.keys(Schema).forEach((key) => {
	describe(`NovaPoshta :: ${key}`, () => {
		const np = new NovaPoshta();
		test.each(Schema[key].map(item => typeof item === 'string' ? item : item.method))('has %s method', (fn) => {
			expect(typeof np[lcfirst(key)][fn]).toBe('function');
		});
	});
});
