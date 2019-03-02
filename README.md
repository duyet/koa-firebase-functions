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

...

exports.api = functions.https.onRequest(koaFirebase(app));
```
