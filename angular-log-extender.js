'use strict';

angular.module('logExtender', [])
    .config(function ($provide) {

        /**
         * matches and groups {}
         *
         * @type {RegExp}
         */
        var PLACEHOLDER_MATCHER = /(\{\})/g;

        /**
         * searches for {} placeholders in the first string argument and inject
         * all following arguments.
         *
         * @returns {*|XML|string|void}
         * @private
         */
        function _format () {
            var args = arguments,
                str = Array.prototype.shift.call(args);
            return str.replace(PLACEHOLDER_MATCHER, function () {
                return Array.prototype.shift.call(args);
            });
        }

        function _swap (obj, fnName) {
            var _fn = obj[fnName];
            obj[fnName] = function() {
                var str;
                if (arguments[0].match(PLACEHOLDER_MATCHER)) {
                    str = _format.apply(this, arguments);
                    return _fn.apply(this, [str]);
                }
                return _fn.apply(this, arguments);
            };
        }

        $provide.decorator('$log', function($delegate) {
            // mapping each function to a new implementation
            Object.keys($delegate).map(function (currentValue/*, index, array*/) {
                if (currentValue === 'log') {
                    return;
                }
                return _swap($delegate, currentValue);
            });
            return $delegate;
        });

    });
