# novaposhta 0.1.0

## Instalation

You can add this package using following commands:

```
npm i novaposhta
```

```
yarn add novaposhta
```

## Usage

Basic example:

```javascript
import NovaPoshta from 'novaposhta';

const api = new NovaPoshta({ apiKey: '...' });

api.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then((json) => {
	// do something
});
```

Winston Logger:

```javascript
import NovaPoshta from 'novaposhta';
import Winston from 'winston';
import WinstonFormatter from 'winston-console-formatter';

const winstonLogger = new Winston.Logger({ level: "debug" });
winstonLogger.add(Winston.transports.Console, WinstonFormatter.config());

const api = new NovaPoshta({
	apiKey: '...',
	logger: winstonLogger,
});

api.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then((json) => {
	// do something
});
```

## Methods

### searchSettlements

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/58e5ebeceea27017bc851d67

### searchSettlementStreets

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/58e5f369eea27017540b58ac

### updateAddress

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9db5a0fe4f08e8f7ce4b

### saveAddress

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9925a0fe4f08e8f7ce4a

### getAreas

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9130a0fe4f08e8f7ce48

### getCities

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d885da0fe4f08e8f7ce46

### getSettlements

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/56248fffa0fe4f0da0550ea8

### getWarehouses

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8211a0fe4f08e8f7ce45

### getWarehouseTypes

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8211a0fe4f08e8f7ce45

### getStreet

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8db0a0fe4f08e8f7ce47

### deleteAddress

https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556da062a0fe4f08e8f7ce4c

## Contribute

What to help or have a suggestion? Open a [new ticket](https://github.com/eugene-manuilov/novaposhta/issues/new) and we can discuss it or submit pull request. Please, make sure you run `npm test` before submitting a pull request.

## License

MIT
