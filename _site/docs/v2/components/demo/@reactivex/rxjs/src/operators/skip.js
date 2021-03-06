System.register('rxjs/src/operators/skip', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, SkipOperator, SkipSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', skip);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function skip(total) {
        return this.lift(new SkipOperator(total));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            SkipOperator = (function () {
                function SkipOperator(total) {
                    _classCallCheck(this, SkipOperator);

                    this.total = total;
                }

                _createClass(SkipOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new SkipSubscriber(subscriber, this.total);
                    }
                }]);

                return SkipOperator;
            })();

            SkipSubscriber = (function (_Subscriber) {
                _inherits(SkipSubscriber, _Subscriber);

                function SkipSubscriber(destination, total) {
                    _classCallCheck(this, SkipSubscriber);

                    _get(Object.getPrototypeOf(SkipSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                    this.total = total;
                }

                _createClass(SkipSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        if (++this.count > this.total) {
                            this.destination.next(x);
                        }
                    }
                }]);

                return SkipSubscriber;
            })(Subscriber);
        }
    };
});