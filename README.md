# koa-firebase-functions

Koa wrapper for Firebase functions.

# Installation

```
npm i koa-firebase-functions --save
```

# Usage

```js
const koaFirebase = require('koa-firebase-functions');
const koa = require('koa')
      , app = koa.app();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

exports.api = functions.https.onRequest(koaFirebase(app));

// Visit https://us-central1-MY_PROJECT.cloudfunctions.net/api
```

# License
MIT
