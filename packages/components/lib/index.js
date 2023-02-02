"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _proDemo = require("@tangshuo/pro-demo1");
Object.keys(_proDemo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _proDemo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _proDemo[key];
    }
  });
});