# Novaposhta

[![Version](https://img.shields.io/npm/v/novaposhta.svg)](https://www.npmjs.com/package/novaposhta)
[![Downloads/week](https://img.shields.io/npm/dw/novaposhta.svg)](https://www.npmjs.com/package/novaposhta)
[![License](https://img.shields.io/npm/l/novaposhta.svg)](https://github.com/eugene-manuilov/novaposhta/blob/master/package.json)

A small library that provides a helper class to work with [Nova Poshta API](https://devcenter.novaposhta.ua/docs/services/).

## Usage

Install it using the following command:

```
npm i novaposhta
```

The library exports the `NovaPoshta` class that you need to use to make requests to API. You need to instantiate an instance of the class providing an object with configuration options. The instance of the class has getters that allows you to get access to a specific model of the APIs.

Also, please, pay attention that some API methods require API key for authorization. You can obtain it by going to [this page](https://my.novaposhta.ua/settings/index#apikeys).

Here is a basic example that shows how to use the library:

```javascript
import NovaPoshta from 'novaposhta';

const api = new NovaPoshta({ apiKey: '...' });

api.address
    .getCities({ Ref: "ebc0eda9-93ec-11e3-b441-0050568002cf" })
    .then((json) => {
        // do something
    })
    .catch((errors) => {
        if (Array.isArray(errors)) {
            errors.forEach((error) => console.log(`[${ error.code || '-' }] ${ error.en || error.uk || error.ru || error.message }`));
        }
    });
```

A bit more advanced example that demonstrates how you can configure a Winston Logger and use it with the library:

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

## Supported API Methods

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

### Counterparty

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.counterparty.getCounterpartyContactPersons({ ... }).then((json) => {
    // do something
});
```

- [getCounterpartyAddresses](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fdcb4a0fe4f105c087611)
- [getCounterpartyOptions](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/55801976a0fe4f105c087614)
- [getCounterpartyContactPersons](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fe424a0fe4f105c087612)
- [getCounterparties](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fd789a0fe4f105c08760f)
- [save](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557ebbd3a0fe4f02fc455b2e)
- [update](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fbe62a0fe4f105c08760d)
- [delete](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fd35da0fe4f105c08760e)

### ContactPerson


```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.contactPerson.save({ ... }).then((json) => {
    // do something
});
```

- [save](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/55828c4ca0fe4f0adc08ef27)
- [update](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/558297aca0fe4f0adc08ef28)
- [delete](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/55829aa2a0fe4f0adc08ef29)

### Internet Document

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.internetDocument.getDocumentList({ ... }).then((json) => {
    // do something
});
```

- [getDocumentList](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/557eb417a0fe4f02fc455b2c)
- [getDocumentDeliveryDate](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/558153cca0fe4f12149812a1)
- [getDocumentPrice](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/55702ee2a0fe4f0cf4fc53ef)
- [getStatusDocuments](https://devcenter.novaposhta.ua/docs/services/557eb8c8a0fe4f02fc455b2d/operations/557fd789a0fe4f105c08760f)
- [save](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/556ef753a0fe4f02049c664f)
- [update](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/55701ec2a0fe4f0cf4fc53eb)
- [delete](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/55701fa5a0fe4f0cf4fc53ec)
- [generateReport](https://devcenter.novaposhta.ua/docs/services/556eef34a0fe4f02049c664e/operations/55815af6a0fe4f12149812a2)

### ScanSheet

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.scanSheet.getScanSheetList({ ... }).then((json) => {
    // do something
});
```

- [deleteScanSheet](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e/operations/556c6a2da0fe4f08e8f7ce2f)
- [insertDocuments](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e/operations/556c4786a0fe4f0634657b65)
- [getScanSheet](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e/operations/556c72d7a0fe4f08e8f7ce30)
- [getScanSheetList](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e/operations/556c7734a0fe4f08e8f7ce31)
- [removeDocuments](https://devcenter.novaposhta.ua/docs/services/55662bd3a0fe4f10086ec96e/operations/556c6474a0fe4f08e8f7ce2e)

### AdditionalService

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.additionalService.getReturnOrdersList({ ... }).then((json) => {
    // do something
});
```

- [delete](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6cdf4ff2c200cd80adb93)
- [getChangeEWOrdersList](https://devcenter.novaposhta.ua/docs/services/59eef733ff2c200ce4f6f904/operations/59eefd36eea2700b202b9c45)
- [getRedirectionOrdersList](https://devcenter.novaposhta.ua/docs/services/58f722b3ff2c200c04673bd1/operations/58f72396ff2c200c04673bd5)
- [getReturnOrdersList](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6cdc9eea2700d141ccae2)
- [getReturnReasons](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6cd6aeea2700d141ccae1)
- [getReturnReasonsSubtypes](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6cdb2ff2c200cd80adb92)
- [CheckPossibilityChangeEW](https://devcenter.novaposhta.ua/docs/services/59eef733ff2c200ce4f6f904/operations/59eef947ff2c200ce4f6f905)
- [CheckPossibilityCreateReturn](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6b830ff2c200cd80adb91)
- [save](https://devcenter.novaposhta.ua/docs/services/58ad7185eea27006cc36d649/operations/58b6d227ff2c200cd80adb94)

### AdditionalServiceGeneral

```javascript
const api = new NovaPoshta({ apiKey: '...' });

api.additionalServiceGeneral.checkPossibilityForRedirecting({ ... }).then((json) => {
    // do something
});
```

- [delete](https://devcenter.novaposhta.ua/docs/services/58f722b3ff2c200c04673bd1/operations/58f7237bff2c200c04673bd4)
- [checkPossibilityForRedirecting](https://devcenter.novaposhta.ua/docs/services/58f722b3ff2c200c04673bd1/operations/58f7233eff2c200c04673bd2)
- [save](https://devcenter.novaposhta.ua/docs/services/58f722b3ff2c200c04673bd1/operations/58f72344ff2c200c04673bd3)

## Contribute

Want to help or have a suggestion? Open a [new ticket](https://github.com/eugene-manuilov/novaposhta/issues/new) and we can discuss it or submit a pull request. Please, make sure you run `npm test` before submitting a pull request.

## License

MIT
