'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
  function Transform() {
    _classCallCheck(this, Transform);
  }

  _createClass(Transform, [{
    key: 'objKeysToLower',
    value: function objKeysToLower(obj) {
      var _this = this;

      var oWraper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          var prop;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.t0 = regeneratorRuntime.keys(obj);

                case 2:
                  if ((_context.t1 = _context.t0()).done) {
                    _context.next = 20;
                    break;
                  }

                  prop = _context.t1.value;

                  if (!(prop !== '' && obj[prop])) {
                    _context.next = 18;
                    break;
                  }

                  if (!(obj[prop] instanceof Object && !obj[prop].hasOwnProperty('length'))) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 8;
                  return _this.objKeysToLower(obj[prop], {});

                case 8:
                  oWraper[prop.toLowerCase()] = _context.sent;
                  _context.next = 18;
                  break;

                case 11:
                  if (!(obj[prop] instanceof Array)) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 14;
                  return _this.arrKeysToLower(obj[prop], []);

                case 14:
                  oWraper[prop.toLowerCase()] = _context.sent;
                  _context.next = 18;
                  break;

                case 17:
                  oWraper[prop.toLowerCase()] = obj[prop];

                case 18:
                  _context.next = 2;
                  break;

                case 20:
                  resolve(oWraper);
                  _context.next = 26;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t2 = _context['catch'](0);

                  reject(_context.t2);

                case 26:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 23]]);
        }));

        return function (_x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'arrKeysToLower',
    value: function arrKeysToLower(arr) {
      var _this2 = this;

      var aWraper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
          var len, i, o, _o;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  len = arr.length;
                  i = 0;

                case 3:
                  if (!(i < len)) {
                    _context2.next = 22;
                    break;
                  }

                  if (!(arr[i] instanceof Object && !arr[i].hasOwnProperty('length'))) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 7;
                  return _this2.objKeysToLower(arr[i], {});

                case 7:
                  o = _context2.sent;

                  aWraper.push(o);
                  _context2.next = 19;
                  break;

                case 11:
                  if (!(arr[i] instanceof Array)) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 14;
                  return _this2.arrKeysToLower(arr[i], []);

                case 14:
                  _o = _context2.sent;

                  aWraper.push(_o);
                  _context2.next = 19;
                  break;

                case 18:
                  aWraper.push(arr[i]);

                case 19:
                  i++;
                  _context2.next = 3;
                  break;

                case 22:
                  resolve(aWraper);
                  _context2.next = 28;
                  break;

                case 25:
                  _context2.prev = 25;
                  _context2.t0 = _context2['catch'](0);

                  reject(_context2.t0);

                case 28:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 25]]);
        }));

        return function (_x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'objKeysToUpper',
    value: function objKeysToUpper(obj) {
      var _this3 = this;

      var oWraper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new Promise(function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
          var prop;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.t0 = regeneratorRuntime.keys(obj);

                case 2:
                  if ((_context3.t1 = _context3.t0()).done) {
                    _context3.next = 20;
                    break;
                  }

                  prop = _context3.t1.value;

                  if (!(prop !== '' && obj[prop])) {
                    _context3.next = 18;
                    break;
                  }

                  if (!(obj[prop] instanceof Object && !obj[prop].hasOwnProperty('length'))) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.next = 8;
                  return _this3.objKeysToUpper(obj[prop], {});

                case 8:
                  oWraper[prop.toUpperCase()] = _context3.sent;
                  _context3.next = 18;
                  break;

                case 11:
                  if (!(obj[prop] instanceof Array)) {
                    _context3.next = 17;
                    break;
                  }

                  _context3.next = 14;
                  return _this3.arrKeysToUpper(obj[prop], []);

                case 14:
                  oWraper[prop.toUpperCase()] = _context3.sent;
                  _context3.next = 18;
                  break;

                case 17:
                  oWraper[prop.toUpperCase()] = obj[prop];

                case 18:
                  _context3.next = 2;
                  break;

                case 20:
                  resolve(oWraper);
                  _context3.next = 26;
                  break;

                case 23:
                  _context3.prev = 23;
                  _context3.t2 = _context3['catch'](0);

                  reject(_context3.t2);

                case 26:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 23]]);
        }));

        return function (_x8, _x9) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'arrKeysToUpper',
    value: function arrKeysToUpper(arr) {
      var _this4 = this;

      var aWraper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return new Promise(function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
          var len, i, o, _o2;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  len = arr.length;
                  i = 0;

                case 3:
                  if (!(i < len)) {
                    _context4.next = 22;
                    break;
                  }

                  if (!(arr[i] instanceof Object && !arr[i].hasOwnProperty('length'))) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 7;
                  return _this4.objKeysToUpper(arr[i], {});

                case 7:
                  o = _context4.sent;

                  aWraper.push(o);
                  _context4.next = 19;
                  break;

                case 11:
                  if (!(arr[i] instanceof Array)) {
                    _context4.next = 18;
                    break;
                  }

                  _context4.next = 14;
                  return _this4.arrKeysToUpper(arr[i], []);

                case 14:
                  _o2 = _context4.sent;

                  aWraper.push(_o2);
                  _context4.next = 19;
                  break;

                case 18:
                  aWraper.push(arr[i]);

                case 19:
                  i++;
                  _context4.next = 3;
                  break;

                case 22:
                  resolve(aWraper);
                  _context4.next = 28;
                  break;

                case 25:
                  _context4.prev = 25;
                  _context4.t0 = _context4['catch'](0);

                  reject(_context4.t0);

                case 28:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 25]]);
        }));

        return function (_x11, _x12) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);

  return Transform;
}();

exports.default = Transform;
//# sourceMappingURL=Transform.js.map