# Тестовое задание DevOps

Вам будет предоставлен исходный код 2-х сервисов:
- Frontend (SPA)
- Backend (API)

В совокупности представляют собой WEB-приложение

## Особенности каждого сервиса

Оба сервиса написаны на TypeScript, WEB-приложению более 5-ти лет.

**ВНИМАНИЕ !**

Оба сервиса используют NodeJS v12 для этого есть соответствующий файл .nvmrc в каждом сервисе.

Backend использует MongoDb и предварительная инициализация данных не нужна. Так же при выполнении задания можно не учитывать PV.

### Backend (API)

- Backend использует в качестве БД MongoDb (версия не важна, можно взять последнюю)
- Все маршруты к endpoint API начинаются с /
- Для production режима необходимо выполнить сборку в JavaScript, результат сборки будет в директории dist/
- Конфигурация для production находится в директории src/environment/environment.prod.ts но при сборке автоматически файл не используется
- Backend использует WebSocket, а именно библиотеку socket.io соответственно путь к ее подключению имеет endpoint /socket.io/

### Frontend (SPA)

- Frontend при сборке в production режиме сам подставляет конфигурационный файл src/environment/environment.prod.ts автоматически
- Все маршруты к endpoint начинаются с /
- Frontend подключается к Backend по WebSocket используя библиотеку socket.io
- Сервис является SPA соответственно все запросы на Frontend в том числе ошибки 404 должны быть им отрисованны
- Для production режима необходимо выполнить сборку в JavaScript, результат сборки будет в директории dist/questionnaire-backend/

## Результат сдачи работы

1. Докеризировать сервисы
2. Опубликовать в любом Docker Registry в случае если он "закрытый" предоставить манифест для секрета в kubernetes
3. Разработать манифесты для kubernetes в том числе Ingress
4. Передать манифесты WEB-приложения которые запустят все сервисы, для примера запуск в minikube
5. Проверяющий применяет манифесты в minikube возьмем условно домен `questionnaire.local` прописанный в `hosts`
6. Открывает в браузере + инкогнито несколько экземпляров и проверяет работу WEB-приложения
7. Все компоненты WEB-приложения должны работать корректно.


## Tree directory

root@oleg-virtual-machine:~/testovoe/questionnaire/questionnaire# tree
.
├── docker-compose.yml
├── mongodb_data
│   ├── collection-0-4428348890181267764.wt
│   ├── collection-0-8390592087348234706.wt
│   ├── collection-2-8390592087348234706.wt
│   ├── collection-4-8390592087348234706.wt
│   ├── collection-7-8390592087348234706.wt
│   ├── diagnostic.data
│   │   ├── metrics.2024-11-13T14-33-11Z-00000
│   │   ├── metrics.2024-11-13T14-33-13Z-00000
│   │   ├── metrics.2024-11-14T07-34-52Z-00000
│   │   ├── metrics.2024-11-14T08-43-55Z-00000
│   │   └── metrics.interim
│   ├── index-1-4428348890181267764.wt
│   ├── index-1-8390592087348234706.wt
│   ├── index-3-8390592087348234706.wt
│   ├── index-5-8390592087348234706.wt
│   ├── index-6-8390592087348234706.wt
│   ├── index-8-8390592087348234706.wt
│   ├── index-9-8390592087348234706.wt
│   ├── journal
│   │   ├── WiredTigerLog.0000000004
│   │   └── WiredTigerPreplog.0000000001
│   ├── _mdb_catalog.wt
│   ├── mongod.lock
│   ├── sizeStorer.wt
│   ├── storage.bson
│   ├── WiredTiger
│   ├── WiredTigerHS.wt
│   ├── WiredTiger.lock
│   ├── WiredTiger.turtle
│   └── WiredTiger.wt
├── questionnaire-backend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── index.ts
│   │   ├── libs
│   │   │   └── db.ts
│   │   ├── middleware
│   │   │   ├── cors.ts
│   │   │   └── httpError.ts
│   │   ├── models
│   │   │   ├── answer.ts
│   │   │   └── question.ts
│   │   ├── routes
│   │   │   ├── index.ts
│   │   │   └── question.ts
│   │   ├── socket.ts
│   │   └── types
│   │       └── express
│   │           └── index.d.ts
│   └── tsconfig.json
├── questionnaire-frontend
│   ├── angular.json
│   ├── Dockerfile
│   ├── e2e
│   │   ├── protractor.conf.js
│   │   ├── src
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── app.po.ts
│   │   └── tsconfig.e2e.json
│   ├── nginx.conf
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── alert
│   │   │   │   ├── alert.component.html
│   │   │   │   ├── alert.component.scss
│   │   │   │   ├── alert.component.spec.ts
│   │   │   │   ├── alert.component.ts
│   │   │   │   ├── alert.service.spec.ts
│   │   │   │   └── alert.service.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── error.interceptor.ts
│   │   │   ├── home
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.service.spec.ts
│   │   │   │   └── home.service.ts
│   │   │   ├── internal-server-error
│   │   │   │   ├── internal-server-error.component.html
│   │   │   │   ├── internal-server-error.component.scss
│   │   │   │   ├── internal-server-error.component.spec.ts
│   │   │   │   └── internal-server-error.component.ts
│   │   │   ├── not-found
│   │   │   │   ├── not-found.component.html
│   │   │   │   ├── not-found.component.scss
│   │   │   │   ├── not-found.component.spec.ts
│   │   │   │   └── not-found.component.ts
│   │   │   ├── question
│   │   │   │   ├── question.component.html
│   │   │   │   ├── question.component.scss
│   │   │   │   ├── question.component.spec.ts
│   │   │   │   ├── question.component.ts
│   │   │   │   ├── question.resolver.ts
│   │   │   │   ├── question.service.spec.ts
│   │   │   │   └── question.service.ts
│   │   │   └── token.interceptor.ts
│   │   ├── assets
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   └── logo.png
│   │   ├── browserslist
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── karma.conf.js
│   │   ├── main.ts
│   │   ├── polyfills.ts
│   │   ├── styles.scss
│   │   ├── test.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.spec.json
│   │   └── tslint.json
│   ├── tsconfig.json
│   └── tslint.json
└── README.md

24 directories, 112 files

## DockerCompose
1. Сборка без забора из cash
```
docker-compose -f docker-compose.yml build --no-cache
```
2. Запуск вновь собраных docker-image через docker-compose
```
docker-compose -f docker-compose.yml up -d
```

## Guide:

1. Базу данных ```questionnaire```  создать через mongo-express http://<IP_ADDRESS>:8081
2. Далее поднимется ```questionnaire-backend``` 
3. У меня постояно 500-ые ошибки про отправке сообщений на backend-server
4. Пока всё.

