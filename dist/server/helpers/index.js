'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismCode = require('./prism-code');

Object.keys(_prismCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _prismCode[key];
    }
  });
});

var _numberFormat = require('./number-format');

Object.keys(_numberFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _numberFormat[key];
    }
  });
});

var _dateTime = require('./date-time');

Object.keys(_dateTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dateTime[key];
    }
  });
});