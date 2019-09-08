const ERRORS = {
	20000100004: {
		en: 'User with email exists',
		ru: 'Пользователь с таким Email уже существует',
		uk: 'Користувач з таким Email все існує',
	},
	20000100002: {
		en: 'General error',
		ru: 'Область получателя не выбрана',
		uk: 'Область одержувача не вибрана',
	},
	20000400455: {
		en: 'DateTime cannot be less then now',
		ru: 'Дата не может быть меньше, чем сегодня',
		uk: 'Дата не може бути менше, ніж сьогодні',
	},
	20000100005: {
		en: 'Необходимо отметить только один документ',
		ru: 'Необходимо отметить только один документ',
		uk: 'Необхідно відзначити тільки один документ',
	},
	20000100006: {
		en: 'Exceeded the limit of sent SMS',
		ru: 'Превышен лимит отправленных SMS',
		uk: 'Перевищено ліміт відправлених SMS',
	},
	20000100007: {
		en: 'Activation error',
		ru: 'Ошибка активации',
		uk: 'Помилка активації',
	},
	20000100008: {
		en: 'An unknown error occurred. Try again later.',
		ru: 'Произошла неизвестная ошибка. Попробуйте позже',
		uk: 'Виникла невідома помилка. Спробуйте пізніше',
	},
	20000200068: {
		en: 'API auth fail',
		ru: 'API авторизация неудача',
		uk: 'API невдала авторизація',
	},
	20000100010: {
		en: 'Can not create Vip user',
		ru: 'Невозможно создать Vip пользователя',
		uk: 'Неможливо створити Vip користувача',
	},
	20000100011: {
		en: 'Can not create Vip',
		ru: 'Невозможно создать Vip',
		uk: 'Неможливо створити Vip',
	},
	20000100012: {
		en: 'Error ApiKey generating',
		ru: 'Ошибка генерирования ApiKey',
		uk: 'Помилка створення ApiKey',
	},
	20000100013: {
		en: 'get LoyaltyCard fail',
		ru: 'Не удалось получить номер карты лояльности',
		uk: 'Не вдалося отримати номер карти лояльності',
	},
	20000100014: {
		en: 'Incorrect data.',
		ru: 'Некорректные данные',
		uk: 'Некоректні дані',
	},
	20000100015: {
		en: 'Login or password is incorrect',
		ru: 'Неверный логин или пароль',
		uk: 'Невірний логін або пароль',
	},
	20000100016: {
		en: 'Service Unavailable',
		ru: 'Сервис недоступен',
		uk: 'Сервіс недоступний',
	},
	20000100017: {
		en: 'Sorry, the specified Email is already in use by another participant of the Loyalty Program',
		ru: 'К сожалению, указанный E-mail уже используется другим участником Программы лояльности',
		uk: 'На жаль вказаний E-mail вже використовується іншим учасником програми лояльності',
	},
	20000100018: {
		en: 'The phone number is invalid',
		ru: 'Номер телефона некорректен',
		uk: 'Номер телефону некоректний',
	},
	20000100019: {
		en: 'This counterparty prohibited from participating in the loyalty program.',
		ru: 'Этому контрагенту запрещено участвовать в программе лояльности',
		uk: 'Цьому контрагенту заборонено брати участь в програмі лояльності',
	},
	20000100020: {
		en: 'Unable to find data on your parameters',
		ru: 'Неверный код из смс',
		uk: 'Невірний код з смс',
	},
	20000100021: {
		en: 'Unable to save data',
		ru: 'Невозможно сохранить данные',
		uk: 'Неможливо зберегти дані',
	},
	20000100022: {
		en: 'Unable to send SMS',
		ru: 'Невозможно отправить SMS',
		uk: 'Неможливо відправити SMS',
	},
	20000100023: {
		en: 'User already exists',
		ru: 'Пользователь уже существует',
		uk: 'Користувач вже існує',
	},
	20000100024: {
		en: 'User not found',
		ru: 'Пользователь не найден',
		uk: 'Користувач не знайдений',
	},
	20000100025: {
		en: 'Vip client with this email already exist',
		ru: 'Vip клиент с этой электронной почтой уже зарегистрирован',
		uk: 'Vip клієнт з цією електронною поштою вже зареєстрований',
	},
	20000100026: {
		en: 'Wrong activation code',
		ru: 'Неправильный код активации',
		uk: 'Неправильний код активації',
	},
	20000100027: {
		en: 'Wrong password or user not found',
		ru: 'Некорректный пароль или пользователь не найден',
		uk: 'Некоректний пароль або користувач не знайдений',
	},
	20000200028: {
		en: 'AccompanyingDocuments length is incorrect',
		ru: 'AccompanyingDocuments длина некоррекна',
		uk: 'AccompanyingDocuments довжина некоррекна',
	},
	20000200029: {
		en: 'AccountNumber and Summ must be filled',
		ru: 'Номер счета и сумма должны быть заполненны',
		uk: 'Номер Рахунку та сума повінні буті заповнені',
	},
	20000200030: {
		en: 'AdditionalInformation length is incorrect',
		ru: 'Длина поля "Дополнительная информация" превышено',
		uk: 'Довжина поля "Додаткова інформація" перевищено',
	},
	20000200031: {
		en: 'AfterpaymentOnGoodsCost is disabled for InPost',
		ru: 'AfterpaymentOnGoodsCost отключена для почтомата InPost',
		uk: 'AfterpaymentOnGoodsCost відключена для поштомата InPost',
	},
	20000200032: {
		en: 'AfterpaymentOnGoodsCost is disabled for Postomat NovaPoshta',
		ru: 'AfterpaymentOnGoodsCost отключена для поштомата NovaPoshta',
		uk: 'AfterpaymentOnGoodsCost відключена для поштомата NovaPoshta',
	},
	20000200033: {
		en: 'AfterpaymentOnGoodsCost is invalid',
		ru: 'AfterpaymentOnGoodsCost некорректен',
		uk: 'AfterpaymentOnGoodsCost некоректний',
	},
	20000200034: {
		en: 'AfterpaymentOnGoodsCost is too high',
		ru: 'AfterpaymentOnGoodsCost превышена длина',
		uk: 'AfterpaymentOnGoodsCost перевищена довжина',
	},
	20000200035: {
		en: 'AfterpaymentOnGoodsCost is unavailable',
		ru: 'AfterpaymentOnGoodsCost недоступен',
		uk: 'AfterpaymentOnGoodsCost недоступний',
	},
	20000200036: {
		en: 'AfterpaymentOnGoodsCost is unavailable in selected CityRecipient',
		ru: 'AfterpaymentOnGoodsCost недоступен в выбранном городе получателя',
		uk: 'AfterpaymentOnGoodsCost недоступний в обраному місті одержувача',
	},
	20000200037: {
		en: 'AfterpaymentOnGoodsCost must be filled',
		ru: 'Поле AfterpaymentOnGoodsCost должно быть заполнено',
		uk: 'Поле AfterpaymentOnGoodsCost має бути заповнене',
	},
	20000200038: {
		en: 'AfterpaymentOnGoodsCost to DoorsDoors is too high',
		ru: 'Параметр AfterpaymentOnGoodsCost в методе доставки Двери-Двери слишком длинный',
		uk: 'Параметр AfterpaymentOnGoodsCost в методі доставки Двері-Двері занадто довгий',
	},
	20000200039: {
		en: 'AfterpaymentOnGoodsCost to WarehouseDoors is too high',
		ru: 'Параметр AfterpaymentOnGoodsCost в методе доставки Склад-Двери слишком длинный',
		uk: 'Параметр AfterpaymentOnGoodsCost в методі доставки Склад-Двері занадто довгий',
	},
	20000200040: {
		en: 'AfterpaymentOnGoodsCostInfo must be array',
		ru: 'AfterpaymentOnGoodsCostInfo должен быть массивом',
		uk: 'AfterpaymentOnGoodsCostInfo повинен бути масивом',
	},
	20000200041: {
		en: 'AlternativeContactRecipient is too long',
		ru: 'Параметр AlternativeContactRecipient слишком длинный',
		uk: 'Параметр AlternativeContactRecipient занадто довгий',
	},
	20000200042: {
		en: 'AlternativePayer type not selected',
		ru: 'Тип AlternativePayer не выбран',
		uk: 'Тип AlternativePayer не обрано',
	},
	20000200043: {
		en: 'AlternativePayment method not selected',
		ru: 'Метод AlternativePayment не выбран',
		uk: 'Метод AlternativePayment не обрано',
	},
	20000200044: {
		en: 'AlternativePayment NonCash is unavailable',
		ru: 'AlternativePayment Безналичный расчет недоступен',
		uk: 'AlternativePayment Безготівковий розрахунок недоступний',
	},
	20000200045: {
		en: 'AlternativeRecipient does not belong to this AlternativeRecipient',
		ru: 'AlternativeRecipient не принадлежит к этому AlternativeRecipient',
		uk: 'AlternativeRecipient не належить до цього AlternativeRecipient',
	},
	20000200046: {
		en: 'AlternativeRecipient does not belong to this User',
		ru: 'AlternativeRecipient не принадлежит этому пользователю',
		uk: 'AlternativeRecipient не належить цьому користувачу',
	},
	20000200047: {
		en: 'AlternativeRecipient does not exists',
		ru: 'AlternativeRecipient не существует',
		uk: 'AlternativeRecipient не існує',
	},
	20000200048: {
		en: 'AlternativeRecipient is incorrect',
		ru: 'AlternativeRecipient некорректен',
		uk: 'Alternate Recipient некоректнийtd',
	},
	20000200049: {
		en: 'AlternativeRecipient is removed',
		ru: 'AlternativeRecipient удалена',
		uk: 'AlternativeRecipient видалений',
	},
	20000200050: {
		en: 'AlternativeRecipient not selected',
		ru: 'AlternativeRecipient не выбран',
		uk: 'AlternativeRecipient не обрано',
	},
	20000200051: {
		en: 'AlternativeRecipientAddress does not belong to this AlternativeRecipient',
		ru: 'Адрес AlternativeRecipientAddress не принадлежит к этому AlternativeRecipient',
		uk: 'Адреса AlternativeRecipientAddress не належить до цього AlternativeRecipient',
	},
	20000200052: {
		en: 'AlternativeRecipientAddress does not exists',
		ru: 'Адрес AlternativeRecipientAddress не существует',
		uk: 'Адреса AlternativeRecipientAddress не існує',
	},
	20000200053: {
		en: 'AlternativeRecipientAddress is incorrect',
		ru: 'Адрес AlternativeRecipientAddress некорректен',
		uk: 'Адреса AlternativeRecipientAddress некоректний',
	},
	20000200054: {
		en: 'AlternativeRecipientAddress is removed',
		ru: 'Адрес AlternativeRecipientAddress удален',
		uk: 'Адресу AlternativeRecipientAddress видалено',
	},
	20000200055: {
		en: 'AlternativeRecipientAddress not selected',
		ru: 'AlternativeRecipientAddress не выбран',
		uk: 'Адреса AlternativeRecipientAddress не обрана',
	},
	20000200056: {
		en: 'AlternativeRecipientCity incorrect',
		ru: 'Город AlternativeRecipientCity указано некорректен',
		uk: 'Місто AlternativeRecipientCity вказано некоректно',
	},
	20000200057: {
		en: 'AlternativeRecipientCity not found',
		ru: 'Город AlternativeRecipientCity не найден',
		uk: 'Місто AlternativeRecipientCity не знайдено',
	},
	20000200058: {
		en: 'AlternativeRecipientCity not selected',
		ru: 'Город AlternativeRecipientCity не выбран',
		uk: 'Місто AlternativeRecipientCity не обрано',
	},
	20000200059: {
		en: 'AlternativeRecipientContact does not belong to this AlternativeRecipient',
		ru: 'Контакт AlternativeRecipientContact не принадлежит к этому AlternativeRecipient',
		uk: 'Контакт AlternativeRecipientContact не належить до цього AlternativeRecipient',
	},
	20000200060: {
		en: 'AlternativeRecipientContact does not exists',
		ru: 'Контакт AlternativeRecipientContact не существует',
		uk: 'Контакт AlternativeRecipientContact не існує',
	},
	20000200061: {
		en: 'AlternativeRecipientContact is incorrect',
		ru: 'Контакт AlternativeRecipientContact указан некорректно',
		uk: 'Контакт AlternativeRecipientContact вказано некоректно',
	},
	20000200062: {
		en: 'AlternativeRecipientContact is removed',
		ru: 'Контакт AlternativeRecipientContact удален',
		uk: 'Контакт AlternativeRecipientContact видалено',
	},
	20000200063: {
		en: 'AlternativeRecipientContact not selected',
		ru: 'Контакт AlternativeRecipientContact не выбран',
		uk: 'Контакт AlternativeRecipientContact не обрано',
	},
	20000200064: {
		en: 'AlternativeRecipientPayer type is incorrect',
		ru: 'Тип AlternativeRecipientPayer указан некорректно',
		uk: 'Тип AlternativeRecipientPayer вказано некоректно',
	},
	20000200065: {
		en: 'AlternativeRecipientPaymentMethod is incorrect',
		ru: 'Метод оплаты AlternativeRecipientPaymentMethod указан некорректно',
		uk: 'Метод оплаты AlternativeRecipientPaymentMethod вказано некоректно',
	},
	20000200066: {
		en: 'AlternativeRecipientPhone invalid format',
		ru: 'AlternativeRecipientPhone неверный формат',
		uk: 'AlternativeRecipientPhone невірний формат',
	},
	20000200067: {
		en: 'AlternativeRecipientPhone is empty',
		ru: 'AlternativeRecipientPhone не указан',
		uk: 'AlternativeRecipientPhone не вказано',
	},
	20000200069: {
		en: 'apiKey is empty',
		ru: 'apiKey не указан',
		uk: 'apiKey не вказано',
	},
	20000200070: {
		en: 'Array of BackwardDeliveryData is invalid',
		ru: 'Массив BackwardDeliveryData недействителен',
		uk: 'Масив BackwardDeliveryData недійсний',
	},
	20000200071: {
		en: 'Array of Trays is invalid',
		ru: 'Массив в трее недействителен',
		uk: 'Масив в треї недійсний',
	},
	20000200072: {
		en: 'Backward Delivery banned in Crimea',
		ru: 'Обратная Доставка запрещена в Крыму',
		uk: 'Зворотня Доставка заборонена в Криму',
	},
	20000200073: {
		en: 'Backward Delivery banned in this city',
		ru: 'Обратная Доставка запрещены в этом городе',
		uk: 'Зворотня Доставка заборонені в цьому місті',
	},
	20000200074: {
		en: 'Backward Delivery Money is too high',
		ru: 'Обратная доставка денег, превышен лимит',
		uk: 'Зворотня доставка грошей, перевищено ліміт',
	},
	20000200075: {
		en: 'BackwardDelivery CargoType is incorrect',
		ru: 'Обратная доставка, тип груза указан некорректно',
		uk: 'Зворотня доставка, тип вантажу вказано некоректно',
	},
	20000200077: {
		en: 'BackwardDelivery Documents Services is not service',
		ru: 'Обратная доставка, Documents Services не есть сервис',
		uk: 'Зворотня доставка, Documents Services не є сервіс',
	},
	20000200078: {
		en: 'BackwardDelivery Money is unavailable in selected CityRecipient',
		ru: 'Обратная доставка денег недоступна в выбранном городе получателя',
		uk: 'Зворотнія доставка грошей недоступна в обраному місті одержувача',
	},
	20000200079: {
		en: 'BackwardDelivery Money RedeliveryString is not valid',
		ru: 'Обратная доставка денег RedeliveryString не является действительной',
		uk: 'Зворотній доставка грошей RedeliveryString не є дійсною',
	},
	20000200080: {
		en: 'BackwardDelivery Money RedeliveryString must not be less than 1',
		ru: 'Обратная доставка денег RedeliveryString не должен быть меньше, чем 1',
		uk: 'Зворотня доставка грошей RedeliveryString не повинно бути менше, ніж 1',
	},
	20000200081: {
		en: 'BackwardDelivery Money to DoorsDoors is too high',
		ru: 'Обратная доставка денег при доставке Двери-Двери, слишком большая',
		uk: 'Зворотня доставка грошей при доставці Двері-Двері, занадто велика',
	},
	20000200082: {
		en: 'BackwardDelivery Money to WarehouseDoors is too high',
		ru: 'Обратная доставка денег при доставке Склад-Двери, слишком большая',
		uk: 'Зворотня доставка грошей при доставці Склад-Двері, занадто велика',
	},
	20000200083: {
		en: 'BackwardDelivery must be Money',
		ru: 'Обратная доставка должна быть Деньги',
		uk: 'Зворотня доставка повинна бути Гроші',
	},
	20000200084: {
		en: 'BackwardDelivery PayerType cannot be different',
		ru: 'Обратная доставка, плательщики не могут быть разными',
		uk: 'Зворотня доставка, платники не можуть бути різними',
	},
	20000200085: {
		en: 'BackwardDelivery PayerType is incorrect',
		ru: 'Обратная доставка, тип плательщика неверный',
		uk: 'Зворотня доставка, тип платника невірний',
	},
	20000200086: {
		en: 'BackwardDeliveryData must be array',
		ru: 'Обратная доставка, должна быть массивом',
		uk: 'Зворотня доставка, повинна бути масивом',
	},
	20000200087: {
		en: 'BackwardDeliveryRub Money to DoorsDoors is too high',
		ru: 'Обратная доставка денег при доставке Двери-Двери, слишком большая',
		uk: 'Зворотня доставка грошей при доставці Двері-Двері, занадто велика',
	},
	20000200088: {
		en: 'BackwardDeliveryRub Money to WarehouseDoors is too high',
		ru: 'Обратная доставка денег при доставке Склад-Двери, слишком большая',
		uk: 'Зворотня доставка грошей при доставці Склад-Двері, занадто велика',
	},
	20000200089: {
		en: 'Can not Return To Alternative Recipient',
		ru: 'Не может вернуться к альтернативному получателю',
		uk: 'Не може повернутися до альтернативного одержувачу',
	},
	20000200090: {
		en: 'CargoDescription is invalid',
		ru: 'CargoDescription указан неверно',
		uk: 'CargoDescription вказано невірно',
	},
	20000200091: {
		en: 'CargoDetails Amount is empty',
		ru: 'CargoDetails Сумма не указана',
		uk: 'CargoDetails Сума не вказана',
	},
	20000200092: {
		en: 'CargoDetails Amount is not valid',
		ru: 'CargoDetails Сумма недействительна',
		uk: 'CargoDetails Сума недійсна',
	},
	20000200093: {
		en: 'CargoDetails Amount is too high',
		ru: 'CargoDetails сумма слишком большая',
		uk: 'CargoDetails Сума занадто велика',
	},
	20000200094: {
		en: 'CargoDetails CargoDescription is empty',
		ru: 'CargoDetails CargoDescription пуст',
		uk: 'CargoDetails CargoDescription порожній',
	},
	20000200095: {
		en: 'CargoDetails CargoDescription is incorrect',
		ru: 'CargoDetails CargoDescription указано некорректно',
		uk: 'CargoDetails CargoDescription вказано некоректно',
	},
	20000200096: {
		en: 'CargoDetails count is invalid',
		ru: 'Количество CargoDetails недействительно',
		uk: 'Кількість CargoDetails недійсна',
	},
	20000200097: {
		en: 'CargoDetails must be array',
		ru: 'CargoDetails должен быть массивом',
		uk: 'CargoDetails повинен бути масивом',
	},
	20000200098: {
		en: 'CargoDetails must be empty',
		ru: 'CargoDetails должен быть пустым',
		uk: 'CargoDetails повинен бути порожнім',
	},
	20000200099: {
		en: 'CargoType not selected',
		ru: 'CargoType не выбрано',
		uk: 'CargoType не обрано',
	},
	20000200100: {
		en: 'CartBank of TypeCompensationPB invalid format',
		ru: 'CartBank из TypeCompensationPB недопустимый формат',
		uk: 'CartBank з TypeCompensationPB неприпустимий формат',
	},
	20000200101: {
		en: 'Certificate',
		ru: 'Сертификат',
		uk: 'Сертифікат',
	},
	20000200102: {
		en: 'CityRecipient incorrect',
		ru: 'Город получателя указан некорректно',
		uk: 'Місто отримувача вказано некоректно',
	},
	20000200103: {
		en: 'CityRecipient not found',
		ru: 'Город получателя не найден',
		uk: 'Місто отримувача не знайдено',
	},
	20000200104: {
		en: 'CityRecipient not selected',
		ru: 'Город получателя не выбран',
		uk: 'Місто отримувача не обрано',
	},
	20000200105: {
		en: 'CitySender is incorrect',
		ru: 'Город отправителя указан некорректно',
		uk: 'Місто відправника вказано некоректно',
	},
	20000200106: {
		en: 'CitySender not found',
		ru: 'Город отправителя не найден',
		uk: 'Місто відправника не знайдено',
	},
	20000200107: {
		en: 'CitySender not selected',
		ru: 'Город отправителя не выбран',
		uk: 'Місто відправника не обрано',
	},
	20000300397: {
		en: 'ContactRecipient does not belong to this Recipient',
		ru: 'Контакт получателя не принадлежит к этому получателю',
		uk: 'Контакт одержувача не належить до цього одержувача',
	},
	20000300398: {
		en: 'ContactRecipient does not exists',
		ru: 'Контакт получателя не существует',
		uk: 'Контакт одержувача не існує',
	},
	20000300399: {
		en: 'ContactRecipient is incorrect',
		ru: 'Контакт получателя указан некорректно',
		uk: 'Контакт отримувача вказано некоректно',
	},
	20000300400: {
		en: 'ContactRecipient is removed',
		ru: 'Контакт получателя удален',
		uk: 'Контакт отримувача видалено',
	},
	20000300401: {
		en: 'ContactRecipient not selected',
		ru: 'Контакт получателя не выбран',
		uk: 'Контакт отримувача не обрано',
	},
	20000300402: {
		en: 'ContactSender does not belong to this Sender',
		ru: 'Контакт отправителя не принадлежит к этому отправителю',
		uk: 'Контакт відправника не належить до цього відправнику',
	},
	20000300403: {
		en: 'ContactSender does not exists',
		ru: 'Контакт отправителя не существует',
		uk: 'Контакт відправника не існує',
	},
	20000300404: {
		en: 'ContactSender is incorrect',
		ru: 'Контакт отправителя указан некорректно',
		uk: 'Контакт відправника вказано некоректно',
	},
	20000300405: {
		en: 'ContactSender is removed',
		ru: 'Контакт отправителя удален',
		uk: 'Контакт відправника видалено',
	},
	20000300406: {
		en: 'ContactSender not selected',
		ru: 'Контакт отправителя не выбран',
		uk: 'Контакт отправителя не обрано',
	},
	20000200118: {
		en: 'Cost is invalid',
		ru: 'Стоимость указана некорректно',
		uk: 'Вартість вказана некоректно',
	},
	20000200119: {
		en: 'Cost is too high',
		ru: 'Стоимость слишком большая',
		uk: 'Вартість занадто велика',
	},
	20000200120: {
		en: 'Cost should be string',
		ru: 'Стоимость должна быть string',
		uk: 'Вартість повинна бути string',
	},
	20000300407: {
		en: 'CostFrom cannot be less then CostTo',
		ru: 'CostFrom не может быть меньше CostTo',
		uk: 'CostFrom не може бути менше CosatTo',
	},
	20000300408: {
		en: 'CostFrom is invalid',
		ru: 'CostFrom недействительна',
		uk: 'CostFrom недійсна',
	},
	20000300409: {
		en: 'CostFrom is too high',
		ru: 'CostFrom слишком большая',
		uk: 'CostFrom занадто велика',
	},
	20000200124: {
		en: 'CostOnSiteFrom cannot be less then CostOnSiteTo',
		ru: 'CostOnSiteFrom не может быть меньше CostOnSiteTo',
		uk: 'CostOnSiteFrom не може бути менше CostOnSiteTo',
	},
	20000200125: {
		en: 'CostOnSiteFrom is invalid',
		ru: 'CostOnSiteFrom',
		uk: 'CostOnSiteFrom недійсний',
	},
	20000200126: {
		en: 'CostOnSiteFrom is too high',
		ru: 'CostOnSiteFrom слишком большая',
		uk: 'CostOnSiteFrom занадто велика',
	},
	20000200127: {
		en: 'CostOnSiteTo is invalid',
		ru: 'CostOnSiteTo недействителен',
		uk: 'CostOnSiteTo недійсний',
	},
	20000200128: {
		en: 'CostOnSiteTo is too high',
		ru: 'CostOnSiteTo слишком большая',
		uk: 'CostOnSiteTo занадто велика',
	},
	20000300410: {
		en: 'CostTo is invalid',
		ru: 'CostTo недействителен',
		uk: 'CostTo недійсний',
	},
	20000300411: {
		en: 'CostTo is too high',
		ru: 'CostTo слишком большая',
		uk: 'CostTo занадто велика',
	},
	20000200131: {
		en: 'Counterparty creation problem',
		ru: 'Проблема создания Контрагента',
		uk: 'Проблема створення Контрагента',
	},
	20000200132: {
		en: 'Counterparty for AlternativePayment NonCash is invalid',
		ru: 'Контрагент для AlternativePayment Безнал недействителен',
		uk: 'Контрагент для AlternativePayment Безнал недійсний',
	},
	20000200133: {
		en: 'Counterparty for ForwardingCount is invalid',
		ru: 'Контрагент для ForwardingCount недействителен',
		uk: 'Контрагент для ForwardingCount недійсний',
	},
	20000200134: {
		en: 'Counterparty for IsTakeAttorney is invalid',
		ru: 'Контрагент для IsTakeAttorney недействителен',
		uk: 'Контрагент для IsTakeAttorney недійсний',
	},
	20000200135: {
		en: 'Counterparty for Payment NonCash is invalid',
		ru: 'Контрагент для оплаты по Безналичному расчету недействителен',
		uk: 'Контрагент для оплати за безготівковим розрахунком недійсний',
	},
	20000200136: {
		en: 'Counterparty for SameDayDelivery is invalid',
		ru: 'Контрагент для SameDayDelivery недействителен',
		uk: 'Контрагент для SameDayDelivery недійсний',
	},
	20000200137: {
		en: 'Counterparty for ThirdPerson is invalid',
		ru: 'Контрагент для ThirdPerson недействителен',
		uk: 'Контрагент для ThirdPerson недійсний',
	},
	20000200138: {
		en: 'Counterparty not found by City',
		ru: 'Контрагент не найден в выбранном Городе',
		uk: 'Контрагент не знайдено в обраному Місті',
	},
	20000200139: {
		en: 'CountrySender is invalid',
		ru: 'CountrySender недействителен',
		uk: 'CountrySender недійсний',
	},
	20000200140: {
		en: 'CountrySender is required',
		ru: 'CountrySender требуется',
		uk: 'CountrySender потрібно',
	},
	20000300412: {
		en: 'CreateTime filtering is invalid format',
		ru: 'Фильтр Дата создания неверный формат',
		uk: 'Фільтр Дата створення невірний формат',
	},
	20000200143: {
		en: 'DateTime cannot be less then PreferredDeliveryDate',
		ru: 'Дата доставки не может быть меньше чем желаемая дата доставки',
		uk: 'Дата доставки не може бути менше ніж бажана дата доставки',
	},
	20000300413: {
		en: 'DateTime filtering is invalid format',
		ru: 'Фильтр Дата доставки неверный формат',
		uk: 'Фільтр Дата доставки невірний формат',
	},
	20000200145: {
		en: 'DateTime is empty',
		ru: 'Дата доставки пуста',
		uk: 'Дата доставки відсутня',
	},
	20000400456: {
		en: 'DateTime is invalid format',
		ru: 'Дата доставки, неверный формат',
		uk: 'Дата доставки невірний формат',
	},
	20000200147: {
		en: 'Delivery must be to the door',
		ru: 'Доставка должна быть к двери',
		uk: 'Доставка повинна бути до дверей',
	},
	20000200148: {
		en: 'DeliveryByHand is invalid',
		ru: 'Заказана услуга "Доставка лично в руки". Редактирование для адресной доставки - запрещено.',
		uk: 'Замовлена послуга "Доставка особисто в руки". Редагування для адресної доставки - заборонено.',
	},
	20000300414: {
		en: 'DeliveryDateTime filtering is invalid format',
		ru: 'Фильтр DeliveryDateTime неверный формат',
		uk: 'Фільтр DeliveryDateTime невірний формат',
	},
	20000200150: {
		en: 'Description empty',
		ru: 'Описание отсутствует',
		uk: 'Опис відсутній',
	},
	20000200151: {
		en: 'Description is not valid',
		ru: 'Описание недействительно',
		uk: 'Опис недійсний',
	},
	20000200152: {
		en: 'Description too long',
		ru: 'Описание слишком длинное',
		uk: 'Опис занадто довгий',
	},
	20000200153: {
		en: 'Document in registry',
		ru: 'Документ в реестре',
		uk: 'Документ в реєстрі',
	},
	20000200154: {
		en: 'Document is already printed',
		ru: 'Документ уже напечатан',
		uk: 'Документ роздрукований',
	},
	20000300415: {
		en: 'Document not found',
		ru: 'Документ не найден',
		uk: 'Документ не знайдено',
	},
	20000300416: {
		en: 'Document not found by owner',
		ru: 'Документ не найден владельцем',
		uk: 'Документ не знайдено власником',
	},
	20000200157: {
		en: 'Document number empty',
		ru: 'Номер документа не заполнен',
		uk: 'Номер документа не заповнено',
	},
	20000200158: {
		en: 'Document number incorrect',
		ru: 'Номер документа указан некорректно',
		uk: 'Номер документа вказано некоректно',
	},
	20000200159: {
		en: 'Documents must be array',
		ru: 'Документы должен быть массивом',
		uk: 'Документи повинен бути масивом',
	},
	20000200160: {
		en: 'Documents must be in array',
		ru: 'Документы должен быть в массиве',
		uk: 'Документи повинен бути у масиві',
	},
	20000200161: {
		en: 'Documents not found',
		ru: 'Документы не найдены',
		uk: 'Документи не знайдені',
	},
	20000200162: {
		en: 'Documents redelivery is not valid',
		ru: 'Документы, обратная доставка недействительна',
		uk: 'Документи, зворотна доставка недійсна',
	},
	20000200163: {
		en: 'Documents redelivery too long',
		ru: 'Документы, обратная доставка слишком длинная',
		uk: 'Документи, зворотна доставка занадто довга',
	},
	20000200164: {
		en: 'EDRPOU is invalid',
		ru: 'ЕДРПОУ указан некорректно',
		uk: 'ЄДРПОУ вказано некоректно',
	},
	20000200165: {
		en: 'EDRPOU must not be empty',
		ru: 'ЕДРПОУ не должен быть пустым',
		uk: 'ЄДРПОУ не повинен бути порожнім',
	},
	20000200166: {
		en: 'Failed to convert Settlement to city',
		ru: 'Не удалось преобразовать Settlement в город',
		uk: 'Не вдалося перетворити Settlement в місто',
	},
	20000200167: {
		en: 'Failed to create recipient building',
		ru: 'Не удалось создать дом получателя',
		uk: 'Не вдалося створити будинок одержувача',
	},
	20000200168: {
		en: 'Failed to create sender building',
		ru: 'Не удалось создать дом отправителя',
		uk: 'Не вдалося створити будинок відправника',
	},
	20000200169: {
		en: 'Failed to validate RecipientBuildingNumber',
		ru: 'Не удалось подтвердить номер дома получателя',
		uk: 'Не вдалося підтвердити номер будинку одержувача',
	},
	20000200170: {
		en: 'Failed to validate RecipientSettlementStreetRef',
		ru: 'Не удалось подтвердить RecipientSettlementStreetRef',
		uk: 'Не вдалося підтвердити RecipientSettlementStreetRef',
	},
	20000200171: {
		en: 'Failed to validate SenderBuildingNumber',
		ru: 'Не удалось подтвердить номер дома отправителя',
		uk: 'Не вдалося підтвердити номер будинку відправника',
	},
	20000200172: {
		en: 'Failed to validate SenderSettlementStreetRef',
		ru: 'Не удалось подтвердить SenderSettlementStreetRef',
		uk: 'Не вдалося підтвердити SenderSettlementStreetRef',
	},
	20000200173: {
		en: 'FillingWarranty is incorrect',
		ru: 'FillingWarranty указано некорректно',
		uk: 'FillingWarranty вказано некоректно',
	},
	20000200174: {
		en: 'FillingWarranty is unavailable',
		ru: 'FillingWarranty недоступно',
		uk: 'FillingWarranty недоступно',
	},
	20000200175: {
		en: 'For BackwardDelivery Trays PayerType must be Sender',
		ru: 'Для обратной доставки значение Тип плательщика должно быть Отправитель',
		uk: 'Для зворотної доставки значення Тип платника повинно бути Відправник',
	},
	20000200176: {
		en: 'ForwardingCount is unavailable',
		ru: 'ForwardingCount недоступен',
		uk: 'ForwardingCount недоступний',
	},
	20000300419: {
		en: 'GetFullList is invalid',
		ru: 'GetFullList недействителен',
		uk: 'GetFullList недійсний',
	},
	20000400460: {
		en: 'Height is empty',
		ru: 'Значение Высота пуста',
		uk: 'Значення Висота порожня',
	},
	20000200179: {
		en: 'Height is too high',
		ru: 'Значение Высота слишком длинное',
		uk: 'Значення Висота задовге',
	},
	20000200180: {
		en: 'Height is too high for InPost',
		ru: 'Значение Высота слишком длинное для почтомата InPost',
		uk: 'Значення Висота задовге для поштомата InPost',
	},
	20000200181: {
		en: 'Height is too high for PostomatNP',
		ru: 'Значение Высота слишком длинное для почтомата PostomatNP',
		uk: 'Значення Висота задовге для почтомата PostomatNP',
	},
	20000200182: {
		en: 'Impossible to deliver cargo on holiday',
		ru: 'Невозможно доставить груз в праздничный день',
		uk: 'Неможливо доставити вантаж в святковий день',
	},
	20000200183: {
		en: 'Impossible to deliver cargo on this day',
		ru: 'Невозможно доставить груз в этот день',
		uk: 'Неможливо доставити вантаж в цей день',
	},
	20000200184: {
		en: 'Incorrect CargoType',
		ru: 'Некорректно указан тип груза',
		uk: 'Некоректно зазначений тип вантажу',
	},
	20000200185: {
		en: 'Incorrect Summ value',
		ru: 'Неверное значение Суммы',
		uk: 'Неправильне Значення Суми',
	},
	20000200186: {
		en: 'Incorrect TimeInterval',
		ru: 'Некорректно указаны Временные Интервалы',
		uk: 'Некоректно вказані Часові Інтервали',
	},
	20000200187: {
		en: 'Incorrect TimeIntervalHour',
		ru: 'Некорректно указаны TimeIntervalHour',
		uk: 'Некоректно вказані TimeIntervalHour',
	},
	20000200188: {
		en: 'InfoRegClientBarcodes has invalid characters',
		ru: 'InfoRegClientBarcodes содержит недопустимые символы',
		uk: 'InfoRegClientBarcodes містить неприпустимі символи',
	},
	20000200189: {
		en: 'InfoRegClientBarcodes is too long',
		ru: 'InfoRegClientBarcodes слишком длинная',
		uk: 'InfoRegClientBarcodes занадто довга',
	},
	20000200190: {
		en: 'IntDocNumber is undefined',
		ru: 'Номер интернет документа не определен',
		uk: 'Номер інтернет документа не визначено',
	},
	20000200191: {
		en: 'InternationalCitySender is invalid',
		ru: 'InternationalCitySender недействителен',
		uk: 'InternationalCitySender недійсний',
	},
	20000200192: {
		en: 'InternationalCitySender is required',
		ru: 'InternationalCitySender требуется',
		uk: 'InternationalCitySender потрібно',
	},
	20000200193: {
		en: 'InternationalContactSender is invalid',
		ru: 'InternationalContactSender недействителен',
		uk: 'InternationalContactSender недійсний',
	},
	20000200194: {
		en: 'InternationalContactSender is required',
		ru: 'InternationalContactSender требуется',
		uk: 'InternationalContactSender потрібно',
	},
	20000200195: {
		en: 'InternationalEmail is invalid',
		ru: 'InternationalEmail недействителен',
		uk: 'InternationalEmail недійсний',
	},
	20000200196: {
		en: 'InternationalSender is invalid',
		ru: 'InternationalSender недействителен',
		uk: 'InternationalSender недійсний',
	},
	20000200197: {
		en: 'InternationalSenderAddress is invalid',
		ru: 'InternationalSenderAddress недействителен',
		uk: 'InternationalSenderAddress недійсний',
	},
	20000200198: {
		en: 'InternationalSenderAddress is required',
		ru: 'InternationalSenderAddress требуется',
		uk: 'InternationalSenderAddress потрібно',
	},
	20000200199: {
		en: 'InternationalSendersPhone is invalid',
		ru: 'InternationalSendersPhone недействителен',
		uk: 'InternationalSendersPhone недійсний',
	},
	20000200200: {
		en: 'InternationalSendersPhone is required',
		ru: 'InternationalSendersPhone требуется',
		uk: 'InternationalSendersPhone потрібно',
	},
	20000200201: {
		en: 'InternationalWaybill is invalid',
		ru: 'InternationalWaybill недействителен',
		uk: 'InternationalWaybill недійсний',
	},
	20000200202: {
		en: 'InternationalWaybill is required',
		ru: 'InternationalWaybill требуется',
		uk: 'InternationalWaybill потрібно',
	},
	20000200203: {
		en: 'InternationalWaybillPrice is invalid',
		ru: 'InternationalWaybillPrice недействителен',
		uk: 'InternationalWaybillPrice недійсний',
	},
	20000200204: {
		en: 'InternationalWaybillPrice is required',
		ru: 'InternationalWaybillPrice требуется',
		uk: 'InternationalWaybillPrice потрібно',
	},
	20000200205: {
		en: 'InternetDocument not found',
		ru: 'Интернет документ не найден',
		uk: 'Інтернет документ не знайдено',
	},
	20000200206: {
		en: 'InternetDocument not found by owner',
		ru: 'InternetDocument не найдено владельцем',
		uk: 'Інтернет документ не знайдено власником',
	},
	20000200207: {
		en: 'IsTakeAttorney is unavailable',
		ru: 'IsTakeAttorney недоступен',
		uk: 'IsTakeAttorney недоступний',
	},
	20000200208: {
		en: 'Items is empty',
		ru: 'Предметы пусты',
		uk: 'Предмети порожні',
	},
	20000400464: {
		en: 'Length is empty',
		ru: 'Длина пуста',
		uk: 'Довжина порожня',
	},
	20000200210: {
		en: 'Length is too high',
		ru: 'Длина слишком высока',
		uk: 'Довжина занадто довга',
	},
	20000200211: {
		en: 'Length is too high for InPost',
		ru: 'Длина слишком длинная для почтомата InPost',
		uk: 'Довжина занадто довга для почтомата InPost',
	},
	20000200212: {
		en: 'Length is too high for PostomatNP',
		ru: 'Длина слишком длинная для почтомата PostomatNP',
		uk: 'Довжина занадто довга для поштомата PostomatNP',
	},
	20000100541: {
		en: 'MarketplacePartnerToken is incorrect',
		ru: 'Параметр MarketplacePartnerToken указан некорректно',
		uk: 'Параметр MarketplacePartnerToken вказано некоректно',
	},
	20000200214: {
		en: 'More than 1 RecipientCityName found in old AddressSystem',
		ru: 'Более одного города получателя найдено в старом Адресном справочнике',
		uk: 'Більше одного міста одержувача знайдено в старому Адресному довіднику',
	},
	20000200215: {
		en: 'Must be one OptionsSeat',
		ru: 'Параметр места, должен быть один',
		uk: 'Параметр місця, повинен бути один',
	},
	20000200216: {
		en: 'No date provided',
		ru: 'Нет даты при условии',
		uk: 'Немає дати при/за умови',
	},
	20000200217: {
		en: 'No rights to the method',
		ru: 'Нет прав в методе',
		uk: 'Немає прав в методі',
	},
	20000200218: {
		en: 'NoteAddressRecipient lenght cannot be more then 50 chars',
		ru: 'Описание адреса получателя, длина не может быть больше 50 символов',
		uk: 'Опис адреси одержувача, довжина не може бути більше 50 символів',
	},
	20000200219: {
		en: 'NoteAddressSender lenght cannot be more then 50 chars',
		ru: 'Описание адреса отправителя, длина не может быть больше 50 символов',
		uk: 'Опис адреси відправника, довжина не може бути більше 50 символів',
	},
	20000200220: {
		en: 'Number is empty',
		ru: 'Номер пуст',
		uk: 'Номер порожній',
	},
	20000200221: {
		en: 'NumberOfFloorsDescent is invalid',
		ru: 'Количество этажей является недействительным',
		uk: 'Кількість поверхів є недійсним',
	},
	20000200222: {
		en: 'NumberOfFloorsDescent must be empty when delivered from warehouse',
		ru: 'NumberOfFloorsDescent должен быть пустым при поставке со склада',
		uk: 'NumberOfFloorsDescent повинен бути порожнім при поставці зі складу',
	},
	20000200223: {
		en: 'NumberOfFloorsLifting is invalid',
		ru: 'NumberOfFloorsLifting недействителен',
		uk: 'NumberOfFloorsLifting недійсний',
	},
	20000200224: {
		en: 'NumberOfFloorsLifting must be empty when delivered at warehouse',
		ru: 'NumberOfFloorsLifting должен быть пустым, при поставке на склад',
		uk: 'NumberOfFloorsLifting повинен бути порожнім, при поставці на склад',
	},
	20000200225: {
		en: 'OptionsSeat in must be CargoType Cargo or Pallet',
		ru: 'Параметр мест должен иметь Тип Груза Груз или Паллета',
		uk: 'Параметр місць повинен мати Тип Вантажу Вантаж або Паллета',
	},
	20000200226: {
		en: 'OptionsSeat is empty',
		ru: 'Параметр мест пуст',
		uk: 'Параметр місць порожній',
	},
	20000200227: {
		en: 'OptionsSeat must be array',
		ru: 'Параметр мест должен быть массивом',
		uk: 'Параметр місць повинен бути масивом',
	},
	20000200228: {
		en: 'Order not found',
		ru: 'Заказ не найден',
		uk: 'Замовлення не знайдено',
	},
	20000300421: {
		en: 'OrderDirection is invalid',
		ru: 'OrderDirection недействителен',
		uk: 'OrderDirection недійсний',
	},
	20000300423: {
		en: 'OrderField is invalid',
		ru: 'OrderField недействителен',
		uk: 'OrderField недійсний',
	},
	20000200231: {
		en: 'Organization does not exists or incorrect EDRPOU',
		ru: 'Организация не существует или неправильно указан код ЕДРПОУ',
		uk: 'Організація не існує або неправильно вказано код ЄДРПОУ',
	},
	20000200232: {
		en: 'Other redelivery is not valid',
		ru: 'Другая обратная доставка недействительна',
		uk: 'Інша зворотна доставка недійсна',
	},
	20000200233: {
		en: 'Other redelivery too long',
		ru: 'Другая обратная доставка слишком долгая',
		uk: 'Інша зворотна доставка занадто довга',
	},
	20000200234: {
		en: 'OwnershipForm is incorrect',
		ru: 'Параметр OwnershipForm некорректен',
		uk: 'Параметр OwnershipForm некоректний',
	},
	20000200235: {
		en: 'OwnershipForm is not specified',
		ru: 'Параметр OwnershipForm не указан',
		uk: 'Параметр OwnershipForm не вказано',
	},
	20000200236: {
		en: 'OwnershipForm must be empty',
		ru: 'Параметр OwnershipForm должен быть пустым',
		uk: 'Параметр OwnershipForm повинен бути порожнім',
	},
	20000200237: {
		en: 'Pack empty',
		ru: 'Параметр упаковки пуст',
		uk: 'Параметр упаковки порожній',
	},
	20000200238: {
		en: 'Pack is too long',
		ru: 'Параметр упаковки слишком длинный',
		uk: 'Параметр упаковки занадто довгий',
	},
	20000200239: {
		en: 'Pack not valid',
		ru: 'Параметр упаковки недействителен',
		uk: 'Параметр упаковки недійсний',
	},
	20000200242: {
		en: 'PackingNumber has invalid characters',
		ru: 'Параметр Номер упаковки содержит недопустимые символы',
		uk: 'Параметр Номер упаковки містить неприпустимі символи',
	},
	20000200243: {
		en: 'PackingNumber too long',
		ru: 'Параметр Номер упаковки слишком длинный',
		uk: 'Параметр Номер упаковки занадто довгий',
	},
	20000400474: {
		en: 'Page is not specified',
		ru: 'Номер страницы не указан',
		uk: 'Номер сторінки не вказано',
	},
	20000200245: {
		en: 'Payer ThirdPerson is invalid',
		ru: 'Плательщик третье лицо не действителен',
		uk: 'Платник третя особа не дійсний',
	},
	20000400475: {
		en: 'Payer type is incorrect',
		ru: 'Тип плательщика неверный',
		uk: 'Тип платника невірний',
	},
	20000200247: {
		en: 'Payer type not selected',
		ru: 'Тип плательщика не выбран',
		uk: 'Тип платника не обрано',
	},
	20000200248: {
		en: 'Payment method not selected',
		ru: 'Способ оплаты не выбран',
		uk: 'Спосіб оплати не обрано',
	},
	20000200249: {
		en: 'Payment NonCash is unavailable',
		ru: 'Оплата по Безналичному расчету недоступна',
		uk: 'Оплата за безготівковим розрахунком недоступна',
	},
	20000200250: {
		en: 'PaymentMethod is empty',
		ru: 'PaymentMethod пуст',
		uk: 'PaymentMethod порожній',
	},
	20000200251: {
		en: 'PaymentMethod is incorrect',
		ru: 'PaymentMethod некорректен',
		uk: 'PaymentMethod некоректний',
	},
	20000200252: {
		en: 'PaymentSystem is empty',
		ru: 'PaymentSystem пуст',
		uk: 'PaymentSystem порожній',
	},
	20000200253: {
		en: 'Phone of TypeCompensationPB invalid format',
		ru: 'Телефон из TypeCompensationPB недопустимый формат',
		uk: 'Телефон з TypeCompensationPB неприпустимий формат',
	},
	20000200254: {
		en: 'PreferredDeliveryDate cannot be less then now',
		ru: 'Желаемая дата доставки не может быть меньше, чем сегодня',
		uk: 'Бажана дата доставки не може бути менше, ніж сьогодні',
	},
	20000200255: {
		en: 'PreferredDeliveryDate is invalid format',
		ru: 'Желаемая дата доставки неверный формат',
		uk: 'Бажана дата доставки невірний формат',
	},
	20000200256: {
		en: 'Recipient city is empty for saturday delivery validation',
		ru: 'Город получателя пуст для подтверждения доставки в Субботу',
		uk: 'Місто одержувача порожнє для підтвердження доставки в Суботу',
	},
	20000300426: {
		en: 'Recipient does not belong to this CityRecipient',
		ru: 'Получатель не принадлежит к этому Городу получателя',
		uk: 'Одержувач не належить до цього Міста одержувача',
	},
	20000300427: {
		en: 'Recipient does not belong to this User',
		ru: 'Получатель не принадлежит этому пользователю',
		uk: 'Одержувач не належить цього користувача',
	},
	20000300428: {
		en: 'Recipient does not exists',
		ru: 'Получатель не существует',
		uk: 'Одержувач не існує',
	},
	20000300429: {
		en: 'Recipient is incorrect',
		ru: 'Получатель указан некорректно',
		uk: 'Одержувача вказано некоректно',
	},
	20000200261: {
		en: 'Recipient is invalid',
		ru: 'Получатель не действителен',
		uk: 'Одержувач не дійсний',
	},
	20000300430: {
		en: 'Recipient is removed',
		ru: 'Получатель удален',
		uk: 'Одержувача видалено',
	},
	20000300431: {
		en: 'Recipient not selected',
		ru: 'Получатель не выбран',
		uk: 'Одержувача не обрано',
	},
	20000200264: {
		en: 'RecipientAddress does not belong to this Recipient',
		ru: 'Адрес получателя не принадлежит к этому получателю',
		uk: 'Адреса одержувача не належить до цього одержувача',
	},
	20000200265: {
		en: 'RecipientAddress does not exists',
		ru: 'Адрес получателя не существует',
		uk: 'Адреса одержувача не існує',
	},
	20000200266: {
		en: 'RecipientAddress is incorrect',
		ru: 'Адрес получателя указан некорректно',
		uk: 'Адреса отримувача вказана некоректно',
	},
	20000200267: {
		en: 'RecipientAddress is removed',
		ru: 'Адрес получателя удален',
		uk: 'Адреса одержувача видалена',
	},
	20000200268: {
		en: 'RecipientAddress not selected',
		ru: 'Адрес получателя не выбран',
		uk: 'Адреса отримувача не обрана',
	},
	20000200269: {
		en: 'RecipientAddressComment is invalid',
		ru: 'Комментарий Адрес получателя недействителен',
		uk: 'Коментар Адреса одержувача недійсний',
	},
	20000200270: {
		en: 'RecipientAddressFlat is invalid',
		ru: 'Номер квартиры в Адрес получателя недействителен',
		uk: 'Номер квартири в Адреса одержувача недійсний',
	},
	20000200271: {
		en: 'RecipientAddressHouse is invalid',
		ru: 'Номер дома в Адрес получателя недействителен',
		uk: 'Номер будинку в Адреса одержувача недійсний',
	},
	20000200272: {
		en: 'RecipientAddressHouse not selected',
		ru: 'Номер дома в Адрес получателя не выбран',
		uk: 'Номер будинку в Адреса отримувача не обрано',
	},
	20000200273: {
		en: 'RecipientAddressName not found',
		ru: 'RecipientAddressName не найден',
		uk: 'RecipientAddressName не знайдено',
	},
	20000200274: {
		en: 'RecipientAddressStreet not selected',
		ru: 'Улица в Адрес получателя не выбрана',
		uk: 'Вулиця в Адреса одержувача не вибрана',
	},
	20000200275: {
		en: 'RecipientArea not selected',
		ru: 'Область получателя не выбрана',
		uk: 'Область одержувача не вибрана',
	},
	20000200276: {
		en: 'RecipientCity is incorrect',
		ru: 'Город получателя указан некорректно',
		uk: 'Місто отримувача вказано некоректно',
	},
	20000200277: {
		en: 'RecipientCity not selected',
		ru: 'Город получателя не выбран',
		uk: 'Місто отримувача не обраний',
	},
	20000200278: {
		en: 'RecipientCityName incorrect',
		ru: 'Название Город получателя некорректно',
		uk: "Ім'я Місто одержувача некоректно",
	},
	20000200279: {
		en: 'RecipientCityName not found',
		ru: 'Название Город получателя не найден',
		uk: "Ім'я Місто отримувача не знайдено",
	},
	20000200280: {
		en: 'RecipientCityName not found in old AddressSystem',
		ru: 'Название Город получателя не найден в старом Адресном справочнике',
		uk: 'Назва Місто отримувача не знайдено в старому Адресному довіднику',
	},
	20000200281: {
		en: 'RecipientCityName not selected',
		ru: 'Название Город получателя не выбран',
		uk: 'Назва Місто отримувача не обрано',
	},
	20000200282: {
		en: 'RecipientContactName incorrect',
		ru: 'Имя контакта получателя указано некорректно',
		uk: "Ім'я контакту одержувача вказано некоректно",
	},
	20000200283: {
		en: 'RecipientContactName not selected',
		ru: 'Имя контакта получателя не выбран',
		uk: "Ім'я контакту отримувача не обрано",
	},
	20000200284: {
		en: 'RecipientCounterpartyFirstName is invalid',
		ru: 'RecipientCounterpartyFirstName недействительно',
		uk: 'RecipientCounterpartyFirstName недійсне',
	},
	20000200285: {
		en: 'RecipientCounterpartyLastName is invalid',
		ru: 'RecipientCounterpartyLastName недействительно',
		uk: 'RecipientCounterpartyLastName недійсне',
	},
	20000200286: {
		en: 'RecipientCounterpartyLastName not selected',
		ru: 'RecipientCounterpartyLastName не выбран',
		uk: 'RecipientCounterpartyLastName не обрано',
	},
	20000200287: {
		en: 'RecipientCounterpartyOrganizationName is invalid',
		ru: 'RecipientCounterpartyOrganizationName недействителен',
		uk: 'RecipientCounterpartyOrganizationName недійсний',
	},
	20000200288: {
		en: 'RecipientCounterpartyOrganizationName not selected',
		ru: 'RecipientCounterpartyOrganizationName не выбран',
		uk: 'RecipientCounterpartyOrganizationName не обрано',
	},
	20000200289: {
		en: 'RecipientCounterpartyOwnershipForm is invalid',
		ru: 'RecipientCounterpartyOwnershipForm недействителен',
		uk: 'RecipientCounterpartyOwnershipForm недійсний',
	},
	20000200290: {
		en: 'RecipientCounterpartyOwnershipForm not selected',
		ru: 'RecipientCounterpartyOwnershipForm не выбран',
		uk: 'RecipientCounterpartyOwnershipForm не обрано',
	},
	20000200291: {
		en: 'RecipientCounterpartyPhone is invalid',
		ru: 'RecipientCounterpartyPhone недействителен',
		uk: 'RecipientCounterpartyPhone недійсний',
	},
	20000200292: {
		en: 'RecipientCounterpartyPhone not selected',
		ru: 'RecipientCounterpartyPhone не выбран',
		uk: 'RecipientCounterpartyPhone не обрано',
	},
	20000300432: {
		en: 'RecipientDateTime filtering is invalid format',
		ru: 'Фильтрация RecipientDateTime неверный формат',
		uk: 'Фільтрація RecipientDateTime невірний формат',
	},
	20000200294: {
		en: 'RecipientFlat incorrect',
		ru: 'Этаж получателя указан некорректно',
		uk: 'Поверх отримувача вказано некоректно',
	},
	20000200295: {
		en: 'RecipientHouse incorrect',
		ru: 'Дом получателя указан некорректно',
		uk: 'Будинок отримувача вказано некоректно',
	},
	20000200296: {
		en: 'RecipientHouse not selected',
		ru: 'Дом получателя не выбран',
		uk: 'Будинок отримувача не обрано',
	},
	20000300433: {
		en: 'RecipientRef is invalid',
		ru: 'Ref получателя недействителен',
		uk: 'Ref одержувача недійсний',
	},
	20000300434: {
		en: 'RecipientsPhone invalid format',
		ru: 'Телефон получателя неверный формат',
		uk: 'Телефон одержувача невірний формат',
	},
	20000300435: {
		en: 'RecipientsPhone is empty',
		ru: 'Телефон получателя пуст',
		uk: 'Телефон одержувача порожній',
	},
	20000200300: {
		en: 'RecipientType is invalid',
		ru: 'Тип получателя недействителен',
		uk: 'Тип одержувача недійсний',
	},
	20000200301: {
		en: 'RecipientWarehouseId is not numeric',
		ru: 'RecipientWarehouseId не является числовым значением',
		uk: 'RecipientWarehouseId не є числовим значенням',
	},
	20000200303: {
		en: 'RedeliveryCalculate Amount',
		ru: 'RedeliveryCalculate Сумма',
		uk: 'RedeliveryCalculate Сума',
	},
	20000200304: {
		en: 'RedeliveryCalculate CargoType',
		ru: 'RedeliveryCalculate Тип отправления',
		uk: 'RedeliveryCalculate Тип відправлення',
	},
	20000300436: {
		en: 'Ref is invalid',
		ru: 'Ref указан некорреткно',
		uk: 'Ref вказано некорреткно',
	},
	20000200306: {
		en: 'Ref must be empty',
		ru: 'Ref должен быть пустым',
		uk: 'Ref повинен бути порожнім',
	},
	20000200307: {
		en: 'Refs is undefined',
		ru: 'Refs не определен',
		uk: 'Refs не визначений',
	},
	20000200309: {
		en: 'SameDayDelivery is unavailable',
		ru: 'Доставка в тот же день недоступна',
		uk: 'Доставка в той же день недоступна',
	},
	20000200310: {
		en: 'SameDayDelivery is unavailable for different cities',
		ru: 'Доставка в тот же день недоступна для разных городов',
		uk: 'Доставка в той же день недоступна для різних міст',
	},
	20000200311: {
		en: 'SameDayDelivery is unavailable for late order',
		ru: 'Доставка в тот же день недоступна для позднего заказа',
		uk: 'Доставка в той же день недоступна для пізнього замовлення',
	},
	20000200313: {
		en: 'SeatsAmount empty',
		ru: 'Количество мест не указано',
		uk: 'Кількість місць не вказано',
	},
	20000200314: {
		en: 'SeatsAmount is invalid',
		ru: 'Количество мест указано некорректно',
		uk: 'Кількість місць вказано некоректно',
	},
	20000200315: {
		en: 'SeatsAmountFrom cannot be less then SeatsAmountTo',
		ru: 'SeatsAmountFrom не может быть меньше SeatsAmountTo',
		uk: 'SeatsAmountFrom не може бути менше SeatsAmountTo',
	},
	20000200316: {
		en: 'SeatsAmountFrom is invalid',
		ru: 'SeatsAmountFrom указано некорректно',
		uk: 'SeatsAmountFrom вказано некоректно',
	},
	20000200317: {
		en: 'SeatsAmountFrom is too high',
		ru: 'SeatsAmountFrom слишком длинное',
		uk: 'SeatsAmountFrom задовге',
	},
	20000200318: {
		en: 'SeatsAmountTo is invalid',
		ru: 'SeatsAmountTo указано некорректно',
		uk: 'SeatsAmountTo вказано некоректно',
	},
	20000200319: {
		en: 'SeatsAmountTo is too high',
		ru: 'SeatsAmountTo слишком длинное',
		uk: 'SeatsAmountTo задовге',
	},
	20000300437: {
		en: 'Sender does not belong to this CitySender',
		ru: 'Отправитель не принадлежит к этому Городу отправителя',
		uk: 'Відправник не належить до цього Місту відправника',
	},
	20000300438: {
		en: 'Sender does not belong to this User',
		ru: 'Отправитель не принадлежит этому пользователю',
		uk: 'Відправник не належить цього користувача',
	},
	20000300440: {
		en: 'Sender is incorrect',
		ru: 'Отправитель указан некорректно',
		uk: 'Відправник вказано некоректно',
	},
	20000300441: {
		en: 'Sender is removed',
		ru: 'Отправитель удален',
		uk: 'Відправника видалено',
	},
	20000300442: {
		en: 'Sender not selected',
		ru: 'Отправитель не выбран',
		uk: 'Відправника не обрано',
	},
	20000200325: {
		en: 'SenderAddress does not belong to this Sender',
		ru: 'Адрес отправителя не принадлежит к этому отправителю',
		uk: 'Адреса відправника не належить до цього відправника',
	},
	20000200326: {
		en: 'SenderAddress does not exists',
		ru: 'Адрес отправителя не существует',
		uk: 'Адреса відправника не існує',
	},
	20000200327: {
		en: 'SenderAddress is incorrect',
		ru: 'Адрес отправителя указан неверно',
		uk: 'Адреса відправника вказана невірно',
	},
	20000200328: {
		en: 'SenderAddress is removed',
		ru: 'Адрес отправителя удален',
		uk: 'Адреса відправника видалена',
	},
	20000200329: {
		en: 'SenderAddress not selected',
		ru: 'Адрес отправителя не выбран',
		uk: 'Адресу відправника не обрано',
	},
	20000200330: {
		en: 'SenderAddressComment is invalid',
		ru: 'SenderAddressComment указан неверно',
		uk: 'SenderAddressComment вказано невірно',
	},
	20000200331: {
		en: 'SenderAddressFlat is invalid',
		ru: 'Этаж Адрес отправителя указан некорректно',
		uk: 'Поверх Адреса відправника вказано некоректно',
	},
	20000200332: {
		en: 'SenderAddressHouse is invalid',
		ru: 'SenderAddressHouse недействителен',
		uk: 'SenderAddressHouse недійсний',
	},
	20000200333: {
		en: 'SenderAddressStreet not selected',
		ru: 'Улица Адреса получателя не выбрана',
		uk: 'Вулиця Адреси одержувача не обрана',
	},
	20000200334: {
		en: 'SenderCity not selected',
		ru: 'Город отправителя не выбран',
		uk: 'Місто відправника не обрано',
	},
	20000200335: {
		en: 'SenderCounterpartyName is invalid',
		ru: 'SenderCounterpartyName недействителен',
		uk: 'SenderCounterpartyName недійсний',
	},
	20000200336: {
		en: 'SenderCounterpartyName not selected',
		ru: 'SenderCounterpartyName не выбран',
		uk: 'SenderCounterpartyName не обрано',
	},
	20000200337: {
		en: 'SenderPersonFirstName is invalid',
		ru: 'SenderPersonFirstName недействителен',
		uk: 'SenderPersonFirstName недійсний',
	},
	20000200338: {
		en: 'SenderPersonFirstName not selected',
		ru: 'SenderPersonFirstName не выбран',
		uk: 'SenderPersonFirstName не обрано',
	},
	20000200339: {
		en: 'SenderPersonLastName is invalid',
		ru: 'SenderPersonLastName недействителен',
		uk: 'SenderPersonLastName недійсний',
	},
	20000200340: {
		en: 'SenderPersonLastName not selected',
		ru: 'SenderPersonLastName не выбран',
		uk: 'SenderPersonLastName не обрано',
	},
	20000200341: {
		en: 'SenderPersonPhone is invalid',
		ru: 'SenderPersonPhone недействителен',
		uk: 'SenderPersonPhone недійсний',
	},
	20000200342: {
		en: 'SenderPersonPhone not selected',
		ru: 'SenderPersonPhone не выбран',
		uk: 'SenderPersonPhone не обрано',
	},
	20000300443: {
		en: 'SenderRef is invalid',
		ru: 'Ref отправителя недействителен',
		uk: 'Ref відправника недійсний',
	},
	20000300444: {
		en: 'SendersPhone invalid format',
		ru: 'Телефон отправителя неверный формат',
		uk: 'Телефон відправника невірний формат',
	},
	20000300445: {
		en: 'SendersPhone is empty',
		ru: 'Телефон отправителя пуст',
		uk: 'Телефон відправника порожній',
	},
	20000200346: {
		en: 'SenderWarehouseId is not numeric',
		ru: 'SenderWarehouseId не является числовым значением',
		uk: 'SenderWarehouseId не є числовим значенням',
	},
	20000200347: {
		en: 'ServiceType is empty',
		ru: 'ServiceType пуст',
		uk: 'ServiceType порожній',
	},
	20000200348: {
		en: 'ServiceType is incorrect',
		ru: 'ServiceType неверен',
		uk: 'ServiceType невірний',
	},
	20000200349: {
		en: 'Sum',
		ru: 'Сумма',
		uk: 'Сума',
	},
	20000200350: {
		en: 'Third Person can use only NonCash PaymentMethod',
		ru: 'Третье лицо может использовать только Безналичный расчет',
		uk: 'Третя особа може використовувати тільки Безготівковий розрахунок',
	},
	20000200351: {
		en: 'ThirdPerson is invalid',
		ru: 'Третье лицо недействительно',
		uk: 'Третя особа недійсне',
	},
	20000200352: {
		en: 'ThirdPerson is not selected',
		ru: 'Третье лицо не выбран',
		uk: 'Третя особа, не обрана',
	},
	20000300446: {
		en: 'This counterparty can not be sender',
		ru: 'Этот контрагент не может быть отправителем',
		uk: 'Цей контрагент не може бути відправником',
	},
	20000200354: {
		en: 'Trays cannot be empty',
		ru: 'Трей не может быть пустым',
		uk: 'Трей не може бути порожнім',
	},
	20000200355: {
		en: 'Trays must be array',
		ru: 'Трей должен быть массивом',
		uk: 'Трей повинен бути масивом',
	},
	20000200356: {
		en: 'Type should be html or pdf',
		ru: 'Тип должен быть HTML или PDF',
		uk: 'Тип повинен бути HTML або PDF',
	},
	20000200357: {
		en: 'Type should be string',
		ru: 'Тип должен быть string',
		uk: 'Тип повинен бути string',
	},
	20000200358: {
		en: 'TypeName of TypeCompensationPB is empty',
		ru: 'TypeName из TypeCompensationPB пуст',
		uk: 'TypeName з TypeCompensationPB порожній',
	},
	20000200359: {
		en: 'TypeName of TypeCompensationPB is invalid',
		ru: 'TypeName из TypeCompensationPB недействителен',
		uk: 'TypeName з TypeCompensationPB недійсний',
	},
	20000200360: {
		en: 'TypeName of TypeCompensationPB must be empty',
		ru: 'TypeName из TypeCompensationPB должен быть пустым',
		uk: 'TypeName з TypeCompensationPB повинен бути порожнім',
	},
	20000200361: {
		en: 'Unable to deliver in this city on Saturday',
		ru: 'Невозможно доставить в этом городе в субботу',
		uk: 'Неможливо доставити в цьому місті в суботу',
	},
	20000200362: {
		en: 'ValuablePapers is too high',
		ru: 'ValuablePapers слишком длинная',
		uk: 'ValuablePapers занадто довга',
	},
	20000200363: {
		en: 'Value of TypeCompensationPB is empty',
		ru: 'Значение TypeCompensationPB пустое',
		uk: 'Значення TypeCompensationPB порожнє',
	},
	20000200364: {
		en: 'Value of TypeCompensationPB must be empty',
		ru: 'Значение TypeCompensationPB должно быть пустым',
		uk: 'Значення TypeCompensationPB має бути порожнім',
	},
	20000200365: {
		en: 'VolumeGeneral is invalid',
		ru: 'VolumeGeneral недействителен',
		uk: 'VolumeGeneral недійсний',
	},
	20000200366: {
		en: 'VolumeGeneral is too high',
		ru: 'VolumeGeneral слишком длинное',
		uk: 'VolumeGeneral задовге',
	},
	20000200367: {
		en: 'VolumeGeneral must be empty',
		ru: 'VolumeGeneral должен быть пустым',
		uk: 'VolumeGeneral повинен бути порожнім',
	},
	20000200368: {
		en: 'VolumeWeight is empty',
		ru: 'VolumeWeight пуст',
		uk: 'VolumeWeight порожній',
	},
	20000200369: {
		en: 'VolumeWeight is invalid',
		ru: 'VolumeWeight недействителен',
		uk: 'VolumeWeight недійсний',
	},
	20000200370: {
		en: 'VolumeWeight is too high',
		ru: 'VolumeWeight слишком длинный',
		uk: 'VolumeWeight занадто довгий',
	},
	20000200371: {
		en: 'VolumeWeight must be empty',
		ru: 'VolumeWeight должен быть пустым',
		uk: 'VolumeWeight повинен бути порожнім',
	},
	20000400503: {
		en: 'Weight is empty',
		ru: 'Вес не указан',
		uk: 'Вага не вказано',
	},
	20000200373: {
		en: 'Weight is invalid',
		ru: 'Вес указан некоректно',
		uk: 'Вага вказана некоректно',
	},
	20000200374: {
		en: 'Weight is low for documents',
		ru: 'Вес меньше минимального для типа груза документы',
		uk: 'Вага менше мінімального для типу вантажу документи',
	},
	20000200375: {
		en: 'Weight is too high',
		ru: 'Вес слишком большой',
		uk: 'Вага занадто велика',
	},
	20000200376: {
		en: 'Weight is too high for documents',
		ru: 'Вес слишком большой для типа документы',
		uk: 'Вага занадто велика для типу документи',
	},
	20000200377: {
		en: 'Weight is too high for floors lifting',
		ru: 'Вес слишком большой для услуги подъема на этаж',
		uk: 'Вага занадто велика для послуги підйому на поверх',
	},
	20000200378: {
		en: 'Weight is too high for sunday delivery',
		ru: 'Вес слишком большой для воскресной доставки',
		uk: 'Вага занадто велика для недільної доставки',
	},
	20000200379: {
		en: 'Weight is too high for the descent from floor',
		ru: 'Вес слишком большой для услуги спуска с этажа',
		uk: 'Вага занадто велика для послуги спуску з поверху',
	},
	20000200380: {
		en: 'Weight is too high for this postomat',
		ru: 'Вес слишком велика для этого почтомата',
		uk: 'Вага занадто велика для цього почтомата',
	},
	20000200381: {
		en: 'WeightFrom cannot be less then WeightTo',
		ru: 'WeightFrom не может быть меньше WeightTo',
		uk: 'Weight From не може бути менше Weight',
	},
	20000200382: {
		en: 'WeightFrom is invalid',
		ru: 'WeightFrom недействителен',
		uk: 'WeightFrom недійсний',
	},
	20000200383: {
		en: 'WeightFrom is too high',
		ru: 'WeightFrom слишком длинный',
		uk: 'WeightFrom занадто довгий',
	},
	20000200384: {
		en: 'WeightTo is invalid',
		ru: 'WeightTo недействителен',
		uk: 'Weight To недійсний',
	},
	20000200385: {
		en: 'WeightTo is too high',
		ru: 'WeightTo слишком длинный',
		uk: 'Weight To занадто довгий',
	},
	20000400505: {
		en: 'Width is empty',
		ru: 'Вес не указан',
		uk: 'Вага не вказана',
	},
	20000200387: {
		en: 'Width is too high',
		ru: 'Вес слишком длинный',
		uk: 'Вага занадто довгий',
	},
	20000200388: {
		en: 'Width is too high for InPost',
		ru: 'Вес слишком большой для почтомата InPost',
		uk: 'Вага занадто велика для поштомата InPost',
	},
	20000200389: {
		en: 'Width is too high for PostomatNP',
		ru: 'Вес слишком большой для почтомата PostomatNP',
		uk: 'Вага занадто велика для почтомата PostomatNP',
	},
	20000200390: {
		en: 'You can not choose CostWaybillWithStamp and CostWaybillWithoutStamp',
		ru: 'Вы не можете выбрать CostWaybillWithStamp и CostWaybillWithoutStamp',
		uk: 'Ви не можете обрати CostWaybillWithStamp і CostWaybillWithoutStamp',
	},
	20000200391: {
		en: 'ZipCode match 2 or more cities',
		ru: 'ZipCode совпал в 2х или более городах',
		uk: 'ZipCode збігся в 2х або більше містах',
	},
	20000200392: {
		en: 'ZipCode not found',
		ru: 'ZipCode не найден',
		uk: 'ZipCode не знайдено',
	},
	20000200393: {
		en: 'ZipCode related object missed',
		ru: 'ZipCode связанный объект пропущен',
		uk: "ZipCode пов'язаний об'єкт пропущений",
	},
	20000300394: {
		en: 'access denied',
		ru: 'Доступ закрыт',
		uk: 'Доступ заборонено',
	},
	20000300395: {
		en: 'AdditionalServiceOrder not found',
		ru: 'AdditionalServiceOrder не найден',
		uk: 'AdditionalServiceOrder не найден',
	},
	20000300396: {
		en: 'AdditionalServiceOrder not found by owner',
		ru: 'AdditionalServiceOrder не найдено владельцем',
		uk: 'AdditionalServiceOrder, не знайдено власником',
	},
	20000300417: {
		en: 'DocumentRef is empty',
		ru: 'DocumentRef пуст',
		uk: 'DocumentRef порожній',
	},
	20000300418: {
		en: 'DocumentRef is invalid',
		ru: 'DocumentRef недействителен',
		uk: 'DocumentRef недійсний',
	},
	20000300420: {
		en: 'Number is undefined',
		ru: 'Номер не определен',
		uk: 'Номер не визначений',
	},
	20000300422: {
		en: 'OrderEditEWData is unavailable',
		ru: 'OrderEditEWData недоступен',
		uk: 'OrderEditEWData недоступний',
	},
	20000300424: {
		en: 'OwnerDocumentNumber is undefined',
		ru: 'OwnerDocumentNumber не определен',
		uk: 'OwnerDocumentNumber не визначений',
	},
	20000300439: {
		en: 'Sender does not exists',
		ru: 'Отправитель не существует',
		uk: 'Відправник не існує',
	},
	20000400447: {
		en: 'AddressComment is empty',
		ru: 'AddressComment пуст',
		uk: 'AddressCommentis порожній',
	},
	20000400448: {
		en: 'AddressComment is incorrect',
		ru: 'AddressComment указан неверно',
		uk: 'AddressCommentis вказано невірно',
	},
	20000400449: {
		en: 'City is invalid',
		ru: 'Город указан неверно',
		uk: 'Місто вказано невірно',
	},
	20000400450: {
		en: 'ClientType is empty',
		ru: 'ClientType не выбран',
		uk: 'ClientType не обрано',
	},
	20000400451: {
		en: 'Consolidate order not created',
		ru: 'Консолидированный заказ не создан',
		uk: 'Консолідоване замовлення не створено',
	},
	20000400452: {
		en: 'Cost is empty',
		ru: 'Стоимость не указана',
		uk: 'Вартість не вказана',
	},
	20000400453: {
		en: 'Cost is incorrect',
		ru: 'Стоимость указана некорректно',
		uk: 'Вартість вказана некоректно',
	},
	20000400454: {
		en: 'Counterparty not found',
		ru: 'Контрагент не найден',
		uk: 'Контрагента не знайденно',
	},
	20000100521: {
		en: 'Email is empty',
		ru: 'Электронная почта не указана',
		uk: 'Електронна пошта не вказана',
	},
	20000400458: {
		en: 'FindByString is incorrect',
		ru: 'FindByString указан некорректно',
		uk: 'FindByString вказано невірно',
	},
	20000400459: {
		en: 'GroupId is incorrect',
		ru: 'GroupID указан некорректно',
		uk: 'GroupID вказано невірно',
	},
	20000400461: {
		en: 'Height is not specified',
		ru: 'Высота не указана',
		uk: 'Висота не вказана',
	},
	20000400462: {
		en: 'InternetDocumentBarcode is incorrect',
		ru: 'InternetDocumentBarcode указан некорректно',
		uk: 'InternetDocumentBarcode вказано некоректно',
	},
	20000400463: {
		en: 'InvoiceNumber contains more than 14 digits',
		ru: 'InvoiceNumber содержит более 14 цифр',
		uk: 'InternetDocumentBarcode вказано некоректно',
	},
	20000400465: {
		en: 'Length is not specified',
		ru: 'Длина не указана',
		uk: 'Довжина не вказана',
	},
	20000400466: {
		en: 'LoyaltyCard contains more than 14 digits',
		ru: 'Карта лояльности содержит более 14 цифр',
		uk: 'Карта лояльності містить більше 14 цифр',
	},
	20000400467: {
		en: 'Mail error',
		ru: 'Ошибка почты',
		uk: 'Помилка пошти',
	},
	20000400468: {
		en: 'Message is empty',
		ru: 'Сообщение отсутствует',
		uk: 'Повідомлення відсутє',
	},
	20000400469: {
		en: 'Name is empty',
		ru: 'Имя не указано',
		uk: "Ім'я не вказано",
	},
	20000400470: {
		en: 'Network error',
		ru: 'Ошибка сети',
		uk: 'Помилка мережі',
	},
	20000400471: {
		en: 'Not valid email',
		ru: 'Адрес электронной почты не прошел валидацию',
		uk: 'Адреса електронної пошти не пройшла валідацію',
	},
	20000400472: {
		en: 'OrganizationName is empty',
		ru: 'OrganizationName не указано',
		uk: 'OrganizationName не вказано',
	},
	20000400473: {
		en: 'OrganizationName max length is 100',
		ru: 'OrganizationName максимальная длина составляет 100 символов',
		uk: 'OrganizationName максимальна довжина становить 100 символів',
	},
	20000400476: {
		en: 'PhoneNumber is empty',
		ru: 'Номер телефона не указан',
		uk: 'Номер телефону не вказано',
	},
	20000400477: {
		en: 'PhoneNumber must contain 10 digits',
		ru: 'Номер телефона должен содержать 10 цифр',
		uk: 'Номер телефону повинен містити 10 цифр',
	},
	20000400478: {
		en: 'PhoneOrEmail is empty',
		ru: 'Телефон или Имейл не указан',
		uk: 'Телефон або Імейл не вказано',
	},
	20000400479: {
		en: 'QueryTime is invalid',
		ru: 'QueryTime недействителен',
		uk: 'QueryTime недійсний',
	},
	20000400480: {
		en: 'Ref is incorrect',
		ru: 'Ref некорректен',
		uk: 'Ref некоректний',
	},
	20000400481: {
		en: 'Referer is empty',
		ru: 'Referer пуст',
		uk: 'Referer порожній',
	},
	20000400482: {
		en: 'SeatsAmount is empty',
		ru: 'Количество мест не указано',
		uk: 'Кількість місць не вказано',
	},
	20000400483: {
		en: 'SeatsAmount is incorrect',
		ru: 'Количество мест указано некорректно',
		uk: 'Кількість місць вказано некоректно',
	},
	20000400484: {
		en: 'SenderAddressDescription is empty',
		ru: 'SenderAddressDescription не указан',
		uk: 'SenderAddressDescriptionis не вказано',
	},
	20000400485: {
		en: 'SenderAddressDescription is incorrect',
		ru: 'SenderAddressDescription указан неверно',
		uk: 'SenderAddressDescriptionis вказано некоректно',
	},
	20000400486: {
		en: 'SenderBuildingRef is incorrect',
		ru: 'SenderBuildingRef указан некорректно',
		uk: 'SenderAddressDescriptionis вказано некоректно',
	},
	20000400487: {
		en: 'SenderBuildingSiteKey is incorrect',
		ru: 'SenderBuildingSiteKey указан некорректно',
		uk: 'SenderBuildingSiteKey вказано некоректно',
	},
	20000400488: {
		en: 'SenderCityRef is empty',
		ru: 'Ref города отправителя не указан',
		uk: 'Ref міста відправника не вказано',
	},
	20000400489: {
		en: 'SenderCityRef is incorrect',
		ru: 'Ref города отправителя указан некорректно',
		uk: 'Ref міста відправника вказано некоректно',
	},
	20000400490: {
		en: 'SenderCitySiteKey is incorrect',
		ru: 'SenderCitySiteKey указан некорректно',
		uk: 'SenderCitySiteKey вказано некоректно',
	},
	20000400491: {
		en: 'SenderContactPersonDescription is empty',
		ru: 'SenderContactPersonDescription не указан',
		uk: 'SenderContactPersonDescriptionis не вказано',
	},
	20000400492: {
		en: 'SenderContactPersonDescription is incorrect',
		ru: 'SenderContactPersonDescription указан некорректно',
		uk: 'SenderContactPersonDescriptionis вказано некоректно>',
	},
	20000400493: {
		en: 'SenderHouse is empty',
		ru: 'SenderHouse не указан',
		uk: 'SenderHouseis не вказано',
	},
	20000400494: {
		en: 'SenderHouse is incorrect',
		ru: 'SenderHouse указан некорректно',
		uk: 'SenderHouseis вказано некоректно>',
	},
	20000400495: {
		en: 'SenderStreetRef is incorrect',
		ru: 'SenderStreetRef указан некорректно',
		uk: 'SenderStreetRef вказано некоректно',
	},
	20000400496: {
		en: 'SenderStreetSiteKey is incorrect',
		ru: 'SenderStreetSiteKey указан некорректно',
		uk: 'SenderStreetSiteKey вказано некоректно',
	},
	20000400497: {
		en: 'StateId is incorrect',
		ru: 'StateId указан некорректно',
		uk: 'StateId вказано некоректно',
	},
	20000400498: {
		en: 'StateName is incorrect',
		ru: 'StateName указан некорректно',
		uk: 'StateName вказано некоректно',
	},
	20000400499: {
		en: 'Subject is empty',
		ru: 'Тема не указана',
		uk: 'Тема не вказана',
	},
	20000400500: {
		en: 'Type is empty',
		ru: 'Тип не указан',
		uk: 'Тип не вказано',
	},
	20000400501: {
		en: 'TypeOfPacking is not specified',
		ru: 'Тип упаковки не указан',
		uk: 'Тип упаковки не вказано',
	},
	20000400502: {
		en: 'TypeProblem is empty',
		ru: 'TypeProblem не указан',
		uk: 'TypeProblem не вказано',
	},
	20000400504: {
		en: 'Weight is incorrect',
		ru: 'Вес указан некорректно',
		uk: 'Вага вказана некоректно',
	},
	20000400506: {
		en: 'Width is not specified',
		ru: 'Вес не указан',
		uk: 'Вага не вказана',
	},
	20000100507: {
		en: 'APIKey of device is incorrect',
		ru: 'APIKey устройства некорректен',
		uk: 'APIKey пристрою некоректний',
	},
	20000100508: {
		en: 'Card is not specified',
		ru: 'Карта не определена',
		uk: 'Карта не визначенна',
	},
	20000100509: {
		en: 'Card not activated',
		ru: 'Карта не активирована',
		uk: 'Карта не активована',
	},
	20000100510: {
		en: 'CardCardNumber is empty or incorrect',
		ru: 'Номер карты пуст или некорректен',
		uk: 'Номер карти порожній або некоректний',
	},
	20000100511: {
		en: 'CardCardNumber is incorrect',
		ru: 'Номер карты некорректен',
		uk: 'Номер карти некоректний',
	},
	20000100512: {
		en: 'City is incorrect',
		ru: 'Город указан некорректно',
		uk: 'Місто вказано некоректно',
	},
	20000100513: {
		en: 'City is not specified',
		ru: 'Город не определен',
		uk: 'Місто не визначено',
	},
	20000100514: {
		en: 'Code is not specified',
		ru: 'Код не определен',
		uk: 'Код не визначений',
	},
	20000100515: {
		en: 'CounterpartyType is incorrect',
		ru: 'Тип контрагента указан некорректно',
		uk: 'Тип контрагента вказано некоректно',
	},
	20000100516: {
		en: 'CounterpartyType is not specified',
		ru: 'Тип контрагента не указан',
		uk: 'Тип контрагента не вказано',
	},
	20000100517: {
		en: 'Date incorrect',
		ru: 'Дата указана некорректно',
		uk: 'Дата вказана некоректно',
	},
	20000100518: {
		en: 'Date is too old',
		ru: 'Дата слишком старая',
		uk: 'Дата занадто стара',
	},
	20000100519: {
		en: 'Email and Phone are empty',
		ru: 'Электронная почта и телефон не указаны',
		uk: 'Електронна пошта і телефон не вказані',
	},
	20000100520: {
		en: 'Email invalid format',
		ru: 'Електронна почта неверный формат',
		uk: 'Електронна пошта невірний формат',
	},
	20000100522: {
		en: 'Email is incorrect',
		ru: 'Електронна почта указана некорректно',
		uk: 'Електронна пошта вказана некоректно',
	},
	20000100523: {
		en: 'Email is invalid',
		ru: 'Электронная почта недействительна',
		uk: 'Електронна пошта недійсна',
	},
	20000100524: {
		en: 'Email is not specified',
		ru: 'Электронная почта не указана',
		uk: 'Електронна пошта не вказана',
	},
	20000100525: {
		en: 'Email too long',
		ru: 'Электронная почта слишком длинная',
		uk: 'Електронна пошта занадто довга',
	},
	20000100526: {
		en: 'FirstName has invalid characters',
		ru: 'Имя содержит недопустимые символы',
		uk: "Ім'я містить неприпустимі символи",
	},
	20000100527: {
		en: 'FirstName is not specified',
		ru: 'Имя не указано',
		uk: "Ім'я не вказано",
	},
	20000100528: {
		en: 'FirstName too long',
		ru: 'Имя слишком длинное',
		uk: "Ім'я занадто довге",
	},
	20000100529: {
		en: 'Gender is incorrect',
		ru: 'Пол указан некорректно',
		uk: 'Стать вказана некоректно',
	},
	20000100530: {
		en: 'Incorrect month',
		ru: 'Некорректный месяц',
		uk: 'Некоректний місяць',
	},
	20000100531: {
		en: 'Incorrect year',
		ru: 'Некорректный год',
		uk: 'Некоректний рік',
	},
	20000100532: {
		en: 'LastName has invalid characters',
		ru: 'Фамилия содержит недопустимые символы',
		uk: 'Прізвище містить неприпустимі символи',
	},
	20000100533: {
		en: 'LastName is not specified',
		ru: 'Фамилия не указана',
		uk: 'Прізвище не вказано',
	},
	20000100534: {
		en: 'LastName too long',
		ru: 'Фамилия слишком длинная',
		uk: 'Прізвище занадто довге',
	},
	20000100535: {
		en: 'Login is empty',
		ru: 'Логин не указан',
		uk: 'Логін не вказано',
	},
	20000100536: {
		en: 'Login is empty or incorrect',
		ru: 'Логин пуст или указан неверно',
		uk: 'Логін порожній або вказаний невірно',
	},
	20000100537: {
		en: 'LoyaltyEmail and LoyaltyPhone are empty',
		ru: 'LoyaltyEmail и LoyaltyPhone не указаны',
		uk: 'LoyaltyEmail і LoyaltyPhone не вказані',
	},
	20000100538: {
		en: 'LoyaltyEmail is incorrect',
		ru: 'LoyaltyEmail указан неверно',
		uk: 'LoyaltyEmail вказано невірно',
	},
	20000100539: {
		en: 'LoyaltyPhone is incorrect',
		ru: 'LoyaltyPhone указан неверно',
		uk: 'LoyaltyPhone вказано невірно',
	},
	20000100540: {
		en: 'MarketplacePartnerToken is empty',
		ru: 'MarketplacePartnerToken не указан',
		uk: 'MarketplacePartnerToken не вказано',
	},
	20000100542: {
		en: 'Month incorrect',
		ru: 'Некорректный месяц',
		uk: 'Некоректний місяць',
	},
	20000100543: {
		en: 'Month is empty',
		ru: 'Месяц не указан',
		uk: 'Місяць не вказано',
	},
	20000100544: {
		en: 'Not loyalty user',
		ru: 'Нет пользователя лояльности',
		uk: 'Немає облікового запису лояльності',
	},
	20000100545: {
		en: 'Number is incorrect',
		ru: 'Число некорректно',
		uk: 'Число некоректно',
	},
	20000100546: {
		en: 'Password is empty',
		ru: 'Пароль не указан',
		uk: 'Пароль не вказано',
	},
	20000100547: {
		en: 'Password is incorrect',
		ru: 'Некорректный пароль',
		uk: 'Некоректний пароль',
	},
	20000100548: {
		en: 'Password is not specified',
		ru: 'Пароль не определен',
		uk: 'Пароль не визначений',
	},
	20000100549: {
		en: 'Patronymic has invalid characters',
		ru: 'Отчество содержит недопустимые символы',
		uk: 'По батькові містить неприпустимі символи',
	},
	20000100550: {
		en: 'Patronymic is not specified',
		ru: 'Отчество не определено',
		uk: 'Батькові не визначене',
	},
	20000100551: {
		en: 'Patronymic too long',
		ru: 'Отчество слишком длинное',
		uk: 'По батькові задовге',
	},
	20000100552: {
		en: 'Phone invalid format',
		ru: 'Неверный формат номера телефона',
		uk: 'Невірний формат номера телефону',
	},
	20000100553: {
		en: 'Phone is empty',
		ru: 'Телефон не указан',
		uk: 'Телефон не вказано',
	},
	20000100554: {
		en: 'Phone is incorrect',
		ru: 'Телефон указан некорректно',
		uk: 'Телефон вказано некоректно',
	},
	20000100555: {
		en: 'Phone is invalid',
		ru: 'Телефон недействителен',
		uk: 'Телефон недійсний',
	},
	20000100556: {
		en: 'Phone is not specified',
		ru: 'Телефон не указан',
		uk: 'Телефон не вказано',
	},
	20000100557: {
		en: 'User with this email already exists',
		ru: 'Пользователь с таким имейлом уже существует',
		uk: 'Користувач з цим E-mail вже існує',
	},
	20000100558: {
		en: 'User with this phone already exists',
		ru: 'Пользователь с таким номером телефона уже существует',
		uk: 'Користувач з цим телефоном вже існує',
	},
	20000100559: {
		en: 'VerificationCode is empty',
		ru: 'Код верификации не внесен',
		uk: 'Код верифікації не внесений',
	},
	20000100560: {
		en: 'Wrong Login',
		ru: 'Некорректный Логин',
		uk: 'Некоректний Логін',
	},
	20000100561: {
		en: 'Wrong Password',
		ru: 'Некорректный Пароль',
		uk: 'Некоректний Пароль',
	},
	20000100562: {
		en: 'Year incorrect',
		ru: 'Некорректный Год',
		uk: 'Некоректний Рік',
	},
	20000100563: {
		en: 'Year is empty',
		ru: 'Год не указан',
		uk: 'Рік не вказано',
	},
	20000200564: {
		en: 'There are only invalid DocumentBarcodes and/or DocumentRefs',
		ru: 'Есть только недействительные DocumentBarcodes и / или DocumentRefs',
		uk: 'Є тільки недійсні DocumentBarcodes і / або DocumentRefs',
	},
	20000200565: {
		en: 'DocumentBarcodes and/or DocumentRefs is not set',
		ru: 'DocumentBarcodes и / или DocumentRefs не установлен',
		uk: 'DocumentBarcodes і / або DocumentRefs не встановлено',
	},
	20000100566: {
		en: 'Unable to login. Please, complete the registration process',
		ru: 'Невозможно войти. Пожалуйста, завершите процесс регистрации. Подтвердите ваш E-mail, перейдя по ссылке из письма.',
		uk: 'Неможливо увійти. Будь ласка, завершіть процес реєстрації. Підтвердіть ваш E-mail, перейшовши за посиланням з листа.',
	},
	20000500624: {
		en: 'BuildingNumber is not specified',
		ru: 'Номер дома не указан',
		uk: 'Номер будинку не вказано',
	},
	20000500639: {
		en: 'StreetRef is not specified',
		ru: 'Идентификатор Ref улицы не указан',
		uk: 'Ідентифікатор Ref вулиці не вказано',
	},
	20000500640: {
		en: 'BuildingRef is not specified',
		ru: 'Идентификатор Ref Строения не указан',
		uk: 'Ідентифікатор Ref Будівлі не вказано',
	},
	20000800728: {
		en: 'CounterpartyRef is not specified',
		ru: 'Идентификатор Ref Контрагента не указан',
		uk: 'Ідентифікатор Ref Контрагента не вказано',
	},
	20000900763: {
		en: 'MiddleName has invalid characters',
		ru: 'Отчество содержит некорректные символы',
		uk: 'По батькові містить некоректні символи',
	},
	20000900764: {
		en: 'MiddleName too long',
		ru: 'Отчество слишком длинное',
		uk: 'По батькові занадто довге',
	},
	20000900762: {
		en: 'CompanyName too long',
		ru: 'Название компании слишком длинное. Максимальное количество символов 25',
		uk: 'Назва компанії занадто довга. Максимальна кількість символів 25',
	},
	20000900765: {
		en: 'MiddleName must be empty',
		ru: 'Отчество должно быть пустым',
		uk: 'По батькові має бути поронім',
	},
	20000200804: {
		en: 'CardPay unknown error',
		ru: 'При выполнении запроса возникла ошибка. Попробуйте позже.',
		uk: 'При виконанні запиту виникла помилка. Спробуйте пізніше.',
	},
	20000200833: {
		en: 'RecipientContactPersonAddress not found in internet address',
		ru: ' ',
		uk: 'Адреса отримувача не знайдена',
	},
	20000200850: {
		en: 'CardPay payed',
		ru: 'ЭН уже оплачена',
		uk: 'ЕН вже оплачена',
	},
	20000200852: {
		en: 'CardPay invalid ServiceType',
		ru: 'К сожалению, временно отсутствует возможность оплачивать ЕН, в которых тип услуги Адрес-Отделение или Адрес-Адрес.',
		uk: 'Нажаль, тимчасово відсутня можливість оплачувати ЕН, в котрих тип послуги Адреса-Відділення чи Адреса-Адреса.',
	},
	20001400980: {
		en: 'Unknown error',
		ru: 'Сервис временно недоступен',
		uk: 'Сервіс тимчасово недоступний',
	},
	20000100916: {
		en: 'Enter the Email that you used when registering',
		ru: 'Введите e-mail, который вы использовали при регистрации',
		uk: 'Введіть e-mail, який ви використовували при реєстрації',
	},
	30000100918: {
		en: 'SMS with activation code has been sent',
		ru: 'SMS с кодом активации отправлено',
		uk: 'SMS з кодом активації надіслано',
	},
	20001500982: {
		en: 'Error save Counterparty address for counterparty',
		ru: 'Невозможно сохранить адрес',
		uk: 'Неможливо зберегти адресу',
	},
	20001500983: {
		en: "This Contact persone doesn't has this address",
		ru: 'Адрес не принадлежит этому пользователю',
		uk: 'Адреса не належить цьому користувачу',
	},
	20001500985: {
		en: 'ContactPersonRef is incorrect',
		ru: 'Некорректно указан идентификатор контактного лица',
		uk: 'Некоректно вказано ідентифікатор контактної особи',
	},
	20001500986: {
		en: "You don't have this Contact person",
		ru: 'У вас нет этого контактного лица',
		uk: 'У вас немає цієї контактної особи',
	},
	20000101004: {
		en: 'Please, complete the email registration process',
		ru: 'Пожалуйста, завершите процесс регистрации. Подтвердите ваш E-mail, перейдя по ссылке из письма.',
		uk: 'Будь ласка, завершіть процес реєстрації. Підтвердіть ваш E-mail, перейшовши за посиланням з листа.',
	},
	20000301006: {
		en: 'No data changes. Document not saved',
		ru: 'Нет изменений данных. Документ не сохранен.',
		uk: 'Немає зміни даних. Документ не збережено',
	},
	20000101142: {
		en: 'String (FirstName LastName Patronymic) is too long',
		ru: 'ФИО слишком длинное',
		uk: 'ПІБ занадто довге',
	},
	20000201161: {
		en: 'Warehouse max allowed VolumeWeight: 30',
		ru: 'Максимально доступный вес на склале в VolumeWeight: 30',
		uk: 'Максимально доступна вага на складі в VolumeWeight: 30',
	},
	20000201173: {
		en: 'No document changed DeletionMark',
		ru: 'Изменений не внесено',
		uk: 'Змін не внесено',
	},
	20000101193: {
		en: 'User not found by loyalty card',
		ru: 'Для указанного номера телефона не зарегистрирован личный кабинет. Рекомендуем зарегистрировать на my.novaposhta.ua',
		uk: 'Для зазначеного номера телефону не зареєстрований особистий кабінет. Рекомендуємо зареєструвати на my.novaposhta.ua',
	},
	20000201204: {
		en: 'API key expired',
		ru: 'Срок действия API key истек',
		uk: 'Термін дії API key закінчився',
	},
	20000301244: {
		en: 'PayerType is incorrect',
		ru: 'Тип плательщика неверный',
		uk: 'Тип платника невірний',
	},
	20000301254: {
		en: 'Document does not belong to this user',
		ru: 'Вы не являетесь отправителем в данном документе',
		uk: 'Ви не є відправником в даному документі',
	},
	20000201387: {
		en: 'CardPay postomat disabled',
		ru: 'К сожалению, пока отсутствует возможность оплаты отправлений в поштомату',
		uk: 'Нажаль, поки відсутня можливість оплати відправлень до поштомату',
	},
	20000301408: {
		en: 'RecipientSettlementStreet is invalid',
		ru: 'Некорректно указан адрес получателя, выберите из списка',
		uk: 'Некоректно вказана адреса отримувача, виберіть зі списку',
	},
	20000101441: {
		en: 'Access to the mobile application for corporate clients is not available. Please use my.novaposhta.ua',
		ru: 'Доступ к мобильному приложению для корпоративных клиентов не доступен. Просим вас воспользоваться my.novaposhta.ua',
		uk: 'Доступ до мобільного додатку для корпоративних клієнтів не доступний. Просимо вас скористатися my.novaposhta.ua',
	},
	20000201473: {
		en: 'Backward Delivery money from address with payment card is not allowed',
		ru: 'Обратная доставка денежного перевода на карту доступна только для типа услуги Отделение-Отделение',
		uk: 'Зворотня доставка грошового переказу на картку доступна тільки для типу послуги Відділення-Відділення',
	},
	20000201486: {
		en: 'BackwardDelivery Money with PaymentCard is too high',
		ru: 'Превышен лимит возврата денег на карту. Допустимый лимит 14 999 гривен',
		uk: 'Перевищено ліміт повернення грошей на карту. Допустимий ліміт 14 999 гривень',
	},
	20001701494: {
		en: 'Method getCard is allowed for Loyalty user only!',
		ru: 'Данная услуга доступна только для участников программы лояльности "Збільшуй можливості"',
		uk: 'Дана послуга доступна лише для учасників програми лояльності "Збільшуй можливості"',
	},
	20000201502: {
		en: 'Warehouse max allowed weight: 10',
		ru: 'Максимальный вес на отделении: 10',
		uk: 'Максимальна вага на відділенні: 10',
	},
	20000201503: {
		en: 'Warehouse max allowed weight: 2',
		ru: 'Максимальный вес на отделении: 2',
		uk: 'Максимальна вага на відділенні: 2',
	},
	20000201504: {
		en: 'Warehouse max allowed weight: 30',
		ru: 'Максимальный вес на отделении: 10',
		uk: 'Максимальна вага на відділенні: 30',
	},
	20000201505: {
		en: 'Warehouse max allowed weight: 5',
		ru: 'Максимальный вес на отделении: 10',
		uk: 'Максимальна вага на відділенні: 10',
	},
	20001701514: {
		en: 'CardDescription is invalid',
		ru: 'Недопустимые символы в описании карты',
		uk: 'Неприпустимі символи в описі карти',
	},
	20000401537: {
		en: 'No First Names found',
		ru: 'Имя введено некорректно',
		uk: "Ім'я введено некоректно",
	},
	20000401538: {
		en: 'No Middle Names found',
		ru: 'Отчество введено некорректно',
		uk: 'По-батькові введено некоректно',
	},
	20000401571: {
		en: 'You are using the old version of the query',
		ru: 'Обновите приложение до последней доступной версии.',
		uk: 'Оновіть додаток до останньої доступної версії.',
	},
	20000201572: {
		en: "Sender's contact person is not full! You must specify the Sender completely. This contact person will receive a money transfer.",
		ru: 'Контактное лицо отправителя заполнено не полностью. Необходимо обратиться в службу поддержки.',
		uk: 'Контактна особа відправника заповнена не повністю. Необхідно звернутися в службу підтримки.',
	},
	20000301574: {
		en: 'Order redirecting is not available',
		ru: 'Не соответствует условиям оплаты.',
		uk: 'Не відповідає умовам оплати.',
	},
	20000101577: {
		en: 'Exhausted the number of login attempts',
		ru: 'Исчерпаны все попытки ввода кода подтверждения',
		uk: 'Вичерпані всі спроби введення коду підтвердження',
	},
	20000101578: {
		en: 'Wrong SMS verifycation',
		ru: 'Неверный код подтверждения',
		uk: 'Невірний код підтвердження',
	},
	20000101581: {
		en: 'Card is not activate',
		ru: 'Необходимо указать другой тел. или сделать авторизацию с использованием указанного номера телефона',
		uk: 'Необхідно вказати інший тел. або виконати авторизацію з використанням вказаного номера телефона',
	},
	20000101583: {
		en: 'Phone exists',
		ru: 'Номер телефону закріплений за іншим користувачем',
		uk: 'Номер телефона закреплён за другим пользователем',
	},
	20000101584: {
		en: 'Update denied',
		ru: 'Редактирование данных запрещено до момента получения всех отправлений',
		uk: 'Редагування даних заборонено до моменту отримання всіх відправлень',
	},
	20000201585: {
		en: 'Payment not available by recipient',
		ru: 'Оплата за наличные недоступна для получателя',
		uk: 'Оплата за готівку не доступна для отримувача',
	},
	20000201587: {
		en: 'Payment not available by recipient to Doors',
		ru: 'Оплата наличными для получателя запрещена, на адресной доставке',
		uk: 'Оплата готівкою для отримувача заборонена, на адресній доставці',
	},
	20000201588: {
		en: 'Payment not available by sender',
		ru: 'Оплата не доступна для отправителя',
		uk: 'Оплата недоступна для відправника',
	},
	20000201589: {
		en: 'Payment not available by sender to Doors',
		ru: 'Оплата наличными для отправителя запрещена, на адресной доставке',
		uk: 'Оплата готівкою для відправника заборонена, на адресній доставці',
	},
	20000201590: {
		en: 'AfterpaymentOnGoodsCost is only for WarehouseWarehouse',
		ru: 'Услуга Контроль оплаты доступна лишь для Отделение-Отделение',
		uk: 'Послуга Контроль оплати доступна лише для Відділення-Відділення',
	},
	20000201591: {
		en: 'BackwardDelivery PayerType for DoorsDoors cannot be Recipient',
		ru: 'Получатель не может быть плательщиком при адресной доставке Двери-Двери',
		uk: 'Отримувач не може бути платником при зворотній доставці Двері-Двері',
	},
	20000201592: {
		en: 'BackwardDelivery PayerType for WarehouseDoors cannot be Recipient',
		ru: 'Получатель не может быть плательщиком при обратной доставке Отделение-Двери',
		uk: 'Отримувач не може бути платником при зворотній доставці Відділення-Двері',
	},
	20000201593: {
		en: 'BackwardDelivery PayerType for DoorsDoors cannot be Sender by Cash',
		ru: 'Обратная доставка Двери-Двери, невозможна за наличные',
		uk: 'Зворотня доставка Двері-Двері, неможлива за готівку',
	},
	20000201594: {
		en: 'BackwardDelivery PayerType for DoorsWarehouse cannot be Sender by Cash',
		ru: 'Обратная доставка Двери-Отделение невозможна за наличные',
		uk: 'Зворотня доставка Двері-Відділення, неможлива за готівку',
	},
	20000201595: {
		en: 'Order redirecting to doors with cash payment method is not available',
		ru: 'Переадресация посылки на адрес временно недоступна. Приносим извинения за неудобства',
		uk: 'Переадресування посилки на адресу тимчасово недоступне. Просимо вибачення за незручності',
	},
	20000201598: {
		en: 'Recipient contact name is not full',
		ru: 'ФИО получателя не заполнено не полностью',
		uk: 'ПІБ одержувача не заповнено в повному обсязі',
	},
	20000201640: {
		en: 'MoneyTransfer is unavailable',
		ru: 'Заказ услуги денежный перевод недоступно.',
		uk: 'Замовлення послуги грошовий переказ недоступно.',
	},
	20000101694: {
		en: 'Login or Password is incorrect',
		ru: ' ',
		uk: ' ',
	},
	20000101695: {
		en: 'No params passed',
		ru: 'Параметры не указаны',
		uk: 'Параметри не встановлені',
	},
	20000101696: {
		en: 'Limit of attempts is reached',
		ru: 'Превышен лимит запросов',
		uk: 'Перевищено ліміт запитів',
	},
	20000101697: {
		en: 'Phone or Email must be set like Login',
		ru: 'Проверьте, пожалуйста, правильность ввода логина или пароля',
		uk: 'Перевірте, будь ласка, правильність введення логіна або паролю',
	},
	20000101698: {
		en: 'MiddleName is not specified',
		ru: 'Отчество не указано',
		uk: 'По батькові не вказано',
	},
	20000101699: {
		en: 'String (FirstName LastName MiddleName) is too long',
		ru: 'Значение Имя и Отчество слишком длинное',
		uk: "Значення Ім'я та По батькові занадто довге",
	},
	40000101701: {
		en: 'SMS with restore code has been sent',
		ru: 'Вам отправлено SMS с кодом восстановления',
		uk: 'Вам надіслано SMS з кодом відновлення',
	},
	20000301727: {
		en: 'Redirect Contact Sender contains repeated words',
		ru: 'Переадресация. ФИО Отправителя содержит повторяющиеся слова',
		uk: 'Переадресація. ПІБ Відправника містить повторювані слова',
	},
	20000301735: {
		en: 'Redirect RecipientContactName contains repeated words',
		ru: 'Переадресация. ФИО Отримувача содержит повторяющиеся слова',
		uk: 'Переадресація. ПІБ Получателя містить повторювані слова',
	},
	20000201746: {
		en: 'Contact Sender contains repeated words',
		ru: 'ФИО Отправителя содержит повторяющиеся слова',
		uk: 'ПІБ Відправника містить повторювані слова',
	},
	20000201758: {
		en: 'RecipientContactName contains repeated words',
		ru: 'ФИО содержит повторяющиеся слова',
		uk: 'ПІБ містить повторювані слова',
	},
	20000201765: {
		en: 'Contact Recipient contains repeated words',
		ru: 'ФИО получателя содержит повторяющиеся слова',
		uk: 'ПІБ Отримувача містить повторювані слова',
	},
	20000201772: {
		en: 'ContactSender From Warehouse must be full',
		ru: 'ПІБ Відправника заповнено не повністю',
		uk: 'ФИО Отправителя заполнено не полностью',
	},
	20000201773: {
		en: 'ContactSender To Doors must be full',
		ru: 'ФИО Отправителя заполнено не полностью',
		uk: 'ПІБ Відправника заповнено не повністю',
	},
	20000201774: {
		en: 'ContactRecipient To Doors must be full',
		ru: 'ФИО Получателя заполнено не полностью',
		uk: 'ПІБ Отримувача заповнено не повністю',
	},
	20000201776: {
		en: 'ContactSender for Afterpayment must be full',
		ru: 'ФИО Отправителя заполнено не полностью',
		uk: 'ПІБ Відправника заповнено не повністю',
	},
	20000201777: {
		en: 'ContactRecipient for Afterpayment must be full',
		ru: 'ФИО Получателя заполнено не полностью',
		uk: 'ПІБ Отримувача заповнено не повністю',
	},
	20000201784: {
		en: 'ContactSender for money transfer must be full',
		ru: 'ФИО Отправителя заполнено не полностью',
		uk: 'ПІБ Відправника заповнено не повністю',
	},
	20000201785: {
		en: 'ContactRecipient for money transfer to doors must be full',
		ru: 'ФИО Получателя заполнено не полностью',
		uk: 'ПІБ Отримувача заповнено не повністю',
	},
	20000201794: {
		en: 'BackwardDeliveryMoney to payment card is temporary blocked',
		ru: 'Обратная доставка денег на карту, временно заблокирована',
		uk: 'Зворотня доставка грошей на карту, тимчасово заблокована',
	},
	20001701795: {
		en: 'Service temporarily unavailable',
		ru: 'Сервис временно не работает',
		uk: 'Сервіс тимчасово не працює',
	},
	20000201797: {
		en: 'RecipientAddress temporary unavailable',
		ru: 'Внимание! Почтоматы ПриватБанка больше не доступны для получения. Пожалуйста, выберите отделение или почтомат Нова Пошта.',
		uk: 'Увага! Поштомати ПриватБанку більше не доступні для отримання. Будь ласка, оберіть відділення чи поштомат Нової Пошти.',
	},
	20000101799: {
		en: 'Use the card number to restore access',
		ru: 'На данный номер телефона зарегистрировано несколько карт клиента. Пожалуйста, обратитесь в колл-центр, чтобы удалить лишнюю: 0-800-500-609',
		uk: 'На даний номер телефону зареєстровано декілька карток клієнта. Будь ласка, зверніться до колл-центру, щоб видалити зайву: 0-800-500-609',
	},
	20000101826: {
		en: 'Unclosed documents found',
		ru: 'Обновления запрещено. Найдены не полученные посылки',
		uk: 'Оновлення заборонено. Знайдено не отримані посилки.',
	},
	20000101833: {
		en: 'MiddleName is empty',
		ru: 'Отчество не указано',
		uk: 'По батькові не вказано',
	},
	20000101834: {
		en: 'MiddleName is incorrect',
		ru: 'Отчество указано некорректно',
		uk: 'По батькові вказано некоректно',
	},
	20000301852: {
		en: 'Specify a new shipping address',
		ru: 'Укажите новый адрес доставки',
		uk: 'Вкажіть нову адресу доставки',
	},
	20000101900: {
		en: 'Exhausted the number of sent Sms. Use code from sms or try later.',
		ru: 'Вы исчерпали свой лимит SMS в день. Используйте один из кодов направленных ранее.',
		uk: 'Ви вичерпали свій ліміт SMS за день. Використовуйте один із кодів направлених раніше.',
	},
	20000101943: {
		en: 'Incorrect login or password',
		ru: 'Некорректный логин или пароль',
		uk: 'Некоректний логін або пароль',
	},
	20000201985: {
		en: 'Error occured',
		ru: 'Ошибка отправки',
		uk: 'Помилка відправлення',
	},
	20000202003: {
		en: 'RedBoxBarcode is incorrect',
		ru: 'Штрих-код redBOX невалидный',
		uk: 'Штрих-код redBOX не валідний',
	},
	20000202005: {
		en: 'RedBoxBarcode not found',
		ru: 'Штрих-код не найден',
		uk: 'Штрих-код не знайдено',
	},
	20000202006: {
		en: 'RedBoxBarcode expired',
		ru: ' ',
		uk: ' ',
	},
	20000202007: {
		en: 'RedBox not found by Barcode',
		ru: 'Штрих-код не найден',
		uk: 'Штрих-код не знайдено',
	},
	20002202036: {
		en: 'This phone number has no favourite warehouse',
		ru: 'У пользователя с таким номером телефона нет любимых отделений',
		uk: 'У користувача з таким номером телефону немає улюблених відділень',
	},
	20002202037: {
		en: "This phone doesn't has favorite warehouse",
		ru: 'У пользователя с таким номером телефона нет любимых отделений',
		uk: 'У користувача з таким номером телефону немає улюблених відділень',
	},
	20000302040: {
		en: 'Мобільний номер відправника блокувався протягом останніх 7-ми днів. З метою застереження шахрайства, для оформлення переадресації зі зміною даних в ЕН, зверніться, будь ласка, до відділення з документом, що посвідчує Вашу особу.',
		ru: 'Мобильный номер отправителя блокировался в течение последних 7-ми дней. С целью предостережения мошенничества, для оформления переадресации с изменением данных в ЕН, обратитесь, пожалуйста, в отделение с документом, удостоверяющим Вашу личность.',
		uk: 'Мобільний номер відправника блокувався протягом останніх 7-ми днів. З метою застереження шахрайства, для оформлення переадресації зі зміною даних в ЕН, зверніться, будь ласка, до відділення з документом, що посвідчує Вашу особу.',
	},
	20000202467: {
		en: 'OptionsSeat volumetricWeight exceeds Packing parameters;',
		ru: 'Параметры Вашего отправления не соответствуют упаковке',
		uk: 'Параметри Вашого відправлення не відповідають пакуванню',
	},
	30000202591: {
		en: 'Warehouse Type does not have pack',
		ru: 'Заказ упаковки онлайн - доступен только на почтовых отделений.',
		uk: 'Замовлення пакування онлайн - доступне лише на поштових відділень.',
	},
	20000202582: {
		en: 'Packing available from warehouse',
		ru: 'Заказ упаковки онлайн - доступен только на почтовых отделений',
		uk: 'Замовлення пакування онлайн - доступне лише на поштових відділень',
	},
	20000202583: {
		en: 'Packing available to PayerType Sender',
		ru: 'Услуга доступна только при условии оплаты за доставку отправителем.',
		uk: 'Послуга доступна лише за умови оплати за доставку відправником.',
	},
	20000202585: {
		en: 'OptionsSeat volumetricWeight exceeds Packing parameters',
		ru: 'Параметри Вашого відправлення не відповідають пакуванню',
		uk: 'Параметры Вашего отправления не соответствуют упаковке',
	},
	20002302596: {
		en: 'Contract already exists',
		ru: 'Контракт уже существует',
		uk: 'Контракт вже існує',
	},
	20000102597: {
		en: 'Authorization failed. Minutes to the next authorization attempt: 1',
		ru: 'Ошибка авторизации. Минут до следующей попытки авторизации: 1',
		uk: 'Помилка авторизації. Хвилин до наступної спроби авторизації: 1',
	},
	20000102598: {
		en: 'Authorization failed. Minutes to the next authorization attempt: 15',
		ru: 'Ошибка авторизации. Минут до следующей попытки авторизации: 15',
		uk: 'Помилка авторизації. Хвилин до наступної спроби авторизації: 15',
	},
};

export default ERRORS;
