import NovaPoshta from '../src/NovaPoshta';

describe('InternetDocument model', () => {
	test.each(NovaPoshta.getInternetDocumentMethods())('has %s method', (fn) => {
		const np = new NovaPoshta();
		expect(typeof np.internetDocument[fn]).toBe('function');
	});
});
