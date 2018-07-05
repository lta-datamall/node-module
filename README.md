# LTA Datamall Caller
**Warning:** This API is highly experimental and currently does not comply with [semver](https://semver.org/). Use at your own risk.

![node](https://img.shields.io/node/v/lta-datamall-caller/latest.svg?style=flat-square)
![npm](https://img.shields.io/npm/v/lta-datamall-caller.svg?style=flat-square)
![GitHub tag](https://img.shields.io/github/tag/lta-datamall/node-module.svg?style=flat-square)
![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)

An object-oriented promise-based LTA Datamall API Node.js wrapper written in Typescript.

## What is LTA Datamall Caller
LTA Datamall Caller is a simple Node.JS wrapper to contact the LTA Datamall API.

## Installation
To install the using [NPM](https://www.npmjs.com/):
```
npm install lta-datamall
```

Or if you're using [Yarn](https://yarnpkg.com/en/):
```
yarn install lta-datamall
```

## Usage
This API is Class-based and Promise-based. That means you'll need to create a new object for every request and wait for the promise to resolve.
Using the code below, a new request is made to a dataset and the response is logged to the console.

```Javascript
const LtaDatamallCall = require('lta-datamall-caller');

(async _ => {
    var request = new LtaDatamallCall({'API KEY', 'API DATASET', 'API RESPONSE FORMAT', { API PARAMS });
    var response = await request.response;
    console.log(request.response);
});

```

## API
### `new ltaDatamall([options])`
The constructor used to create a new instance of `LtaDatamallCall`.

### `options`
Options are immutable and must be set when calling the `LtaDatamallCall` constructor.

#### `options.apiAccountKey`
An LTA Datamall account key.

Type: `string`

Default: `undefined`

Required: `true`

#### `options.apiDataset`
An LTA Datamall dataset.

Type: `string`

Default: `undefined`

Required: `true`

#### `options.apiResponseFormat`
The format for the response to be returned in.

Type: `string`

Default: `json`

Required: `false`

Possible values:
```
json
xml
atom+xml
application/json
application/atom+xml
```

#### `options.apiParams`
Query strings to pass to LTA Datamall. Will be left unmutated by this module.

Type: `object`

Default: `undefined`

Required: `false`

## `LtaDatamallCall.response`
The unmutated response from LTA Datamall API dataset.

## FAQ

### Q: Where can I get an Account Key?
You can [request for API access](https://www.mytransport.sg/content/mytransport/home/dataMall/request-for-api.html) from LTA.

### Q: What should I put for `options.apiDataset`?
The dataset name can be found from the last pathname of the API datset URL.

e.g: The dataset name for `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2` would be `BusArrivalv2`.

### Q: Why is `LtaDatamallCall.response` returning a promise?
This module is Promise-based. You can use Async and Await to wait for the promise to finish:
```Javascript
...
async function testFunction() {
    var request = new LtaDatamallCall(...)
    var response = await requset.response;
    console.log(response);
}
```