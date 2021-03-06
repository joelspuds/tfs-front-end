'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vtsChanges = require('./vts-changes');

Object.keys(_vtsChanges).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vtsChanges[key];
    }
  });
});