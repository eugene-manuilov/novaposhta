# novaposhta 0.2.0

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

api.address.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then((json) => {
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

api.address.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then((json) => {
	// do something
});
```

## Supported Methods

### Address

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.address.getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" }).then((json) => {
	// do something
});
```

- [searchSettlements](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/58e5ebeceea27017bc851d67)
- [searchSettlementStreets](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/58e5f369eea27017540b58ac)
- [update](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9db5a0fe4f08e8f7ce4b)
- [save](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9925a0fe4f08e8f7ce4a)
- [getAreas](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d9130a0fe4f08e8f7ce48)
- [getCities](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d885da0fe4f08e8f7ce46)
- [getSettlements](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/56248fffa0fe4f0da0550ea8)
- [getWarehouses](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8211a0fe4f08e8f7ce45)
- [getWarehouseTypes](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8211a0fe4f08e8f7ce45)
- [getStreet](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8db0a0fe4f08e8f7ce47)
- [delete](https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556da062a0fe4f08e8f7ce4c)

### Common

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.common.getTimeIntervals({ "RecipientCityRef": "8d5a980d-391c-11dd-90d9-001a92567626" }).then((json) => {
	// do something
});
```

- [getTimeIntervals](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b6483890f)
- [getCargoTypes](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838909)
- [getBackwardDeliveryCargoTypes](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838907)
- [getPalletsList](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/5824774ba0fe4f0e60694eb0)
- [getTypesOfPayers](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838913)
- [getTypesOfPayersForRedelivery](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838914)
- [getPackList](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/582b1069a0fe4f0298618f06)
- [getTiresWheelsList](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838910)
- [getCargoDescriptionList](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838908)
- [getMessageCodeText](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/58f0730deea270153c8be3cd)
- [getServiceTypes](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b6483890e)
- [getTypesOfCounterparties](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b64838912)
- [getPaymentForms](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b6483890d)
- [getOwnershipFormsList](https://devcenter.novaposhta.ua/docs/services/55702570a0fe4f0cf4fc53ed/operations/55702571a0fe4f0b6483890b)

## Contribute

What to help or have a suggestion? Open a [new ticket](https://github.com/eugene-manuilov/novaposhta/issues/new) and we can discuss it or submit pull request. Please, make sure you run `npm test` before submitting a pull request.

## License

MIT
